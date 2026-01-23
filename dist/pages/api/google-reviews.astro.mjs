export { renderers } from '../../renderers.mjs';

const rateLimitMap = /* @__PURE__ */ new Map();
const RATE_LIMIT_WINDOW = 60 * 1e3;
const RATE_LIMIT_MAX_REQUESTS = 10;
function checkRateLimit(ip) {
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
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW * 2);
function getClientIP(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}
function validatePlaceId(placeId) {
  if (placeId.length < 5 || placeId.length > 200) {
    return false;
  }
  return /^[a-zA-Z0-9:._-]+$/.test(placeId);
}
const GET = async ({ request }) => {
  const clientIP = getClientIP(request);
  if (!checkRateLimit(clientIP)) {
    return new Response(
      JSON.stringify({
        reviews: [],
        error: "Rate limit exceeded. Please try again later."
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": "60",
          "Access-Control-Allow-Origin": request.headers.get("origin") || "*"
        }
      }
    );
  }
  const origin = request.headers.get("origin");
  const allowedOrigins = [
    "https://shorelinewebsolutions.com",
    "http://localhost:4321",
    "http://localhost:3000"
  ];
  if (origin && !allowedOrigins.includes(origin)) {
    return new Response(
      JSON.stringify({
        reviews: [],
        error: "Forbidden"
      }),
      {
        status: 403,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
  try {
    const apiKey = "AIzaSyCsUvQrRNVv7aJU3LFc7aRH3i9eOySoKgc";
    const placeId = "0x8339fd9351d14321:0x12a4c39543cf3b5f";
    if (!apiKey || !placeId) ;
    if (!validatePlaceId(placeId)) {
      return new Response(
        JSON.stringify({
          reviews: [],
          error: "Invalid request"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": origin || "*"
          }
        }
      );
    }
    let url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    if (data.status === "INVALID_REQUEST" || data.status === "NOT_FOUND") {
      const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Shoreline+Web+Solutions&key=${apiKey}`;
      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();
      if (searchData.status === "OK" && searchData.results && searchData.results.length > 0) {
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
          error: "Unable to fetch reviews at this time"
        }),
        {
          status: 503,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=300",
            // Cache errors for 5 minutes
            "Access-Control-Allow-Origin": origin || "*"
          }
        }
      );
    }
    const reviews = (data.result.reviews || []).map((review) => ({
      author: review.author_name || "Anonymous",
      rating: review.rating || 5,
      text: review.text || "",
      date: review.time ? new Date(review.time * 1e3).toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      authorImage: review.profile_photo_url || null,
      reviewUrl: review.author_url || `https://www.google.com/maps/place/?q=place_id:${placeId}`
    }));
    return new Response(
      JSON.stringify({
        reviews,
        totalRating: data.result.rating || null,
        totalReviews: data.result.user_ratings_total || reviews.length
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600",
          // Cache for 1 hour
          "Access-Control-Allow-Origin": origin || "*",
          "X-Content-Type-Options": "nosniff"
        }
      }
    );
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return new Response(
      JSON.stringify({
        reviews: [],
        error: "An error occurred while fetching reviews"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": origin || "*",
          "X-Content-Type-Options": "nosniff"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
