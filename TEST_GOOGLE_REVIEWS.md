# 🧪 Testing Google Reviews Locally

**Test your Google Reviews integration before building for S3**

---

## ✅ Step 1: Verify Environment Variables

Your `.env` file should have:

```bash
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
```

**⚠️ SECURITY:** Never commit your actual API keys to git!

---

## ✅ Step 2: Verify Billing is Enabled

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to "Billing" → Check if billing account is linked
4. **Required:** Billing must be enabled for Places API to work

---

## ✅ Step 3: Verify Places API is Enabled

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" > "Library"
3. Search for "Places API"
4. Make sure it shows "Enabled" (not "Enable")

---

## ⚠️ Step 3.5: Fix API Key Restrictions (CRITICAL!)

**Your API key has referer restrictions that block server-side calls!**

The error "API keys with referer restrictions cannot be used with this API" means your key can't be used from your server/build process.

**To Fix:**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to "APIs & Services" > "Credentials"
3. Click on your API key (from Google Cloud Console)
4. Under **"Application restrictions"**:
   - Change from **"HTTP referrers"** to **"None"** (for server-side use)
   - OR use **"IP addresses"** if you always build from the same location
5. Under **"API restrictions"**:
   - Keep **"Restrict key"** selected
   - Make sure **"Places API"** is checked
6. Click **"Save"**
7. **Wait 5 minutes** for changes to propagate

**Why:** Server-side API calls (like during build) can't use referer-restricted keys. You need "None" or "IP addresses" restriction.

---

## ✅ Step 4: Test API Directly

Run this command to test if the API works:

```bash
curl "https://maps.googleapis.com/maps/api/place/textsearch/json?query=Shoreline+Web+Solutions&key=YOUR_API_KEY_HERE"
```

**Replace `YOUR_API_KEY_HERE` with your actual API key from `.env`**

````

**Expected:** Should return JSON with status "OK" and results

**If you see "REQUEST_DENIED":** Billing is not enabled

---

## ✅ Step 5: Start Dev Server

```bash
npm run dev
````

---

## ✅ Step 6: Test in Browser

1. Open `http://localhost:4321/portfolio`
2. Scroll to the "What Our Clients Say" section
3. **Check for:**
   - ✅ Reviews carousel appears
   - ✅ Multiple review cards (should show all 9 if API works)
   - ✅ Carousel navigation arrows work
   - ✅ Dots indicator shows correct number
   - ✅ Auto-rotation works (every 5 seconds)

---

## ✅ Step 7: Check Browser Console

1. Open browser DevTools (F12)
2. Go to Console tab
3. **Look for:**
   - ✅ No errors
   - ⚠️ If you see "REQUEST_DENIED" → Billing not enabled
   - ⚠️ If you see "INVALID_REQUEST" → Place ID issue
   - ⚠️ If you see "API key not valid" → Check API key

---

## ✅ Step 8: Check Network Tab

1. Open browser DevTools → Network tab
2. Refresh the portfolio page
3. **Look for:**
   - API calls to `maps.googleapis.com`
   - Check response status (should be 200)
   - Check response data (should have reviews)

---

## 🎯 Expected Results

### ✅ If Working:

- All 9 Google reviews appear in carousel
- Each review is its own card
- Carousel rotates automatically
- Navigation works

### ❌ If Not Working:

- Only 2 fallback reviews show
- Console shows API errors
- Check billing, API key, and Places API enablement

---

## 🔧 Troubleshooting

### Only 2 Reviews Show:

- **Cause:** API not working, using fallback reviews
- **Fix:** Enable billing, verify API key, check Places API

### No Reviews Show:

- **Cause:** JavaScript error or carousel not initializing
- **Fix:** Check browser console for errors

### API Returns REQUEST_DENIED:

- **Cause:** Billing not enabled
- **Fix:** Enable billing in Google Cloud Console

### API Returns INVALID_REQUEST:

- **Cause:** Place ID format issue
- **Fix:** Code will auto-find Place ID via Text Search (should work)

---

## ✅ Once It Works Locally:

1. **Test everything:**

   - All reviews load
   - Carousel works
   - Navigation works
   - No console errors

2. **Then build for S3:**

   ```bash
   npm run build
   ```

3. **Upload `dist/` folder to S3**

---

**Ready to test?** Start with Step 1 and work through each step!
