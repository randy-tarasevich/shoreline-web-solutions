# Open Graph Image Guide

## 📸 Quick Win: Create Your OG Image

Your website is currently missing an Open Graph (OG) image, which is critical for social media sharing. When someone shares your website on Facebook, Twitter, LinkedIn, or other platforms, they'll see a preview image - but only if you provide one!

## ✅ What's Already Done

- ✅ OG image meta tags are configured in `src/layouts/Layout.astro`
- ✅ Blog posts now automatically use their featured images as OG images
- ✅ Fallback to `/og-image.jpg` is set up

## 🎯 What You Need to Do

### Step 1: Create the Image

Create a **1200x630 pixel** image that represents your brand. This is the standard size for social media previews.

**Requirements:**

- **Dimensions:** 1200px wide × 630px tall (1.91:1 aspect ratio)
- **Format:** JPG or PNG
- **File size:** Under 1MB (optimize for web)
- **Content:** Should include:
  - Your logo
  - Company name: "Shoreline Web Solutions"
  - Tagline or key message
  - Professional design that matches your brand

### Step 2: Save the Image

Save the image as:

```
public/og-image.jpg
```

**Important:** The file must be in the `public/` folder (not `src/assets/`) because it needs to be accessible at the root URL.

### Step 3: Test It

After saving the image, test it using these tools:

1. **Facebook Sharing Debugger:**

   - https://developers.facebook.com/tools/debug/
   - Enter: `https://shorelinewebsolutions.com`
   - Click "Scrape Again" to see your OG image

2. **Twitter Card Validator:**

   - https://cards-dev.twitter.com/validator
   - Enter your URL to preview

3. **LinkedIn Post Inspector:**
   - https://www.linkedin.com/post-inspector/
   - Enter your URL

## 🎨 Design Tips

### What to Include:

- ✅ Your logo (centered or top-left)
- ✅ Company name clearly visible
- ✅ Tagline: "Crafting custom digital products for the modern web"
- ✅ Brand colors (blue/cyan gradient to match your site)
- ✅ Professional, clean design

### What to Avoid:

- ❌ Too much text (keep it minimal)
- ❌ Small text that won't be readable when scaled down
- ❌ Important information near the edges (may be cropped on some platforms)
- ❌ Low resolution images

## 📐 Template Dimensions

If you're using a design tool, here's a quick reference:

```
Canvas Size: 1200 × 630 pixels
Safe Zone: Keep important content within 1200 × 630 (full canvas)
Minimum Text Size: 24px (for readability when scaled)
```

## 🚀 Quick Options

### Option 1: Use a Design Tool

- **Canva:** Search for "Facebook Post" template (1200x630)
- **Figma:** Create a 1200×630 frame
- **Photoshop:** New document 1200×630px

### Option 2: Use an Online Generator

- Search for "OG image generator" online
- Many free tools available

### Option 3: Hire a Designer

- Provide them with this guide
- They can create a professional OG image

## ✅ Verification Checklist

After creating and uploading your OG image:

- [ ] Image saved as `public/og-image.jpg`
- [ ] Image is exactly 1200×630 pixels
- [ ] File size is under 1MB
- [ ] Tested with Facebook Sharing Debugger
- [ ] Tested with Twitter Card Validator
- [ ] Image displays correctly when sharing homepage
- [ ] Image displays correctly when sharing blog posts

## 📝 Current Status

**Location in Code:** `src/layouts/Layout.astro` (line 23)

**Current Behavior:**

- Homepage and general pages: Uses `/og-image.jpg` (needs to be created)
- Blog posts: Uses the post's featured image automatically
- Fallback: If image doesn't exist, social platforms will show a generic preview

## 🎯 Priority

**Status:** 🔴 **HIGH PRIORITY**

This is a quick win that will immediately improve:

- Social media engagement
- Click-through rates from social shares
- Professional appearance when shared
- Brand recognition

**Estimated Time:** 15-30 minutes to create and upload

---

**Need Help?** If you'd like assistance creating the OG image or have questions about the implementation, let me know!
