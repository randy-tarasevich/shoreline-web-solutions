# 📝 Add Your 9 Google Reviews Manually

**Quick guide to add all 9 reviews to the carousel**

---

## 🎯 Why Manual Reviews?

The Google API isn't working because:

- ❌ Place ID format from URL is invalid for API
- ❌ Business not verified (search returns ZERO_RESULTS)
- ✅ But carousel works perfectly with manual reviews!

---

## 📋 Step-by-Step Instructions

### Step 1: Get Your Reviews from Google

1. Go to your [Google Business Profile](https://business.google.com/)
2. Click on "Reviews" section
3. You'll see all 9 reviews listed

### Step 2: Copy Each Review

For each review, copy:

- **Author Name** (reviewer's name)
- **Rating** (number of stars, 1-5)
- **Review Text** (the full review)
- **Date** (when it was posted)
- **Review URL** (optional - link to the review)

### Step 3: Add to Code

Open `src/pages/portfolio.astro` and find the fallback reviews section (around line 133).

Replace the 2 reviews with your 9 reviews using this format:

```javascript
googleReviews = [
	{
		author: "First Customer Name",
		rating: 5,
		text: "Full review text from Google...",
		date: "2024-01-15", // Format: YYYY-MM-DD
		reviewUrl: "https://g.page/r/your-business/review", // Optional
	},
	{
		author: "Second Customer Name",
		rating: 5,
		text: "Another review text...",
		date: "2024-01-10",
		reviewUrl: null, // Or the review URL
	},
	// Add all 9 reviews here...
];
```

---

## 📝 Review Template

Copy this template for each review:

```javascript
{
	author: "",
	rating: 5,
	text: "",
	date: "",
	reviewUrl: null
},
```

---

## ✅ After Adding

1. Save the file
2. The carousel will automatically show all 9 reviews
3. Each review = one card
4. Carousel will rotate through all 9

---

## 🔄 Later: Switch to API

Once you:

- Verify your business in Google
- Get the correct canonical Place ID (ChIJ... format)

You can remove the manual reviews and the API will fetch them automatically!

---

**Quick Start:** Just copy your 9 reviews and paste them into the code. The carousel is ready to display them!
