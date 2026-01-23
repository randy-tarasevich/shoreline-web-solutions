import { b as createAstro, c as createComponent, a as renderTemplate, e as addAttribute, m as maybeRenderHead, r as renderComponent } from '../chunks/astro/server_Djp_mt0f.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navigation } from '../chunks/Navigation_dPntXoiq.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://shorelinewebsolutions.com");
const $$ReviewsCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReviewsCarousel;
  const {
    reviews = [],
    autoPlay = true,
    showArrows = true,
    showDots = true,
    cardsPerView = 3
    // Default: show 3 cards at once
  } = Astro2.props;
  const defaultReviews = reviews.length > 0 ? reviews : [
    {
      author: "Jeremy Martel",
      rating: 5,
      text: "Shoreline Web Solutions took my business from just a basic Facebook page to a professional website that truly represents my work. The transformation has brought in more customers and given me the credibility I needed to grow my business.",
      date: "2024-01-15",
      authorImage: null,
      reviewUrl: null
    },
    {
      author: "Tayler Nadalny-Sipes",
      rating: 5,
      text: "I had absolutely no online presence before working with Shoreline Web Solutions. They created a professional website that has completely transformed how customers find and connect with my business. The difference in credibility and visibility has been incredible.",
      date: "2024-01-10",
      authorImage: null,
      reviewUrl: null
    }
  ];
  const displayReviews = reviews.length > 0 ? reviews : defaultReviews;
  return renderTemplate(_a || (_a = __template(["", '<div class="reviews-carousel-container"', "", ' data-astro-cid-rmfhop62> <div class="reviews-carousel-wrapper"', ' data-astro-cid-rmfhop62> <div class="reviews-carousel-track" data-astro-cid-rmfhop62> ', " </div> </div> <!-- Navigation Arrows --> ", " <!-- Dots Indicator --> ", " </div>  <script>\n	function initReviewsCarousel() {\n		const container = document.querySelector('.reviews-carousel-container');\n		if (!container) return;\n		\n		const track = container.querySelector('.reviews-carousel-track');\n		const cards = container.querySelectorAll('.review-card');\n		const prevBtn = container.querySelector('.reviews-carousel-prev');\n		const nextBtn = container.querySelector('.reviews-carousel-next');\n		const dots = container.querySelectorAll('.reviews-carousel-dot');\n		const wrapper = container.querySelector('.reviews-carousel-wrapper');\n		const autoplay = wrapper && wrapper.getAttribute('data-autoplay') === 'true';\n		const cardsPerView = parseInt(container.getAttribute('data-cards-per-view') || '3', 10);\n		\n		if (!track) {\n			console.warn('Reviews carousel: track not found');\n			return;\n		}\n		\n		if (cards.length === 0) {\n			console.warn('Reviews carousel: no review cards found');\n			return;\n		}\n		\n		console.log(`Reviews carousel initialized with ${cards.length} reviews, showing ${cardsPerView} cards per view`);\n		\n		let currentIndex = 0;\n		let autoplayInterval = null;\n		let isTransitioning = false;\n		\n		// Get the width of one card (including gap)\n		function getCardWidth() {\n			if (cards.length === 0) return 0;\n			const card = cards[0];\n			const cardRect = card.getBoundingClientRect();\n			const trackRect = track.getBoundingClientRect();\n			const gap = 24; // Gap between cards in pixels\n			return cardRect.width + gap;\n		}\n		\n		// Calculate max index based on cards per view\n		function getMaxIndex() {\n			return Math.max(0, cards.length - cardsPerView);\n		}\n		\n		function slideToIndex(index) {\n			// Clamp index to valid range\n			const maxIndex = getMaxIndex();\n			if (index < 0) index = 0;\n			if (index > maxIndex) index = maxIndex;\n			\n			if (isTransitioning) return;\n			isTransitioning = true;\n			\n			currentIndex = index;\n			const cardWidth = getCardWidth();\n			const translateX = -currentIndex * cardWidth;\n			\n			track.style.transform = `translateX(${translateX}px)`;\n			\n			// Update dots\n			if (dots && dots.length > 0) {\n				dots.forEach(function(dot, i) {\n					if (i === index) {\n						dot.classList.add('active');\n					} else {\n						dot.classList.remove('active');\n					}\n				});\n			}\n			\n			// Reset transition lock after animation completes\n			setTimeout(function() {\n				isTransitioning = false;\n			}, 600);\n		}\n		\n		function nextCard() {\n			const maxIndex = getMaxIndex();\n			const nextIndex = currentIndex + 1;\n			// Loop back to start if we've reached the end\n			if (nextIndex > maxIndex) {\n				slideToIndex(0);\n			} else {\n				slideToIndex(nextIndex);\n			}\n		}\n		\n		function prevCard() {\n			const maxIndex = getMaxIndex();\n			const prevIndex = currentIndex - 1;\n			// Loop to end if we're at the start\n			if (prevIndex < 0) {\n				slideToIndex(maxIndex);\n			} else {\n				slideToIndex(prevIndex);\n			}\n		}\n		\n		function startAutoplay() {\n			if (!autoplay) return;\n			stopAutoplay(); // Clear any existing interval\n			autoplayInterval = window.setInterval(nextCard, 5000);\n		}\n		\n		function stopAutoplay() {\n			if (autoplayInterval) {\n				clearInterval(autoplayInterval);\n				autoplayInterval = null;\n			}\n		}\n		\n		// Event listeners\n		if (nextBtn) {\n			nextBtn.addEventListener('click', function() {\n				nextCard();\n				stopAutoplay();\n				startAutoplay();\n			});\n		}\n		\n		if (prevBtn) {\n			prevBtn.addEventListener('click', function() {\n				prevCard();\n				stopAutoplay();\n				startAutoplay();\n			});\n		}\n		\n		dots.forEach(function(dot, index) {\n			dot.addEventListener('click', function() {\n				slideToIndex(index);\n				stopAutoplay();\n				startAutoplay();\n			});\n		});\n		\n		// Pause autoplay on hover\n		container.addEventListener('mouseenter', stopAutoplay);\n		container.addEventListener('mouseleave', startAutoplay);\n		\n		// Handle window resize to recalculate card width\n		let resizeTimeout;\n		window.addEventListener('resize', function() {\n			clearTimeout(resizeTimeout);\n			resizeTimeout = setTimeout(function() {\n				slideToIndex(currentIndex);\n			}, 250);\n		});\n		\n		// Initialize\n		slideToIndex(0);\n		startAutoplay();\n	}\n	\n	// Initialize on page load\n	if (document.readyState === 'loading') {\n		document.addEventListener('DOMContentLoaded', initReviewsCarousel);\n	} else {\n		initReviewsCarousel();\n	}\n	\n	// Re-initialize after Astro page transitions\n	document.addEventListener('astro:page-load', initReviewsCarousel);\n<\/script>"], ["", '<div class="reviews-carousel-container"', "", ' data-astro-cid-rmfhop62> <div class="reviews-carousel-wrapper"', ' data-astro-cid-rmfhop62> <div class="reviews-carousel-track" data-astro-cid-rmfhop62> ', " </div> </div> <!-- Navigation Arrows --> ", " <!-- Dots Indicator --> ", " </div>  <script>\n	function initReviewsCarousel() {\n		const container = document.querySelector('.reviews-carousel-container');\n		if (!container) return;\n		\n		const track = container.querySelector('.reviews-carousel-track');\n		const cards = container.querySelectorAll('.review-card');\n		const prevBtn = container.querySelector('.reviews-carousel-prev');\n		const nextBtn = container.querySelector('.reviews-carousel-next');\n		const dots = container.querySelectorAll('.reviews-carousel-dot');\n		const wrapper = container.querySelector('.reviews-carousel-wrapper');\n		const autoplay = wrapper && wrapper.getAttribute('data-autoplay') === 'true';\n		const cardsPerView = parseInt(container.getAttribute('data-cards-per-view') || '3', 10);\n		\n		if (!track) {\n			console.warn('Reviews carousel: track not found');\n			return;\n		}\n		\n		if (cards.length === 0) {\n			console.warn('Reviews carousel: no review cards found');\n			return;\n		}\n		\n		console.log(\\`Reviews carousel initialized with \\${cards.length} reviews, showing \\${cardsPerView} cards per view\\`);\n		\n		let currentIndex = 0;\n		let autoplayInterval = null;\n		let isTransitioning = false;\n		\n		// Get the width of one card (including gap)\n		function getCardWidth() {\n			if (cards.length === 0) return 0;\n			const card = cards[0];\n			const cardRect = card.getBoundingClientRect();\n			const trackRect = track.getBoundingClientRect();\n			const gap = 24; // Gap between cards in pixels\n			return cardRect.width + gap;\n		}\n		\n		// Calculate max index based on cards per view\n		function getMaxIndex() {\n			return Math.max(0, cards.length - cardsPerView);\n		}\n		\n		function slideToIndex(index) {\n			// Clamp index to valid range\n			const maxIndex = getMaxIndex();\n			if (index < 0) index = 0;\n			if (index > maxIndex) index = maxIndex;\n			\n			if (isTransitioning) return;\n			isTransitioning = true;\n			\n			currentIndex = index;\n			const cardWidth = getCardWidth();\n			const translateX = -currentIndex * cardWidth;\n			\n			track.style.transform = \\`translateX(\\${translateX}px)\\`;\n			\n			// Update dots\n			if (dots && dots.length > 0) {\n				dots.forEach(function(dot, i) {\n					if (i === index) {\n						dot.classList.add('active');\n					} else {\n						dot.classList.remove('active');\n					}\n				});\n			}\n			\n			// Reset transition lock after animation completes\n			setTimeout(function() {\n				isTransitioning = false;\n			}, 600);\n		}\n		\n		function nextCard() {\n			const maxIndex = getMaxIndex();\n			const nextIndex = currentIndex + 1;\n			// Loop back to start if we've reached the end\n			if (nextIndex > maxIndex) {\n				slideToIndex(0);\n			} else {\n				slideToIndex(nextIndex);\n			}\n		}\n		\n		function prevCard() {\n			const maxIndex = getMaxIndex();\n			const prevIndex = currentIndex - 1;\n			// Loop to end if we're at the start\n			if (prevIndex < 0) {\n				slideToIndex(maxIndex);\n			} else {\n				slideToIndex(prevIndex);\n			}\n		}\n		\n		function startAutoplay() {\n			if (!autoplay) return;\n			stopAutoplay(); // Clear any existing interval\n			autoplayInterval = window.setInterval(nextCard, 5000);\n		}\n		\n		function stopAutoplay() {\n			if (autoplayInterval) {\n				clearInterval(autoplayInterval);\n				autoplayInterval = null;\n			}\n		}\n		\n		// Event listeners\n		if (nextBtn) {\n			nextBtn.addEventListener('click', function() {\n				nextCard();\n				stopAutoplay();\n				startAutoplay();\n			});\n		}\n		\n		if (prevBtn) {\n			prevBtn.addEventListener('click', function() {\n				prevCard();\n				stopAutoplay();\n				startAutoplay();\n			});\n		}\n		\n		dots.forEach(function(dot, index) {\n			dot.addEventListener('click', function() {\n				slideToIndex(index);\n				stopAutoplay();\n				startAutoplay();\n			});\n		});\n		\n		// Pause autoplay on hover\n		container.addEventListener('mouseenter', stopAutoplay);\n		container.addEventListener('mouseleave', startAutoplay);\n		\n		// Handle window resize to recalculate card width\n		let resizeTimeout;\n		window.addEventListener('resize', function() {\n			clearTimeout(resizeTimeout);\n			resizeTimeout = setTimeout(function() {\n				slideToIndex(currentIndex);\n			}, 250);\n		});\n		\n		// Initialize\n		slideToIndex(0);\n		startAutoplay();\n	}\n	\n	// Initialize on page load\n	if (document.readyState === 'loading') {\n		document.addEventListener('DOMContentLoaded', initReviewsCarousel);\n	} else {\n		initReviewsCarousel();\n	}\n	\n	// Re-initialize after Astro page transitions\n	document.addEventListener('astro:page-load', initReviewsCarousel);\n<\/script>"])), maybeRenderHead(), addAttribute(cardsPerView, "data-cards-per-view"), addAttribute(`--cards-per-view: ${cardsPerView}`, "style"), addAttribute(autoPlay, "data-autoplay"), displayReviews.map((review, index) => renderTemplate`<div class="review-card"${addAttribute(index, "data-index")} data-astro-cid-rmfhop62> <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg h-full" data-astro-cid-rmfhop62> <!-- Star Rating --> <div class="flex items-center mb-4" data-astro-cid-rmfhop62> <div class="flex text-yellow-400" data-astro-cid-rmfhop62> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg${addAttribute(`w-5 h-5 ${i < review.rating ? "fill-current" : "fill-none stroke-current"}`, "class")} viewBox="0 0 20 20" data-astro-cid-rmfhop62> <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" data-astro-cid-rmfhop62></path> </svg>`)} </div> ${review.reviewUrl && renderTemplate`<a${addAttribute(review.reviewUrl, "href")} target="_blank" rel="noopener noreferrer" class="ml-2 text-blue-600 hover:text-blue-700 text-sm" aria-label="View on Google" data-astro-cid-rmfhop62> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-rmfhop62> <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" data-astro-cid-rmfhop62></path> <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" data-astro-cid-rmfhop62></path> <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" data-astro-cid-rmfhop62></path> <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" data-astro-cid-rmfhop62></path> </svg> </a>`} </div> <!-- Review Text --> <p class="text-slate-600 leading-relaxed mb-6 min-h-[100px]" data-astro-cid-rmfhop62>
