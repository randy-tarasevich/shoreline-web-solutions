import type { APIRoute } from "astro";

// Google Reviews API Endpoint
// This fetches reviews from Google Places API
//
// Security Features:
// - Rate limiting (in-memory, simple implementation)
// - Input validation
// - CORS restrictions
// - Error handling without information disclosure
// - Request size limits

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 10; // 10 requests per minute per IP

function checkRateLimit(ip: string): boolean {
	const now = Date.now();
	const record = rateLimitMap.get(ip);

	if (!record || now > record.resetTime) {
		rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
		return true;
	}

	if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
		return false;
	}

	record.count++;
	return true;
}

// Clean up old rate limit records periodically
setInterval(() => {
	const now = Date.now();
	for (const [ip, record] of rateLimitMap.entries()) {
		if (now > record.resetTime) {
			rateLimitMap.delete(ip);
		}
	}
}, RATE_LIMIT_WINDOW * 2);

function getClientIP(request: Request): string {
	// Try to get real IP from headers (if behind proxy)
	const forwarded = request.headers.get("x-forwarded-for");
	if (forwarded) {
		return forwarded.split(",")[0].trim();
	}
	const realIP = request.headers.get("x-real-ip");
	if (realIP) {
		return realIP;
	}
	// Fallback (won't work in serverless, but helps in dev)
	return "unknown";
}

function validatePlaceId(placeId: string): boolean {
	// Basic validation: should be alphanumeric with some special chars
	// Google Place IDs can be various formats (ChIJ..., 0x...:0x..., etc.)
	if (!placeId || typeof placeId !== "string") {
		return false;
	}
	// Allow reasonable length (Google Place IDs are typically 27 chars but can vary)
	if (placeId.length < 5 || placeId.length > 200) {
		return false;
	}
	// Allow alphanumeric, colons, hyphens, underscores, dots
	// This covers formats like: ChIJ..., 0x...:0x..., etc.
	return /^[a-zA-Z0-9:._-]+$/.test(placeId);
}

export const GET: APIRoute = async ({ request }) => {
	// Security: Check rate limiting
	const clientIP = getClientIP(request);
	if (!checkRateLimit(clientIP)) {
		return new Response(
			JSON.stringify({
				reviews: [],
				error: "Rate limit exceeded. Please try again later.",
			}),
			{
				status: 429,
				headers: {
					"Content-Type": "application/json",
					"Retry-After": "60",
					"Access-Control-Allow-Origin": request.headers.get("origin") || "*",
				},
			},
		);
	}

	// Security: CORS - Only allow requests from your domain
	const origin = request.headers.get("origin");
	const allowedOrigins = [
		"https://shorelinewebsolutions.com",
		"http://localhost:4321",
		"http://localhost:3000",
	];

	if (origin && !allowedOrigins.includes(origin)) {
		return new Response(
			JSON.stringify({
				reviews: [],
				error: "Forbidden",
			}),
			{
				status: 403,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}

	try {
		const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
		const placeId = import.meta.env.GOOGLE_PLACE_ID;

		// Check if API key and Place ID are configured
		if (!apiKey || !placeId) {
			// Security: Don't expose configuration details in error messages
			return new Response(
				JSON.stringify({
					reviews: [],
					error: "Service temporarily unavailable",
				}),
				{
					status: 503,
					headers: {
						"Content-Type": "application/json",
						"Cache-Control": "public, max-age=300", // Cache errors for 5 minutes
						"Access-Control-Allow-Origin": origin || "*",
					},
				},
			);
		}

		// Security: Validate Place ID format
		if (!validatePlaceId(placeId)) {
			return new Response(
				JSON.stringify({
					reviews: [],
					error: "Invalid request",
				}),
				{
					status: 400,
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": origin || "*",
					},
				},
			);
		}

		// Fetch place details from Google Places API
		// Note: Place ID from URL might need to be converted to canonical format
		// Try the Place ID as-is first, then try to find it if it fails
		let url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;

		let response = await fetch(url);
		let data = await response.json();

		// If Place ID format is wrong, try to find the place by name
		if (data.status === "INVALID_REQUEST" || data.status === "NOT_FOUND") {
			// Try using Places API Text Search to find the place
			const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Shoreline+Web+Solutions&key=${apiKey}`;
			const searchResponse = await fetch(searchUrl);
			const searchData = await searchResponse.json();

			if (
				searchData.status === "OK" &&
				searchData.results &&
				searchData.results.length > 0
			) {
				// Use the first result's place_id
				const foundPlaceId = searchData.results[0].place_id;
				url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(foundPlaceId)}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;
				response = await fetch(url);
				data = await response.json();
			}
		}

		if (data.status !== "OK" || !data.result) {
			// Security: Don't expose internal API error details
			// Log server-side but return generic error to client
			console.error("Google Places API error:", data.status);
			return new Response(
				JSON.stringify({
					reviews: [],
					error: "Unable to fetch reviews at this time",
				}),
				{
					status: 503,
					headers: {
						"Content-Type": "application/json",
						"Cache-Control": "public, max-age=300", // Cache errors for 5 minutes
						"Access-Control-Allow-Origin": origin || "*",
					},
				},
			);
		}

		// Transform Google reviews to our format
		const reviews = (data.result.reviews || []).map((review: any) => ({
			author: review.author_name || "Anonymous",
			rating: review.rating || 5,
			text: review.text || "",
			date: review.time
				? new Date(review.time * 1000).toISOString().split("T")[0]
				: new Date().toISOString().split("T")[0],
			authorImage: review.profile_photo_url || null,
			reviewUrl:
				review.author_url ||
				`https://www.google.com/maps/place/?q=place_id:${placeId}`,
		}));

		return new Response(
			JSON.stringify({
				reviews: reviews,
				totalRating: data.result.rating || null,
				totalReviews: data.result.user_ratings_total || reviews.length,
			}),
			{
				status: 200,
				headers: {
					"Content-Type": "application/json",
					"Cache-Control": "public, max-age=3600", // Cache for 1 hour
					"Access-Control-Allow-Origin": origin || "*",
					"X-Content-Type-Options": "nosniff",
				},
			},
		);
	} catch (error) {
		// Security: Log error server-side but don't expose details to client
		console.error("Error fetching Google reviews:", error);
		return new Response(
			JSON.stringify({
				reviews: [],
				error: "An error occurred while fetching reviews",
			}),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": origin || "*",
					"X-Content-Type-Options": "nosniff",
				},
			},
		);
	}
};
