# 🚀 Dynamic Google Reviews Setup Guide

**Automatically fetch your Google Business reviews!** No more manual updates.

---

## ✅ What This Does

- **Automatically fetches** all your Google reviews (including all 9!)
- **Updates automatically** when new reviews are added
- **Each review = one card** in the carousel
- **No manual copying** needed

---

## 📋 Setup Steps

### Step 1: Get Your Google Place ID

**✅ Your Place ID has been found!**

From your Google Maps URL:

```
https://www.google.com/maps/place/Shoreline+Web+Solutions/@41.9188605,-71.793318,8z/data=!3m1!4b1!4m6!3m5!1s0x8339fd9351d14321:0x12a4c39543cf3b5f!8m2!3d41.9188605!4d-71.793318!16s%2Fg%2F11yj75vlj0
```

**Your Place ID is:** `0x8339fd9351d14321:0x12a4c39543cf3b5f`

**How to find it in the URL:**

- Look for the part that starts with `!1s`
- The Place ID is the string immediately after `!1s`
- In your case: `!1s0x8339fd9351d14321:0x12a4c39543cf3b5f`
- The Place ID is: `0x8339fd9351d14321:0x12a4c39543cf3b5f`

**Alternative method:**

- Use [Google's Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
- Or search for your business and copy the Place ID from the URL

---

### Step 2: Enable Billing (Required!)

**⚠️ IMPORTANT:** Google Places API requires billing to be enabled, even though you get $200/month in free credits.

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to "Billing" in the left menu
4. Click "Link a billing account" or "Create billing account"
5. Add a payment method (you won't be charged unless you exceed the free $200/month credit)
6. **This is required** - the API will return `REQUEST_DENIED` without billing enabled

### Step 3: Get Google Places API Key

**If you get a permission error creating a project:**

- Use a **personal Google account** (not a work/school account with restrictions)
- Or ask your organization admin to create a project for you
- Or use an **existing project** if you have one

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. **Create a new project** (or select existing):
   - Click the project dropdown at the top
   - Click "New Project"
   - If you get permission errors, use a personal Google account or select an existing project
   - Name it something like "Shoreline Web Solutions" or "My Website"
3. Enable the **Places API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create API Key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key
5. **Restrict the API Key** (Important for security):
   - Click on your API key to edit
   - Under "API restrictions", select "Restrict key"
   - Choose "Places API"
   - Under "Application restrictions", you can restrict to your domain

---

### Step 3: Add to Environment Variables

Create a `.env` file in your project root (if it doesn't exist):

```bash
# .env file
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
```

**Important:**

- Never commit `.env` to git (it should be in `.gitignore`)
- Add `.env.example` to show the format without real keys

---

### Step 4: Update .gitignore

Make sure `.env` is in your `.gitignore`:

```gitignore
# Environment variables
.env
.env.local
.env.production
```

---

### Step 5: For Production Deployment

When deploying (Vercel, Netlify, etc.), add these environment variables in your hosting platform's settings:

- `GOOGLE_PLACES_API_KEY` = your API key
- `GOOGLE_PLACE_ID` = your Place ID

---

## 🎯 How It Works

1. **API Endpoint** (`/api/google-reviews.ts`):

   - Fetches reviews from Google Places API
   - Transforms them to our format
   - Caches for 1 hour (reduces API calls)

2. **Portfolio Page** (`/portfolio.astro`):

   - Fetches reviews from API at build time
   - Falls back to manual reviews if API not configured
   - Displays all reviews in carousel

3. **Reviews Carousel**:
   - Automatically displays all fetched reviews
   - Each review = one card
   - Auto-rotates through all reviews

---

## 💰 Google Places API Pricing

- **Free Tier:** $200 credit/month
- **Places API Details:** ~$17 per 1,000 requests
- **With free tier:** ~11,000 requests/month free
- **For reviews:** Each page load = 1 request
- **Cached for 1 hour:** Reduces API calls significantly

**Realistic usage:** Even with 1,000 page views/day, you'd use ~24,000 requests/month = ~$4/month after free tier.

---

## 🔧 Troubleshooting

### Reviews Not Showing?

1. **Check API Key:**

   ```bash
   # In your terminal, test the API
   curl "https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=reviews&key=YOUR_API_KEY"
   ```

2. **Check Environment Variables:**

   - Make sure `.env` file exists
   - Restart dev server after adding `.env`
   - Check variable names match exactly

3. **Check API Status:**

   - Go to Google Cloud Console
   - Check if Places API is enabled
   - Check if API key has correct restrictions

4. **Check Place ID:**
   - Verify Place ID is correct
   - Try the Place ID Finder tool

### API Errors?

- **"REQUEST_DENIED"**: API key restrictions or Places API not enabled
- **"INVALID_REQUEST"**: Place ID is incorrect
- **"OVER_QUERY_LIMIT"**: You've exceeded quota (unlikely on free tier)

---

## 🎨 What You'll See

Once configured:

- ✅ All 9 reviews automatically appear
- ✅ New reviews appear automatically
- ✅ Author names, ratings, dates all correct
- ✅ Review text from Google
- ✅ Profile photos (if available)
- ✅ Links to Google reviews

---

## 🔄 Alternative: Manual Fallback

If you prefer to keep manual reviews (or API isn't working), the system will:

- Use the fallback reviews in `portfolio.astro`
- Still display them in the carousel
- You can manually update them anytime

---

## 📝 Files Created

1. **`/src/pages/api/google-reviews.ts`** - API endpoint that fetches reviews
2. **Updated `/src/pages/portfolio.astro`** - Fetches from API automatically
3. **This guide** - Setup instructions

---

## ✅ Quick Checklist

- [ ] Get Google Place ID
- [ ] Create Google Cloud project
- [ ] Enable Places API
- [ ] Create API key
- [ ] Add to `.env` file
- [ ] Restart dev server
- [ ] Test on `/portfolio` page
- [ ] Add to production environment variables

---

**Status:** ✅ API Ready - Just Add Your Credentials!  
**Time to Setup:** ~10 minutes  
**Cost:** Free tier covers most usage
