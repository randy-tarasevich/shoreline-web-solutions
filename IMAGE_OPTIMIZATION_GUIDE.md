# 🖼️ Image Optimization Guide

**Purpose:** Optimize images for better SEO, faster page loads, and improved user experience.

---

## 📊 Current Status

### ✅ What's Already Optimized:

- Astro automatically optimizes images in `src/assets/` folder
- Lazy loading implemented on blog images
- WebP format support via Astro

### ⚠️ What Needs Optimization:

- Blog images in `public/images/blog/` (not automatically optimized)
- OG image (when created)
- Portfolio images (if not already optimized)

---

## 🎯 Optimization Goals

1. **File Size:** Reduce image file size by 60-80%
2. **Format:** Use modern formats (WebP, AVIF) when possible
3. **Dimensions:** Serve appropriately sized images
4. **Alt Text:** Ensure all images have descriptive alt text (✅ Already done)

---

## 📐 Image Size Guidelines

### Blog Post Featured Images:

- **Recommended:** 1200×630px (1.91:1 ratio)
- **Format:** WebP or JPG
- **File Size:** Under 200KB
- **Location:** `public/images/blog/`

### OG Images (Social Sharing):

- **Required:** 1200×630px (1.91:1 ratio)
- **Format:** JPG or PNG
- **File Size:** Under 300KB
- **Location:** `public/og-image.jpg`

### Portfolio Images:

- **Recommended:** 1200×800px (3:2 ratio)
- **Format:** WebP or JPG
- **File Size:** Under 300KB
- **Location:** `src/assets/images/portfolio/` (Astro optimizes these)

### In-Content Images:

- **Recommended:** 800-1200px wide
- **Format:** WebP or JPG
- **File Size:** Under 150KB
- **Location:** `public/images/blog/` or `src/assets/images/`

---

## 🛠️ Tools for Image Optimization

### Online Tools (Free):

1. **Squoosh** (Recommended)

   - URL: https://squoosh.app/
   - Features: WebP conversion, quality control, side-by-side comparison
   - Best for: One-off optimizations

2. **TinyPNG / TinyJPG**

   - URL: https://tinypng.com/
   - Features: Automatic compression, WebP support
   - Best for: Quick batch compression

3. **ImageOptim** (Mac)
   - URL: https://imageoptim.com/
   - Features: Drag-and-drop, batch processing
   - Best for: Mac users, batch optimization

### Desktop Tools:

1. **GIMP** (Free)

   - Resize, crop, and export to WebP
   - Best for: Advanced editing

2. **Photoshop**
   - Export for Web feature
   - Best for: Professional editing

### Command Line Tools:

1. **Sharp** (Node.js)

   - Already used by Astro
   - Best for: Automated optimization

2. **ImageMagick**
   - Command-line image processing
   - Best for: Batch processing scripts

---

## 📝 Step-by-Step Optimization Process

### For Blog Post Images:

1. **Resize Image:**

   - Open in image editor
   - Resize to 1200×630px (maintain aspect ratio)
   - Crop if necessary to fit ratio

2. **Optimize:**

   - Use Squoosh.app or TinyPNG
   - Convert to WebP format (or JPG if WebP not supported)
   - Target file size: Under 200KB

3. **Save:**

   - Save to `public/images/blog/`
   - Use descriptive filename: `post-title-featured.webp`

4. **Update Frontmatter:**
   ```yaml
   ---
   title: "Your Post Title"
   image: "/images/blog/post-title-featured.webp"
   ---
   ```

### For OG Image:

1. **Create Design:**

   - Use Canva, Figma, or Photoshop
   - Canvas size: 1200×630px
   - Include: Logo, company name, tagline

2. **Export:**

   - Export as JPG (for compatibility)
   - Quality: 85-90%
   - File size: Under 300KB

3. **Save:**

   - Save as `public/og-image.jpg`

4. **Test:**
   - Use Facebook Sharing Debugger
   - Verify image displays correctly

---

## 🎨 Best Practices

### File Naming:

- ✅ Use descriptive names: `custom-website-benefits.webp`
- ✅ Use kebab-case: `web-development-services.jpg`
- ❌ Avoid: `IMG_1234.jpg`, `image1.png`

