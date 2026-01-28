# 🖼️ Image Replacement Guide

**Quick Start Guide:** Replace placeholder images with actual images across your site

---

## 📋 Current Status

### ✅ Already Have Images:

- Portfolio page: `legacy-electrical-screenshot.png`, `martel-electric-screenshot.png`, `mynotes-screenshot.png`

### ❌ Need to Add Images:

- About page: `our-story.jpg` (HIGH PRIORITY)
- Homepage: `hero-background.jpg`, `workspace.jpg`, 4 service mockups
- Contact page: `contact-visual.jpg` (optional)
- Service pages: Various hero images and mockups

---

## 🎯 Priority Order (Recommended)

### 1. **About Page - Our Story Image** (Highest Priority)

**Why:** Biggest visual impact, most visible to visitors

**File:** `src/assets/images/about/our-story.jpg`
**Size:** 1200×900px (4:3 aspect ratio)
**What to do:**

1. Add your image to `src/assets/images/about/our-story.jpg`
2. Uncomment line 9 in `src/pages/about.astro`: `import ourStoryImage from '../assets/images/about/our-story.jpg';`
3. Uncomment lines 91-95 in `src/pages/about.astro` (the Image component)
4. Remove or comment out lines 97-105 (the placeholder div)

**Image Ideas:**

- Team photo
- Workspace/office photo
- Connecticut location/landmark
- Professional headshot (if solo)

---

### 2. **Homepage - Hero Background** (High Priority)

**Why:** First thing visitors see

**File:** `src/assets/images/homepage/hero-background.jpg`
**Size:** 1920×1080px (or larger, will be cropped)
**What to do:**

1. Add your image to `src/assets/images/homepage/hero-background.jpg`
2. Uncomment line 9 in `src/pages/index.astro`: `import heroImage from '../assets/images/homepage/hero-background.jpg';`
3. Find the hero section and uncomment the Image component
4. Remove the placeholder gradient div if desired

**Image Ideas:**

- Connecticut shoreline/coastline (perfect for "Shoreline" branding!)
- Modern workspace
- Abstract professional imagery

---

### 3. **Homepage - Workspace Photo** (High Priority)

**Why:** Shows your business in the About section

**File:** `src/assets/images/homepage/workspace.jpg`
**Size:** 1200×900px (4:3 aspect ratio)
**What to do:**

1. Add your image to `src/assets/images/homepage/workspace.jpg`
2. Uncomment line 10 in `src/pages/index.astro`: `import workspaceImage from '../assets/images/homepage/workspace.jpg';`
3. Find the About section and uncomment the Image component
4. Remove the placeholder div

---

### 4. **Homepage - Service Mockups** (Medium Priority)

**Why:** Visual appeal for service cards

**Files needed:**

- `src/assets/images/homepage/ai-solution-mockup.png`
- `src/assets/images/homepage/web-dev-mockup.png`
- `src/assets/images/homepage/ecommerce-mockup.png`
- `src/assets/images/homepage/seo-mockup.png` (or `app-dev-mockup.png`)

**Size:** 1200×600px each
**What to do:**

1. Add images to the `src/assets/images/homepage/` directory
2. Uncomment imports (lines 11-14) in `src/pages/index.astro`
3. Uncomment Image components in each service card
4. Remove placeholder divs

**Image Ideas:**

- Screenshots from your actual projects
- Device mockups showing websites/apps
- Dashboard/interface screenshots
- Use tools like Figma, Canva, or Mockup World

---

### 5. **Contact Page - Visual Image** (Optional)

**File:** `src/assets/images/contact/contact-visual.jpg`
**Size:** 1200×675px (16:9 aspect ratio)
**What to do:**

1. Add image to `src/assets/images/contact/contact-visual.jpg`
2. Uncomment line 9 in `src/pages/contact.astro`
3. Uncomment Image component (lines 69-73)
4. Remove placeholder div

---

## 🛠️ Step-by-Step: Adding Your First Image

Let's start with the **About page - Our Story image** (highest priority):

### Step 1: Prepare Your Image