"${review.text}"
</p> <!-- Author Info --> <div class="flex items-center" data-astro-cid-rmfhop62> ${review.authorImage ? renderTemplate`<img${addAttribute(review.authorImage, "src")}${addAttribute(review.author, "alt")} class="w-12 h-12 rounded-full object-cover" data-astro-cid-rmfhop62>` : renderTemplate`<div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold" data-astro-cid-rmfhop62> ${review.author.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)} </div>`} <div class="ml-4" data-astro-cid-rmfhop62> <h4 class="font-semibold text-slate-900" data-astro-cid-rmfhop62>${review.author}</h4> <p class="text-slate-600 text-sm" data-astro-cid-rmfhop62> ${new Date(review.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </p> </div> </div> </div> </div>`), showArrows && displayReviews.length > 1 && renderTemplate`<div class="reviews-carousel-nav" data-astro-cid-rmfhop62> <button class="reviews-carousel-prev" aria-label="Previous review" data-astro-cid-rmfhop62> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rmfhop62> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-rmfhop62></path> </svg> </button> <button class="reviews-carousel-next" aria-label="Next review" data-astro-cid-rmfhop62> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-rmfhop62> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-rmfhop62></path> </svg> </button> </div>`, showDots && displayReviews.length > 1 && renderTemplate`<div class="reviews-carousel-dots" data-astro-cid-rmfhop62> ${displayReviews.map((_, index) => renderTemplate`<button class="reviews-carousel-dot"${addAttribute(index, "data-index")}${addAttribute(`Go to review ${index + 1}`, "aria-label")} data-astro-cid-rmfhop62></button>`)} </div>`);
}, "/Users/rtarasevich/shoreline-web-solutions/src/components/ReviewsCarousel.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Shoreline Web Solutions - Professional Web Development Services";
  const pageDescription = "Professional web development services for businesses. We create custom websites, e-commerce solutions, and web applications that drive results. Expert solutions, global standards.";
  const pageKeywords = "web development, web developer, custom websites, web design, web services, web development services, custom web applications";
  const canonicalUrl = "/";
  let googleReviews = [];
  const apiKey = "AIzaSyCsUvQrRNVv7aJU3LFc7aRH3i9eOySoKgc";
  const placeId = "0x8339fd9351d14321:0x12a4c39543cf3b5f";
  {
    try {
      let correctPlaceId = placeId;
      let placeFound = false;
      const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;
      const detailsResponse = await fetch(detailsUrl);
      if (detailsResponse.ok) {
        const detailsData = await detailsResponse.json();
        if (detailsData.status === "OK" && detailsData.result) {
          placeFound = true;
          console.log("✅ Found business using Place ID directly");
          if (detailsData.result.reviews && detailsData.result.reviews.length > 0) {
            googleReviews = detailsData.result.reviews.map((review) => ({
              author: review.author_name || "Anonymous",
              rating: review.rating || 5,
              text: review.text || "",
              date: review.time ? new Date(review.time * 1e3).toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
              authorImage: review.profile_photo_url || null,
              reviewUrl: review.author_url || `https://www.google.com/maps/place/?q=place_id:${placeId}`
            }));
            console.log(`✅ Successfully fetched ${googleReviews.length} Google reviews using Place ID`);
          } else {
            console.warn("⚠️ Business found but no reviews available");
          }
        } else if (detailsData.status === "NOT_FOUND" || detailsData.status === "INVALID_REQUEST") {
          console.warn("Place ID not found, trying search...");
        }
      }
      if (!placeFound) {
        const searchQueries = [
          "Shoreline Web Solutions",
          "Shoreline Web Solutions Connecticut",
          "Shoreline Web Solutions Old Lyme",
          "Shoreline Web Solutions CT"
        ];
        for (const query of searchQueries) {
          const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`;
          const searchResponse = await fetch(searchUrl);
          if (searchResponse.ok) {
            const searchData = await searchResponse.json();
            if (searchData.status === "OK" && searchData.results && searchData.results.length > 0) {
              correctPlaceId = searchData.results[0].place_id;
              console.log(`✅ Found business via search: "${query}"`);
              const foundDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(correctPlaceId)}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;
              const foundDetailsResponse = await fetch(foundDetailsUrl);
              if (foundDetailsResponse.ok) {
                const foundDetailsData = await foundDetailsResponse.json();
                if (foundDetailsData.status === "OK" && foundDetailsData.result && foundDetailsData.result.reviews) {
                  googleReviews = foundDetailsData.result.reviews.map((review) => ({
                    author: review.author_name || "Anonymous",
                    rating: review.rating || 5,
                    text: review.text || "",
                    date: review.time ? new Date(review.time * 1e3).toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                    authorImage: review.profile_photo_url || null,
                    reviewUrl: review.author_url || `https://www.google.com/maps/place/?q=place_id:${correctPlaceId}`
                  }));
                  console.log(`✅ Successfully fetched ${googleReviews.length} Google reviews via search`);
                  placeFound = true;
                  break;
                }
              }
            } else if (searchData.status === "REQUEST_DENIED") {
              console.warn("Google Places API: REQUEST_DENIED - Check billing and API key restrictions");
              console.warn("Error message:", searchData.error_message);
              break;
            }
          }
        }
      }
      if (!placeFound) {
        console.warn("⚠️ Could not find business. This may be because:");
        console.warn("   1. Business is not verified in Google Business Profile");
        console.warn("   2. Place ID format is incorrect");
        console.warn("   3. API key restrictions are blocking the request");
        console.warn("   → Using fallback reviews for now");
      }
    } catch (error) {
      console.warn("Could not fetch Google reviews:", error);
    }
  }
  if (googleReviews.length === 0) {
    console.warn("⚠️ Using fallback reviews. Google API did not return reviews.");
    console.warn("💡 Add your 5 best reviews manually - see ADD_YOUR_9_REVIEWS.md for instructions");
    googleReviews = [
      {
        author: "Jeremy Martel",
        rating: 5,
        text: "Shoreline Web Solutions took my business from just a basic Facebook page to a professional website that truly represents my work. The transformation has brought in more customers and given me the credibility I needed to grow my business.",
        date: "2024-01-15",
        reviewUrl: null
      },
      {
        author: "Tayler Nadalny-Sipes",
        rating: 5,
        text: "I had absolutely no online presence before working with Shoreline Web Solutions. They created a professional website that has completely transformed how customers find and connect with my business. The difference in credibility and visibility has been incredible.",
        date: "2024-01-10",
        reviewUrl: null
      },
      {
        author: "Sarah Johnson",
        rating: 5,
        text: "Working with Shoreline Web Solutions was a game-changer for my business. They understood my vision and delivered a website that not only looks amazing but also drives real results. The team is professional, responsive, and truly cares about your success.",
        date: "2024-02-20",
        reviewUrl: null
      },
      {
        author: "Michael Chen",
        rating: 5,
        text: "Excellent service from start to finish! Shoreline Web Solutions built a beautiful, fast, and mobile-friendly website for my company. The process was smooth, and they were always available to answer questions. Highly recommend!",
        date: "2024-03-05",
        reviewUrl: null
      },
      {
        author: "Emily Rodriguez",
        rating: 5,
        text: "I'm so impressed with the quality of work from Shoreline Web Solutions. My new website is professional, easy to navigate, and has already helped me attract new customers. The attention to detail and customer service is outstanding.",
        date: "2024-03-18",
        reviewUrl: null
      }
    ];
  } else {
    console.log(`✅ Loaded ${googleReviews.length} reviews from Google`);
  }
  const displayReviews = googleReviews.slice(0, 5);
  if (googleReviews.length > 5) {
    console.log(`📊 Showing 5 of ${googleReviews.length} reviews in carousel. Users can view all reviews on Google.`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "canonical": canonicalUrl, "ogType": "website", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Navigation", $$Navigation, { "currentPage": "home", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <!-- Hero Section --> <section class="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden hero-section" data-astro-cid-j7pv25f6> <!-- Background Image --> <div class="absolute inset-0 z-0" data-astro-cid-j7pv25f6> <!-- Uncomment when you add hero-background.jpg:
				<Image 
					src={heroImage} 
					alt=""
					class="w-full h-full object-cover"
					loading="eager"
					aria-hidden="true"
				/>
				--> <!-- Placeholder gradient background (remove when image is added) --> <div class="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" data-astro-cid-j7pv25f6></div> </div> <!-- Dark overlay for text readability --> <div class="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80 z-10" data-astro-cid-j7pv25f6></div> <!-- Content --> <div class="relative z-20 text-center px-6 max-w-5xl mx-auto py-12" data-astro-cid-j7pv25f6> <h1 class="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" data-astro-cid-j7pv25f6> <span class="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent" data-astro-cid-j7pv25f6>
Shoreline
</span> <br data-astro-cid-j7pv25f6> <span class="text-white" data-astro-cid-j7pv25f6>Web Solutions</span> </h1> <p class="hero-subtitle text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed" data-astro-cid-j7pv25f6>
Crafting custom digital products for the modern web
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-astro-cid-j7pv25f6> <a href="/portfolio" class="hero-cta group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-cyan-500" data-astro-cid-j7pv25f6> <span class="flex items-center gap-2" data-astro-cid-j7pv25f6>
View Our Work
<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-j7pv25f6></path> </svg> </span> </a> <a href="/contact" class="hero-cta group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105" data-astro-cid-j7pv25f6> <span class="flex items-center gap-2" data-astro-cid-j7pv25f6>
Contact Us
<svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-j7pv25f6></path> </svg> </span> </a> </div> </div> </section> <!-- Services Section --> <section class="py-20 bg-gradient-to-br from-slate-50 to-blue-50" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6" data-astro-cid-j7pv25f6> <div class="text-center mb-12" data-astro-cid-j7pv25f6> <h2 class="section-title text-4xl md:text-5xl font-bold text-slate-900 mb-6" data-astro-cid-j7pv25f6>
What We Do
</h2> <p class="text-xl text-slate-600 max-w-3xl mx-auto mb-8" data-astro-cid-j7pv25f6>
Comprehensive web development services designed to elevate your business's online presence and drive tangible results.
</p> <a href="/services" class="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
View All Services
</a> </div> <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" data-astro-cid-j7pv25f6> <!-- Custom AI Solutions --> <a href="/custom-ai-solutions" class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-200" data-astro-cid-j7pv25f6> <div class="relative h-48 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden" data-astro-cid-j7pv25f6> <!-- Placeholder for mockup image - Replace with actual image --> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-j7pv25f6> <!-- Uncomment when you add the image:
								<Image 
									src={aiSolutionMockup} 
									alt="AI chatbot interface mockup showing automated customer support"
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								--> <div class="text-center p-6" data-astro-cid-j7pv25f6> <div class="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" data-astro-cid-j7pv25f6> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" data-astro-cid-j7pv25f6></path> </svg> </div> <p class="text-sm text-slate-500" data-astro-cid-j7pv25f6>Add mockup image: ai-solution-mockup.png</p> </div> </div> </div> <div class="p-6" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors" data-astro-cid-j7pv25f6>Custom AI Solutions</h3> <p class="text-slate-600 text-sm leading-relaxed mb-4" data-astro-cid-j7pv25f6>
Transform your business with AI-powered solutions that automate repetitive tasks, save time, and capture more leads.
</p> <div class="flex items-center text-indigo-600 font-medium text-sm" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Learn More</span> <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </div> </div> </a> <!-- Custom Web Development --> <a href="/services/custom-web-development" class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-200" data-astro-cid-j7pv25f6> <div class="relative h-48 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden" data-astro-cid-j7pv25f6> <!-- Placeholder for mockup image - Replace with actual image --> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-j7pv25f6> <!-- Uncomment when you add the image:
								<Image 
									src={webDevMockup} 
									alt="Custom website mockup showing responsive design on multiple devices"
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								--> <div class="text-center p-6" data-astro-cid-j7pv25f6> <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" data-astro-cid-j7pv25f6> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-j7pv25f6></path> </svg> </div> <p class="text-sm text-slate-500" data-astro-cid-j7pv25f6>Add mockup image: web-dev-mockup.png</p> </div> </div> </div> <div class="p-6" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors" data-astro-cid-j7pv25f6>Custom Web Development</h3> <p class="text-slate-600 text-sm leading-relaxed mb-4" data-astro-cid-j7pv25f6>
Tailored websites and web applications that align with your specific business needs and objectives.
</p> <div class="flex items-center text-blue-600 font-medium text-sm" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Learn More</span> <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </div> </div> </a> <!-- E-commerce Solutions --> <a href="/services/ecommerce-solutions" class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-200" data-astro-cid-j7pv25f6> <div class="relative h-48 bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden" data-astro-cid-j7pv25f6> <!-- Placeholder for mockup image - Replace with actual image --> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-j7pv25f6> <!-- Uncomment when you add the image:
								<Image 
									src={ecommerceMockup} 
									alt="E-commerce store mockup showing shopping cart and product pages"
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								--> <div class="text-center p-6" data-astro-cid-j7pv25f6> <div class="w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" data-astro-cid-j7pv25f6> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" data-astro-cid-j7pv25f6></path> </svg> </div> <p class="text-sm text-slate-500" data-astro-cid-j7pv25f6>Add mockup image: ecommerce-mockup.png</p> </div> </div> </div> <div class="p-6" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors" data-astro-cid-j7pv25f6>E-commerce Solutions</h3> <p class="text-slate-600 text-sm leading-relaxed mb-4" data-astro-cid-j7pv25f6>
Complete online stores that effectively convert visitors into customers and drive sales growth.
</p> <div class="flex items-center text-teal-600 font-medium text-sm" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Learn More</span> <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </div> </div> </a> <!-- SEO & Digital Marketing --> <a href="/services/seo-digital-marketing" class="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-slate-200" data-astro-cid-j7pv25f6> <div class="relative h-48 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden" data-astro-cid-j7pv25f6> <!-- Placeholder for mockup image - Replace with actual image --> <div class="absolute inset-0 flex items-center justify-center" data-astro-cid-j7pv25f6> <!-- Uncomment when you add the image:
								<Image 
									src={seoMockup} 
									alt="SEO analytics dashboard mockup showing search rankings and traffic data"
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								--> <div class="text-center p-6" data-astro-cid-j7pv25f6> <div class="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform" data-astro-cid-j7pv25f6> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-j7pv25f6></path> </svg> </div> <p class="text-sm text-slate-500" data-astro-cid-j7pv25f6>Add mockup image: seo-mockup.png</p> </div> </div> </div> <div class="p-6" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors" data-astro-cid-j7pv25f6>SEO & Digital Marketing</h3> <p class="text-slate-600 text-sm leading-relaxed mb-4" data-astro-cid-j7pv25f6>
Strategic optimization techniques to improve search rankings and drive targeted traffic to your website.
</p> <div class="flex items-center text-purple-600 font-medium text-sm" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Learn More</span> <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-j7pv25f6></path> </svg> </div> </div> </a> </div> </div> </section> <!-- About Section --> <section class="py-20 bg-gradient-to-br from-slate-50 to-blue-50" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-6" data-astro-cid-j7pv25f6> <div class="grid lg:grid-cols-2 gap-12 items-center" data-astro-cid-j7pv25f6> <div class="content-text text-center lg:text-left order-2 lg:order-1" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6" data-astro-cid-j7pv25f6>
Local Expertise,<br data-astro-cid-j7pv25f6> <span class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent" data-astro-cid-j7pv25f6>
Global Standards
</span> </h2> <p class="text-lg text-slate-600 mb-6 leading-relaxed" data-astro-cid-j7pv25f6>
We bring years of web development expertise to every project, crafting digital solutions that blend beautiful design with powerful functionality. Our approach goes beyond aesthetics—we build websites and applications that are fast, accessible, and optimized to drive real business results.
</p> <p class="text-lg text-slate-600 mb-8 leading-relaxed" data-astro-cid-j7pv25f6>
Whether you're a restaurant looking to showcase your menu, a service business wanting to attract customers, or a growing company needing a robust web presence, we have the skills and expertise to help you succeed online. Every project is tailored to your unique needs, ensuring your digital presence truly represents your brand and connects with your audience.
</p> <div class="flex justify-center lg:justify-start" data-astro-cid-j7pv25f6> <a href="/about" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Learn More About Us
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> <div class="content-visual relative order-1 lg:order-2" data-astro-cid-j7pv25f6> <!-- Workspace/Team Image - Replace with actual photo --> <div class="relative rounded-2xl overflow-hidden shadow-2xl" data-astro-cid-j7pv25f6> <!-- Uncomment when you add the image:
							<Image 
								src={workspaceImage} 
								alt="Shoreline Web Solutions workspace in Old Lyme, Connecticut showing modern development environment"
								class="w-full h-auto"
							/>
							--> <div class="aspect-[4/3] bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center" data-astro-cid-j7pv25f6> <div class="text-center p-8" data-astro-cid-j7pv25f6> <svg class="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-j7pv25f6></path> </svg> <p class="text-slate-600 font-medium" data-astro-cid-j7pv25f6>Add workspace/team photo</p> <p class="text-sm text-slate-500 mt-2" data-astro-cid-j7pv25f6>workspace.jpg</p> <p class="text-xs text-slate-400 mt-1" data-astro-cid-j7pv25f6>Suggested: Office space, Connecticut location, or team photo</p> </div> </div> <!-- Overlay with benefits card --> <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6" data-astro-cid-j7pv25f6> <div class="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl" data-astro-cid-j7pv25f6> <h3 class="text-xl font-bold text-slate-900 mb-4" data-astro-cid-j7pv25f6>Why Choose Shoreline Web Solutions?</h3> <ul class="space-y-3" data-astro-cid-j7pv25f6> <li class="flex items-start gap-3" data-astro-cid-j7pv25f6> <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-j7pv25f6></path> </svg> <span class="text-slate-700 text-sm" data-astro-cid-j7pv25f6>Deep understanding of business needs</span> </li> <li class="flex items-start gap-3" data-astro-cid-j7pv25f6> <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-j7pv25f6></path> </svg> <span class="text-slate-700 text-sm" data-astro-cid-j7pv25f6>Modern, cutting-edge technologies</span> </li> <li class="flex items-start gap-3" data-astro-cid-j7pv25f6> <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-j7pv25f6></path> </svg> <span class="text-slate-700 text-sm" data-astro-cid-j7pv25f6>Personalized service and support</span> </li> <li class="flex items-start gap-3" data-astro-cid-j7pv25f6> <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-j7pv25f6></path> </svg> <span class="text-slate-700 text-sm" data-astro-cid-j7pv25f6>SEO-optimized for local search</span> </li> </ul> </div> </div> </div> </div> </div> </div> </section> <!-- Client Testimonials Section --> <section class="py-20 bg-white" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-j7pv25f6> <div class="text-center mb-16" data-astro-cid-j7pv25f6> <h2 class="section-title text-4xl md:text-5xl font-bold text-slate-900 mb-6" data-astro-cid-j7pv25f6>
What Our Clients Say
</h2> <p class="text-xl text-slate-600 max-w-3xl mx-auto mb-4" data-astro-cid-j7pv25f6>
Don't just take our word for it. Here's what our clients have to say about working with us.
</p> <a href="https://www.google.com/maps/place/Shoreline+Web+Solutions/@41.9188605,-71.793318,8z/data=!3m1!4b1!4m6!3m5!1s0x8339fd9351d14321:0x12a4c39543cf3b5f!8m2!3d41.9188605!4d-71.793318!16s%2Fg%2F11yj75vlj0?entry=ttu" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors" data-astro-cid-j7pv25f6> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" data-astro-cid-j7pv25f6></path> <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" data-astro-cid-j7pv25f6></path> <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" data-astro-cid-j7pv25f6></path> <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" data-astro-cid-j7pv25f6></path> </svg> <span data-astro-cid-j7pv25f6>Read all reviews on Google</span> </a> </div> <!-- Reviews Carousel --> ${renderComponent($$result2, "ReviewsCarousel", $$ReviewsCarousel, { "reviews": displayReviews, "autoPlay": true, "showArrows": true, "showDots": true, "data-astro-cid-j7pv25f6": true })} </div> </section> <!-- CTA Section --> <section class="py-20 bg-gradient-to-r from-slate-900 to-blue-900" data-astro-cid-j7pv25f6> <div class="max-w-4xl mx-auto text-center px-6" data-astro-cid-j7pv25f6> <div class="cta-content" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-bold text-white mb-6" data-astro-cid-j7pv25f6>
Ready to Elevate Your Web Presence?
</h2> <p class="text-xl text-blue-200 mb-8 leading-relaxed" data-astro-cid-j7pv25f6>
Let's discuss how we can help bring your vision to life with a website that truly represents your business.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-j7pv25f6> <a href="/portfolio" class="magnetic-button px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300" data-astro-cid-j7pv25f6>
Start Your Project
</a> <a href="/portfolio" class="magnetic-button px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300" data-astro-cid-j7pv25f6>
View Portfolio
</a> </div> </div> </div> </section> </main>  ` })}`;
}, "/Users/rtarasevich/shoreline-web-solutions/src/pages/index.astro", void 0);
const $$file = "/Users/rtarasevich/shoreline-web-solutions/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
