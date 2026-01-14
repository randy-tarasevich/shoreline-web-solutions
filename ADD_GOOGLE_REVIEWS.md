# 📝 How to Add Your 9 Google Business Reviews

**Quick Guide:** Add all your Google reviews to the carousel

---

## 🎯 Two Options Available

### Option 1: **Dynamic (Recommended)** ⚡

- Automatically fetches all reviews from Google
- Updates when new reviews are added
- No manual copying needed
- **See:** `GOOGLE_REVIEWS_API_SETUP.md` for setup

### Option 2: **Manual** 📝

- Copy reviews manually from Google
- Full control over which reviews to show
- Works immediately without API setup
- **See below** for instructions

---

## 🎯 Current Status

- ✅ Carousel component created
- ✅ Each review displays as its own card
- ✅ Auto-rotates through all reviews
- ✅ Dynamic API endpoint ready (see `GOOGLE_REVIEWS_API_SETUP.md`)
- ⚠️ Choose: Dynamic API or Manual entry

---

## 📋 Step-by-Step Instructions

### Step 1: Get Your Google Reviews

1. Go to [Google Business Profile](https://business.google.com/)
2. Navigate to your business profile
3. Click on "Reviews" section
4. You'll see all your reviews listed

### Step 2: Copy Review Information

For each review, you'll need:

- **Author Name** - The reviewer's name
- **Rating** - Number of stars (1-5)
- **Review Text** - The full review text
- **Date** - When the review was posted
- **Review URL** - Link to the specific review (optional but recommended)

**To get the Review URL:**

1. Click on the review in Google Business Profile
2. Copy the URL from your browser
3. Or right-click the review date and "Copy link address"

### Step 3: Add Reviews to portfolio.astro

Open `src/pages/portfolio.astro` and find the `googleReviews` array.

Replace the sample reviews with your actual Google reviews:

```astro
const googleReviews = [
	{
		author: "First Customer Name",
		rating: 5,
		text: "Full review text from Google...",
		date: "2024-01-15", // Format: YYYY-MM-DD
		reviewUrl: "https://g.page/r/your-business/review" // Optional: Google review link
	},
	{
		author: "Second Customer Name",
		rating: 5,
		text: "Another review text...",
		date: "2024-01-10",
		reviewUrl: "https://g.page/r/your-business/review"
	},
	// Add all 9 reviews here...
];
```

---

## 📝 Review Format

Each review needs this structure:

```javascript
{
	author: "Customer Name",        // Required
	rating: 5,                      // Required (1-5)
	text: "Review text...",         // Required
	date: "2024-01-15",            // Required (YYYY-MM-DD format)
	reviewUrl: "https://..."        // Optional - link to Google review
}
```

---

## ✅ Example with All Fields

```astro
{
	author: "John Smith",
	rating: 5,
	text: "Excellent service! Shoreline Web Solutions created an amazing website for my business. Professional, responsive, and delivered exactly what I needed. Highly recommend!",
	date: "2024-01-20",
	reviewUrl: "https://g.page/r/shoreline-web-solutions/review/abc123"
}
```

---

## 🎨 What You'll See

- **Each review** = **One card** in the carousel
- Cards **auto-rotate** every 5 seconds
- **Navigation arrows** to move manually
- **Dot indicators** showing which review is active
- **Star ratings** displayed
- **Google logo link** (if reviewUrl provided)

---

## 💡 Tips

1. **Add reviews in order** - Most recent first, or your favorite first
2. **Include review URLs** - Helps with credibility and SEO
3. **Keep text accurate** - Copy exactly from Google
4. **Date format** - Use YYYY-MM-DD (e.g., "2024-01-15")
5. **Rating** - Must be 1-5 (most will be 5 stars!)

---

## 🚀 Quick Copy Template

Copy this template for each review:

```astro
{
	author: "",
	rating: 5,
	text: "",
	date: "",
	reviewUrl: ""
},
```

---

## 📊 After Adding Reviews

Once you add all 9 reviews:

- The carousel will automatically display all of them
- Users can navigate through all 9 reviews
- Auto-play will cycle through all reviews
- Each review gets its own card

---

**Status:** ✅ Carousel Ready - Just Add Your 9 Reviews!  
**File to Edit:** `src/pages/portfolio.astro`  
**Array Name:** `googleReviews`