1. Choose or take a photo (team, workspace, or location)
2. Resize to 1200×900px (4:3 aspect ratio)
3. Optimize for web (use [Squoosh.app](https://squoosh.app) or TinyPNG)
4. Save as `our-story.jpg`

### Step 2: Add Image to Project

```bash
# Make sure the directory exists
mkdir -p src/assets/images/about

# Copy your image
cp /path/to/your/image.jpg src/assets/images/about/our-story.jpg
```

### Step 3: Update about.astro

1. Open `src/pages/about.astro`
2. Uncomment line 9: `import ourStoryImage from '../assets/images/about/our-story.jpg';`
3. Find lines 90-105 (the placeholder section)
4. Uncomment lines 91-95 (the Image component)
5. Comment out or remove lines 97-105 (the placeholder div)

### Step 4: Test

```bash
npm run build
npm run preview
```

Visit `/about` and verify the image displays correctly!

---

## 📝 Quick Reference: File Locations

| Page     | Image File               | Location in Code                        |
| -------- | ------------------------ | --------------------------------------- |
| About    | `our-story.jpg`          | `src/pages/about.astro` line 9, 91-95   |
| Homepage | `hero-background.jpg`    | `src/pages/index.astro` line 9          |
| Homepage | `workspace.jpg`          | `src/pages/index.astro` line 10         |
| Homepage | `ai-solution-mockup.png` | `src/pages/index.astro` line 11         |
| Homepage | `web-dev-mockup.png`     | `src/pages/index.astro` line 12         |
| Homepage | `ecommerce-mockup.png`   | `src/pages/index.astro` line 13         |
| Homepage | `seo-mockup.png`         | `src/pages/index.astro` line 14         |
| Contact  | `contact-visual.jpg`     | `src/pages/contact.astro` line 9, 69-73 |

---

## 🎨 Image Optimization Tips

### Before Adding Images:

1. **Resize** to recommended dimensions
2. **Optimize** using:
   - [Squoosh.app](https://squoosh.app) (free, browser-based)
   - [TinyPNG](https://tinypng.com) (free, online)
   - ImageOptim (Mac app)
3. **Format:**
   - Photos: JPG (smaller file size)
   - Screenshots/Mockups: PNG (sharp edges, transparency)
   - Consider WebP (Astro will auto-convert)

### Target File Sizes:

- Hero images: Under 500KB
- Workspace/Story photos: Under 300KB
- Mockups: Under 200KB each

---

## 🔍 How to Find Placeholder Sections

### In Code:

Look for these patterns:

- `<!-- Uncomment when you add...`
- `<!-- Placeholder for...`
- `Add image: ...` or `Add mockup: ...`
- Gradient divs with icons and text

### Visual Indicators:

- Gradient backgrounds (blue-50, cyan-50, etc.)
- Centered icons
- Text like "Add photo: our-story.jpg"

---

## ✅ Checklist

### About Page

- [ ] Add `our-story.jpg` to `src/assets/images/about/`
- [ ] Uncomment import in `about.astro`
- [ ] Uncomment Image component
- [ ] Remove placeholder div
- [ ] Test and verify

### Homepage

- [ ] Add `hero-background.jpg`
- [ ] Add `workspace.jpg`
- [ ] Add `ai-solution-mockup.png`
- [ ] Add `web-dev-mockup.png`
- [ ] Add `ecommerce-mockup.png`
- [ ] Add `seo-mockup.png` (or `app-dev-mockup.png`)
- [ ] Uncomment all imports
- [ ] Uncomment all Image components
- [ ] Remove all placeholder divs
- [ ] Test and verify

### Contact Page

- [ ] Add `contact-visual.jpg` (optional)
- [ ] Uncomment import and Image component
- [ ] Remove placeholder div
- [ ] Test and verify

---

## 🚀 Next Steps After Adding Images

1. **Test locally:** `npm run build && npm run preview`
2. **Check responsive behavior:** Test on mobile, tablet, desktop
3. **Verify file sizes:** Ensure images load quickly
4. **Check alt text:** Make sure all images have descriptive alt text
5. **Deploy:** Once satisfied, deploy to production

---

## 💡 Pro Tips

1. **Start with one image** - Get comfortable with the process before adding more
2. **Use your actual projects** - Screenshots from real work are best for mockups
3. **Keep it consistent** - Use similar style/quality across all images
4. **Test as you go** - Add one image, test it, then move to the next
5. **Optimize first** - Don't add huge files, optimize before adding

---

## 🆘 Troubleshooting

### Image not showing?

- Check file path matches exactly
- Verify import statement is uncommented
- Make sure Image component is uncommented
- Check file extension matches (.jpg vs .jpeg)
- Run `npm run build` to see build errors

### Image looks wrong?

- Check aspect ratio matches recommendations
- Verify image dimensions
- Check if placeholder div is still there (might be overlapping)

### Build errors?

- Check file paths are correct
- Verify images are in the right directory
- Make sure imports match file names exactly

---

**Ready to start? Begin with the About page `our-story.jpg` - it's the highest priority!**
