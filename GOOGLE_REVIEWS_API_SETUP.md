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

#### For S3 Static Hosting

Since S3 is a static hosting solution, you have two options:

**Option A: Build with Environment Variables (Recommended)**

This is the simplest approach - reviews are fetched during the build and included in your static HTML.

1. **Set environment variables before building:**

   ```bash
   export GOOGLE_PLACES_API_KEY=your_api_key_here
   export GOOGLE_PLACE_ID=your_place_id_here
   npm run build
   ```

   **Example:**

   ```bash
   export GOOGLE_PLACES_API_KEY=your_api_key_here
   export GOOGLE_PLACE_ID=your_place_id_here
   npm run build
   ```

   **⚠️ SECURITY:** Never commit your actual API keys to git!

2. **Or use a `.env.production` file (Better for automation):**

   Create `.env.production` in your project root:

   ```bash
   GOOGLE_PLACES_API_KEY=your_api_key_here
   GOOGLE_PLACE_ID=your_place_id_here
   ```

   **⚠️ SECURITY:** Never commit `.env.production` to git!

   Then run:

   ```bash
   npm run build
   ```

   Astro will automatically use `.env.production` during the build.

3. **Upload to S3:**

   - After building, upload the contents of the `dist/` folder to your S3 bucket
   - Reviews are already baked into the HTML - no runtime API calls needed!

4. **Note:** With S3 static hosting, the API endpoint (`/api/google-reviews.ts`) won't work at runtime. The reviews will be fetched at **build time** and baked into the static HTML. This is perfect for S3!

**Option B: Use AWS Lambda + API Gateway (Advanced)**

If you need dynamic API calls at runtime:

1. Deploy the API endpoint as an AWS Lambda function
2. Set up API Gateway to route `/api/google-reviews` to the Lambda
3. Set environment variables in Lambda configuration
4. Update your site to call the API Gateway URL

**Option C: Client-Side Fetching**

Modify the code to fetch reviews client-side (in the browser) instead of server-side. This requires exposing the API key (not recommended for security).

#### For Other Hosting Platforms

When deploying (Vercel, Netlify, etc.), add these environment variables in your hosting platform's settings:

- `GOOGLE_PLACES_API_KEY` = your API key
- `GOOGLE_PLACE_ID` = your Place ID

---

## 🎯 How It Works

**For S3 Static Hosting (Your Setup):**

1. **Portfolio Page** (`/portfolio.astro`):

   - Fetches reviews from Google Places API **at build time**
   - Reviews are baked into the static HTML during `npm run build`
   - Falls back to manual reviews if API not configured
   - Perfect for S3 static hosting!

2. **Build Process:**

   - Set environment variables before building (or use `.env.production`)
   - Run `npm run build`
   - Reviews are fetched and included in the static HTML
   - Upload `dist/` folder to S3

3. **Reviews Carousel:**
   - Automatically displays all fetched reviews
   - Each review = one card
   - Auto-rotates through all reviews
   - Shows navigation controls

**Note:** The API endpoint (`/api/google-reviews.ts`) is available for server-side hosting (Vercel, Netlify, etc.) but not needed for S3 since we fetch at build time.

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
