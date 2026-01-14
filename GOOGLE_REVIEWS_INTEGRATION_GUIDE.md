# 📝 Google Business Profile Reviews Integration Guide

**Purpose:** Set up automatic fetching and display of Google Business Profile reviews in a carousel

---

## ✅ What's Been Created

1. **ReviewsCarousel Component** (`src/components/ReviewsCarousel.astro`)

   - Beautiful carousel with navigation arrows
   - Dot indicators
   - Auto-play functionality
   - Responsive design
   - Google review link support

2. **Updated Portfolio Page**
   - Replaced static testimonials with carousel
   - Ready to accept Google reviews data

---

## 🔧 Integration Options

### Option 1: Google My Business API (Recommended for Automation)

**Pros:**

- Automatic updates
- Real-time data
- Full control

**Cons:**

- Requires API setup
- Needs server-side API route
- More technical setup

**Steps:**

1. Get Google My Business API credentials
2. Create API route to fetch reviews
3. Update component to fetch from API

---

### Option 2: Third-Party Service (Easiest)

**Services:**

- **EmbedSocial** - embedsocial.com
- **Elfsight** - elfsight.com
- **ReviewWidget** - reviewwidget.io

**Steps:**

1. Sign up for service
2. Connect Google Business Profile
3. Get embed code/widget
4. Can integrate widget or use their API

---

### Option 3: Manual Sync (Simple but Manual)

**Steps:**

1. Periodically copy reviews from Google
2. Update the `googleReviews` array in `portfolio.astro`
3. Format matches the component's expected structure

---

### Option 4: Server-Side API Route (Best Balance)

Create an Astro API route that fetches reviews and serves them to the component.

---

## 📋 Review Data Structure

The component expects reviews in this format:

```typescript
{
	author: string;        // Reviewer name
	rating: number;       // 1-5 stars
	text: string;         // Review text
	date: string;         // ISO date string (e.g., "2024-01-15")
	authorImage?: string; // Optional profile image URL
	reviewUrl?: string;   // Optional link to Google review
}
```

---

## 🚀 Quick Start (Manual Method)

1. **Get Reviews from Google:**

   - Go to your Google Business Profile
   - Copy review details (author, rating, text, date)

2. **Update portfolio.astro:**

   ```astro
   const googleReviews = [
     {
       author: "Customer Name",
       rating: 5,
       text: "Review text here...",
       date: "2024-01-15",
       reviewUrl: "https://g.page/r/your-business/review"
     },
     // Add more reviews...
   ];
   ```

3. **The carousel will automatically display them!**

---

## 🔌 Setting Up Google My Business API

### Step 1: Get API Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable "Google My Business API"
4. Create credentials (OAuth 2.0)
5. Download credentials JSON

### Step 2: Create API Route

Create `src/pages/api/reviews.json.ts`:

```typescript
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	// Fetch reviews from Google My Business API
	// Return formatted reviews
	const reviews = await fetchGoogleReviews();
	return new Response(JSON.stringify(reviews), {
		headers: { "Content-Type": "application/json" },
	});
};
```

### Step 3: Update Component

Modify `ReviewsCarousel.astro` to fetch from API route.

---

## 🎨 Customization

The carousel component supports:

- `reviews` - Array of review objects
- `autoPlay` - Enable/disable auto-play (default: true)
- `showArrows` - Show navigation arrows (default: true)
- `showDots` - Show dot indicators (default: true)

---

## 📊 Current Status

**Component:** ✅ Created and ready  
**Portfolio Page:** ✅ Updated to use carousel  
**Sample Reviews:** ✅ Included (replace with real Google reviews)  
**API Integration:** ⚠️ Needs setup (choose method above)

---

## 💡 Recommendations

**For Quick Setup:**

- Use Option 3 (Manual Sync) initially
- Add reviews as you get them
- Upgrade to API later if needed

**For Long-term:**

- Set up Google My Business API (Option 1 or 4)
- Automatic updates
- Always shows latest reviews

---

## 🔗 Useful Links

- [Google My Business API Docs](https://developers.google.com/my-business/content/overview)
- [EmbedSocial](https://embedsocial.com/google-reviews-widget/)
- [Elfsight Widget](https://elfsight.com/google-reviews-widget/)

---

**Status:** ✅ Carousel Component Ready  
**Next:** Choose integration method and populate with Google reviews!
