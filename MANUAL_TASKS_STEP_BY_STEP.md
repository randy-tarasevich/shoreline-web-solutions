# 🛠️ Manual SEO Tasks - Step-by-Step Guide

**Estimated Total Time:** 2-3 hours  
**Priority Order:** OG Image → Search Console → Image Optimization

---

## Task 1: Create Open Graph Image (15-30 minutes) 🔴 HIGH PRIORITY

### Option A: Using Canva (Easiest - Recommended)

#### Step 1: Create Canva Account

1. Go to https://www.canva.com
2. Sign up for free account (or log in)
3. Click **"Create a design"**

#### Step 2: Set Up Canvas

1. Search for **"Facebook Post"** template
2. OR create custom size: **1200 × 630 pixels**
3. Click **"Create new design"**

#### Step 3: Design Your OG Image

**Design Elements to Add:**

1. **Background:**

   - Use gradient: Blue (#3b82f6) to Cyan (#06b6d4)
   - OR use a subtle pattern/texture
   - Keep it professional and clean

2. **Company Name:**

   - Text: **"Shoreline Web Solutions"**
   - Font: Bold, Sans-serif (like Montserrat, Inter, or similar)
   - Size: 48-60px
   - Color: White or light color
   - Position: Center or top-left

3. **Tagline:**

   - Text: **"Crafting custom digital products for the modern web"**
   - Font: Regular, 24-28px
   - Color: White or light gray
   - Position: Below company name

4. **Optional Elements:**
   - Add a subtle logo if you have one
   - Add decorative elements (geometric shapes, lines)
   - Keep it minimal and professional

#### Step 4: Export Image

1. Click **"Download"** button (top right)
2. Select **"JPG"** format
3. Quality: **Standard** or **High**
4. Click **"Download"**

#### Step 5: Optimize Image

1. Go to https://squoosh.app/
2. Drag your downloaded image
3. Select **"MozJPEG"** format
4. Set quality to **85**
5. Check file size (should be under 300KB)
6. Click **"Download"**

#### Step 6: Save to Project

1. Rename file to: `og-image.jpg`
2. Save to: `/Users/rtarasevich/shoreline-web-solutions/public/og-image.jpg`
3. Verify file is in the `public/` folder

#### Step 7: Test the Image

1. Deploy your site (or test locally)
2. Go to: https://developers.facebook.com/tools/debug/
3. Enter: `https://shorelinewebsolutions.com`
4. Click **"Scrape Again"**
5. Verify image appears in preview

---

### Option B: Using Figma (If You Have Access)

1. Create new file
2. Create frame: **1200 × 630px**
3. Add gradient background (blue to cyan)
4. Add text layers for company name and tagline
5. Export as JPG at 85% quality
6. Save to `public/og-image.jpg`

---

### Option C: Using Photoshop

1. New document: **1200 × 630 pixels**, RGB, 72 DPI
2. Create gradient background (blue to cyan)
3. Add text layers
4. Export for Web: **JPG, Quality 85, Optimized**
5. Save to `public/og-image.jpg`

---

## Task 2: Set Up Google Search Console (15-30 minutes) ⚠️ HIGH PRIORITY

### Step 1: Access Google Search Console

1. Go to: https://search.google.com/search-console
2. Sign in with your Google account
3. If you don't have an account, create one (free)

### Step 2: Add Property

1. Click **"Add Property"** button
2. Choose **"Domain"** property type (recommended)
3. Enter: `shorelinewebsolutions.com`
4. Click **"Continue"**

### Step 3: Verify Ownership

**Method 1: HTML File Upload (Easiest)**

1. Google will provide an HTML file to download
2. Download the file (e.g., `google1234567890.html`)
3. Save it to: `/Users/rtarasevich/shoreline-web-solutions/public/`
4. Deploy your site (or test locally)
5. Verify file is accessible at: `https://shorelinewebsolutions.com/google1234567890.html`
6. Go back to Search Console and click **"Verify"**

**Method 2: HTML Tag (Alternative)**

1. Copy the meta tag provided by Google
2. Open: `src/layouts/Layout.astro`
3. Add the meta tag in the `<head>` section (around line 45, after other meta tags)
4. Deploy your site
5. Go back to Search Console and click **"Verify"**

**Method 3: DNS Record (For Domain Property)**

1. Google will provide a TXT record
2. Add it to your domain's DNS settings
3. Wait 24-48 hours for DNS propagation
4. Click **"Verify"** in Search Console

### Step 4: Submit Sitemap

1. In Search Console, click **"Sitemaps"** in the left menu
2. In the "Add a new sitemap" field, enter: `sitemap.xml`
3. Click **"Submit"**
4. Wait a few minutes, then refresh to see status

**Your sitemap URLs:**

- Main: `https://shorelinewebsolutions.com/sitemap.xml`
- Index: `https://shorelinewebsolutions.com/sitemap-index.xml`

### Step 5: Initial Check

1. Click **"Coverage"** in left menu

   - Check for any errors
   - Should show pages being indexed

2. Click **"Performance"** in left menu

   - Data will appear after a few days
   - Monitor search queries and clicks

3. Click **"Mobile Usability"**
   - Check for any mobile issues
   - Should show no errors (your site is mobile-friendly)

### Step 6: Enable Email Notifications (Optional but Recommended)

1. Click the gear icon (⚙️) in top right
2. Click **"Users and permissions"**
3. Click **"Settings"**
4. Enable email notifications for:
   - Critical issues
   - Coverage issues
   - Manual actions

---

## Task 3: Optimize Existing Blog Images (1-2 hours) 📋 MEDIUM PRIORITY

### Step 1: Check Current Images

Your blog images are located at:

```
public/images/blog/
- FB.png
- post-2.png
- post-3.png
- post-4.png
- post-5.png
```

### Step 2: Optimize Each Image

For each image, follow these steps:

#### Using Squoosh.app (Recommended):

1. Go to: https://squoosh.app/
2. Drag and drop an image
3. On the right side, select **"MozJPEG"** or **"WebP"**
4. Adjust quality slider:
   - **WebP:** Quality 80-85
   - **JPG:** Quality 85-90
5. Check file size (aim for under 200KB)
6. Compare before/after (use slider on left)
7. Click **"Download"**

#### Using TinyPNG (Alternative):

1. Go to: https://tinypng.com/
2. Drag and drop images (up to 20 at once)
3. Wait for compression
4. Download optimized images
5. Replace original files

### Step 3: Resize Images (If Needed)

**Target Size:** 1200 × 630 pixels

If images are larger:

1. Use Squoosh.app
2. Click **"Resize"** tab
3. Set width to **1200px** (height will auto-adjust)
4. OR use an image editor to crop/resize

### Step 4: Convert to WebP (Optional but Recommended)

1. Use Squoosh.app
2. Select **"WebP"** format
3. Quality: 80-85
4. Download
5. Save with `.webp` extension
6. Update blog post frontmatter to use `.webp` file

**Example:**

```yaml
# Before
image: "/images/blog/post-2.png"

# After
image: "/images/blog/post-2.webp"
```

### Step 5: Replace Original Files

1. Backup original files (optional but recommended)
2. Replace files in `public/images/blog/` with optimized versions
3. Keep same filenames OR update blog post frontmatter

### Step 6: Verify Optimization

1. Check file sizes (should be under 200KB each)
2. Test images load correctly on your site
3. Use PageSpeed Insights to verify improvement

---

## ✅ Complete Checklist

### OG Image:

- [ ] Created 1200×630px image
- [ ] Saved as `public/og-image.jpg`
- [ ] File size under 300KB
- [ ] Tested with Facebook Sharing Debugger
- [ ] Tested with Twitter Card Validator

### Google Search Console:

- [ ] Account created/logged in
- [ ] Property added (shorelinewebsolutions.com)
- [ ] Ownership verified
- [ ] Sitemap submitted
- [ ] Email notifications enabled
- [ ] Coverage report checked
- [ ] Performance report monitoring set up

### Image Optimization:

- [ ] All blog images optimized
- [ ] File sizes under 200KB
- [ ] Images resized to 1200×630px (if needed)
- [ ] Converted to WebP (optional)
- [ ] Blog post frontmatter updated (if filenames changed)
- [ ] Images tested on live site

---

## 🆘 Troubleshooting

### OG Image Not Showing:

- **Check:** File is in `public/` folder (not `src/assets/`)
- **Check:** File is named exactly `og-image.jpg`
- **Check:** File is accessible at `https://shorelinewebsolutions.com/og-image.jpg`
- **Fix:** Clear Facebook cache using Sharing Debugger

### Search Console Verification Failed:

- **Check:** HTML file is in `public/` folder
- **Check:** File is accessible via URL
- **Check:** No typos in meta tag
- **Fix:** Try different verification method

### Images Still Large After Optimization:

- **Check:** Quality setting (try lower quality)
- **Check:** Image dimensions (resize if too large)
- **Fix:** Use WebP format for better compression

---

## 📞 Need Help?

If you get stuck:

1. Check the detailed guides:

   - `OG_IMAGE_GUIDE.md` for OG image details
   - `GOOGLE_SEARCH_CONSOLE_SETUP.md` for Search Console
   - `IMAGE_OPTIMIZATION_GUIDE.md` for image optimization

2. Test tools:
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - PageSpeed Insights: https://pagespeed.web.dev/

---

**Estimated Time Breakdown:**

- OG Image: 15-30 minutes
- Search Console: 15-30 minutes
- Image Optimization: 1-2 hours
- **Total: 2-3 hours**

**Priority:**

1. OG Image (do first - highest impact)
2. Search Console (do second - monitoring)
3. Image Optimization (do when you have time - performance)
