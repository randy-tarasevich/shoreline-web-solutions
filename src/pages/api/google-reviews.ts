import type { APIRoute } from "astro";

// Google Reviews API Endpoint
// This fetches reviews from Google Places API
//
// Setup Required:
// 1. Get Google Places API key from Google Cloud Console
// 2. Enable Places API in your project
// 3. Add your Place ID (find it in Google Business Profile)
// 4. Add API key to .env file: GOOGLE_PLACES_API_KEY=your_key_here
// 5. Add Place ID to .env file: GOOGLE_PLACE_ID=your_place_id_here

export const GET: APIRoute = async ({ request }) => {
	try {
		const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
		const placeId = import.meta.env.GOOGLE_PLACE_ID;

		// Check if API key and Place ID are configured
		if (!apiKey || !placeId) {
			console.warn("Google Places API not configured. Using fallback reviews.");
			return new Response(
				JSON.stringify({
					reviews: [],
					error:
						"Google Places API not configured. Please add GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID to your .env file.",
				}),
				{
					status: 200,
					headers: {
						"Content-Type": "application/json",
						"Cache-Control": "public, max-age=3600", // Cache for 1 hour
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
			console.error("Google Places API error:", data.status);
			return new Response(
				JSON.stringify({
					reviews: [],
					error: `Google Places API error: ${data.status}`,
				}),
				{
					status: 200,
					headers: {
						"Content-Type": "application/json",
						"Cache-Control": "public, max-age=300", // Cache errors for 5 minutes
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
				},
			},
		);
	} catch (error) {
		console.error("Error fetching Google reviews:", error);
		return new Response(
			JSON.stringify({
				reviews: [],
				error: error instanceof Error ? error.message : "Unknown error",
			}),
			{
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
	}
};
