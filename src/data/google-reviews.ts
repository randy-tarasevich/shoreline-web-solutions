/**
 * Manual Google Reviews for the homepage carousel
 *
 * When the Google Places API is not configured or returns no reviews,
 * the homepage uses this list. Add your real Google reviews here.
 *
 * HOW TO ADD YOUR REVIEWS:
 * 1. Go to Google Business Profile (business.google.com) → Reviews
 * 2. For each review copy: author name, rating (1–5), full text, date
 * 3. Optional: copy the review URL (right‑click the date → "Copy link address")
 * 4. Add one object per review below. Date format: YYYY-MM-DD
 *
 * Example:
 * {
 *   author: "Customer Name",
 *   rating: 5,
 *   text: "Full review text from Google...",
 *   date: "2024-01-15",
 *   reviewUrl: "https://g.page/r/your-business/review"  // optional
 * }
 */

export interface ManualReview {
	author: string;
	rating: number;
	text: string;
	date: string;
	authorImage?: string | null;
	reviewUrl?: string | null;
}

/** Add your actual Google reviews here. Remove the placeholder and paste your own. */
export const manualGoogleReviews: ManualReview[] = [
	{
		author: "Kara Albaine",
		rating: 5,
		text: "Shoreline Web Solutions did a fantastic job creating the website for my networking group! He worked hard to customize it to fit all of our specific needs. It navigates intuitively and works so well on mobile device. Thanks Randy for all your hard work. I highly recommend his services.",
		date: "2025-01-01", // ~4 weeks ago from when added
		reviewUrl: null,
	},
	{
		author: "Tayler Nadolny-Sipes",
		rating: 5,
		text: "I had an amazing experience working with Randy! He is professional, creative, and incredibly easy to communicate with throughout the entire process. He really took the time to understand what I wanted and turned it into a clean, modern, and user-friendly website that exceeded my expectations. Everything was delivered on time, and any revisions were handled right away. I highly recommend Shoreline Web Solutions to anyone looking for a reliable and talented web designer.",
		date: "2024-12-18", // ~6 weeks ago from when added
		reviewUrl: null,
	},
	{
		author: "Tom Kelly",
		rating: 5,
		text: "My client has been growing her business substantially and needed to make some updates on her website. Randy was very professional and was able to not only address her needs but exceeded expectations and my client is very happy with how her website turned out.",
		date: "2024-12-18", // ~6 weeks ago from when added
		reviewUrl: null,
	},
	{
		author: "Jeremy Martel",
		rating: 5,
		text: "I highly recommend Randy for website design and development. He was persistent from start to finish with Organization, where to put vital information a resources within the website. He had lots of great Ideas and was Able to deliver everything I asked for in a short period of time.",
		date: "2024-12-18", // ~6 weeks ago from when added
		reviewUrl: null,
	},
	{
		author: "Dave Pazzaglia",
		rating: 5,
		text: "Shoreline web solutions is a great spot for your digital marketing needs! Custom web solutions designed and tailored to your specific needs. Whether you are a startup or a seasoned business this group can handle all of your website and application needs to help grow your business! Highly recommend!",
		date: "2024-12-18", // ~6 weeks ago from when added
		reviewUrl: null,
	},
	{
		author: "John Skopek",
		rating: 5,
		text: "Shoreline Web Solutions is the place for a new website or updating your old one. Randy and his team built a custom website for our non profit and we are very proud of it!",
		date: "2024-12-18", // ~6 weeks ago from when added
		reviewUrl: null,
	},
	{
		author: "Shawn Pannone",
		rating: 5,
		text: "Shoreline Web Solutions is absolutely amazing! They focus on the customer and the details that really matter. We built our (custom, not cookie-cutter) website with Randy, page by page. Now, we actually get compliments on our new, fresh and friendly site. Thank you Randy and Shoreline Web Solutions.",
		date: "2024-12-18", // ~6 weeks ago from when added
		reviewUrl: null,
	},
	{
		author: "Sherry Perkins",
		rating: 5,
		text: "Shoreline Websolutions did an amazing job on our website! Even though I haven't personally hired them, I've seen firsthand the quality of their work through my organization, and I'm truly impressed. Highly recommend them for anyone looking for professional, creative, and effective web solutions.",
		date: "2024-12-11", // ~7 weeks ago from when added
		reviewUrl: null,
	},
	// Add more reviews below:
];