### Format Selection:

- **WebP:** Best compression, modern browsers
- **JPG:** Best compatibility, photos
- **PNG:** Transparency needed, graphics/logos
- **AVIF:** Best compression, newest browsers (future)

### Quality Settings:

- **WebP:** Quality 80-85
- **JPG:** Quality 85-90
- **PNG:** Use PNG-8 when possible (smaller than PNG-24)

### Compression Tips:

- Remove EXIF data (location, camera info)
- Strip metadata
- Use progressive JPG for faster perceived loading
- Consider lossless compression for graphics

---

## 🔧 Automated Optimization (Future)

### Option 1: Pre-commit Hook

Add image optimization to your workflow:

```bash
# Install image optimization tool
npm install --save-dev imagemin-cli imagemin-webp

# Add to package.json scripts
"optimize:images": "imagemin public/images/blog/* --out-dir=public/images/blog/optimized --plugin=webp"
```

### Option 2: Build Script

Create a script to optimize images before build:

```javascript
// scripts/optimize-images.js
// Optimize all images in public/images/blog/
```

### Option 3: CI/CD Integration

Add image optimization to your deployment pipeline.

---

## 📊 Current Image Status

### Blog Images:

- **Location:** `public/images/blog/`
- **Status:** Need optimization
- **Action:** Optimize existing images, use guidelines for new ones

### Portfolio Images:

- **Location:** `src/assets/images/portfolio/`
- **Status:** ✅ Optimized by Astro
- **Action:** None needed (Astro handles optimization)

### OG Image:

- **Location:** `public/og-image.jpg` (to be created)
- **Status:** Not created yet
- **Action:** Create 1200×630px image following OG_IMAGE_GUIDE.md

---

## ✅ Optimization Checklist

### For Each New Image:

- [ ] Resized to appropriate dimensions
- [ ] Compressed to target file size
- [ ] Converted to WebP (or appropriate format)
- [ ] Descriptive filename used
- [ ] Alt text added (✅ Already implemented)
- [ ] Saved to correct location

### For Existing Images:

- [ ] Audit all blog images
- [ ] Optimize images over 200KB
- [ ] Convert to WebP where possible
- [ ] Update file references if renamed

---

## 🚀 Quick Wins

### Immediate Actions:

1. **Optimize existing blog images:**

   - Use Squoosh.app to compress
   - Target: Under 200KB each
   - Time: 15-30 minutes

2. **Create OG image:**

   - Follow OG_IMAGE_GUIDE.md
   - 1200×630px, under 300KB
   - Time: 30 minutes

3. **Set up optimization workflow:**
   - Use guidelines for all new images
   - Time: Ongoing

---

## 📈 Expected Impact

### Performance:

- **+20-40%** faster page load times
- **+10-20%** improvement in Core Web Vitals
- Better mobile experience

### SEO:

- Improved page speed ranking factor
- Better user experience signals
- Reduced bounce rate

### User Experience:

- Faster image loading
- Better mobile performance
- Reduced data usage

---

## 🔍 Testing & Verification

### Tools to Test:

1. **PageSpeed Insights:**

   - https://pagespeed.web.dev/
   - Check image optimization scores

2. **WebPageTest:**

   - https://www.webpagetest.org/
   - Detailed image loading analysis

3. **Chrome DevTools:**
   - Network tab to see image sizes
   - Coverage tab to identify unused images

---

## 📝 Notes

- **Astro Optimization:** Images in `src/assets/` are automatically optimized
- **Public Folder:** Images in `public/` are NOT optimized - optimize manually
- **Format Support:** WebP is supported by 95%+ of browsers
- **Fallback:** Always provide JPG fallback for maximum compatibility

---

## 🎯 Priority Actions

### High Priority:

1. ✅ Create OG image (see OG_IMAGE_GUIDE.md)
2. ⚠️ Optimize existing blog images
3. ⚠️ Set up optimization workflow for new images

### Medium Priority:

1. Audit all images on site
2. Convert large images to WebP
3. Set up automated optimization

---

**Status:** Guidelines ready  
**Estimated Time:** 1-2 hours for initial optimization  
**Priority:** Medium - Improves performance and SEO
