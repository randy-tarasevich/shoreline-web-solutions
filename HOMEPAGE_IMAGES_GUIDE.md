# 📸 Homepage Images Guide

**Purpose:** Add real images and mockups to enhance the visual appeal of your homepage

---

## 📁 Image Directory Structure

All homepage images should be placed in:

```
src/assets/images/homepage/
```

---

## 🖼️ Images Needed for Homepage

### 1. Hero Background Image (HIGH PRIORITY)

**File:** `hero-background.jpg`  
**Location:** `src/assets/images/homepage/hero-background.jpg`  
**Size:** 1920×1080px (or larger, will be cropped to fit)  
**Aspect Ratio:** 16:9 or wider (will cover 600-700px height)  
**Purpose:** Full-width background image for hero section  
**Suggestions:**

- Connecticut shoreline/coastline (perfect for "Shoreline" branding!)
- Modern workspace/office
- Abstract tech/development imagery
- Professional business environment
- Wide landscape shots work best

**How to add:**

1. Save image to `src/assets/images/homepage/hero-background.jpg`
2. Uncomment the import in `src/pages/index.astro`:
   ```astro
   import heroImage from '../assets/images/homepage/hero-background.jpg';
   ```
3. Uncomment the Image component in the hero section
4. Remove or keep the placeholder gradient div (your choice)

**Hero Section Specs:**

- Height: 600px (mobile), 700px (desktop)
- Full-width image with overlay for text readability
- Optimized for fast loading

---

### 2. Workspace/Team Photo

**File:** `workspace.jpg`  
**Location:** `src/assets/images/homepage/workspace.jpg`  
**Size:** 1200×900px (4:3 aspect ratio)  
**Purpose:** About section - shows your workspace, team, or Connecticut location  
**Suggestions:**

- Your actual workspace/office
- Team photo (if applicable)
- Connecticut location/landmark
- Professional development environment
- Local business setting

**How to add:**

1. Save image to `src/assets/images/homepage/workspace.jpg`
2. Uncomment the import in `src/pages/index.astro`
3. Uncomment the Image component in the About section

---

### 3. Service Mockups (4 images needed)

#### AI Solution Mockup

**File:** `ai-solution-mockup.png`  
**Size:** 1200×600px  
**Purpose:** Shows AI chatbot interface or AI solution dashboard  
**Suggestions:**

- Screenshot of an AI chatbot interface
- Dashboard showing AI analytics
- Mockup of AI integration
- Use tools like: Figma, Canva, or screenshot from your projects

#### Web Development Mockup

**File:** `web-dev-mockup.png`  
**Size:** 1200×600px  
**Purpose:** Shows custom website on devices  
**Suggestions:**

- Device mockup (laptop/phone/tablet) showing a website
- Multiple device view showing responsive design
- Use mockup tools: Mockup World, Smartmockups, or Figma

#### E-commerce Mockup

**File:** `ecommerce-mockup.png`  
**Size:** 1200×600px  
**Purpose:** Shows online store interface  
**Suggestions:**

- Shopping cart interface
- Product page mockup
- Checkout process
- Use actual project screenshots or create mockups

#### SEO Mockup

**File:** `seo-mockup.png`  
**Size:** 1200×600px  
**Purpose:** Shows SEO analytics or dashboard  
**Suggestions:**

- Google Analytics dashboard
- SEO ranking charts
- Search results showing your work
- Analytics visualization

---

## 🛠️ How to Create Mockups

### Option 1: Use Your Actual Projects

- Take screenshots of websites you've built
- Use browser dev tools to show responsive views
- Capture multiple device views

### Option 2: Use Mockup Tools (Free)

- **Mockup World:** https://www.mockupworld.co/
- **Smartmockups:** https://smartmockups.com/ (free tier)
- **Figma:** Create device frames and add screenshots
- **Canva:** Has mockup templates

### Option 3: Use Design Tools

- **Figma:** Create custom mockups
- **Adobe XD:** Professional mockup creation
- **Sketch:** Mac-only design tool

---

## 📝 Step-by-Step: Adding Images

### Step 1: Prepare Your Images

1. Resize images to recommended sizes
2. Optimize for web (use Squoosh.app or TinyPNG)
3. Save to `src/assets/images/homepage/`

### Step 2: Update index.astro

1. Open `src/pages/index.astro`
2. Find the import section at the top
3. Uncomment the image imports you've added
4. Uncomment the Image components in the sections

### Step 3: Test

1. Build your site: `npm run build`
2. Check that images display correctly
3. Verify responsive behavior
4. Check image file sizes (should be optimized)

---

## ✅ Current Status

### Images Added (Structure Ready):

- ✅ Hero section - ready for background image
- ✅ Services section - 4 mockup placeholders ready
- ✅ About section - workspace photo placeholder ready

### Images Needed:

- [ ] `hero-background.jpg` - Hero section background
- [ ] `workspace.jpg` - About section photo
- [ ] `ai-solution-mockup.png` - AI Solutions service card
- [ ] `web-dev-mockup.png` - Web Development service card
- [ ] `ecommerce-mockup.png` - E-commerce service card
- [ ] `seo-mockup.png` - SEO service card

---

## 🎨 Image Guidelines

### File Formats:

- **Photos:** JPG (for photos, hero background)
- **Mockups/Screenshots:** PNG (for transparency, sharp edges)
- **Optimized:** Use WebP when possible (Astro will handle)

### File Sizes:

- Hero background: Under 500KB
- Workspace photo: Under 300KB
- Mockups: Under 200KB each

### Quality:

- Use high quality but optimized
- Test on different devices
- Ensure fast loading times

---

## 🔧 Quick Start

1. **Add one image at a time:**

   - Start with workspace photo (easiest)
   - Then add service mockups
   - Finally add hero background

2. **Use placeholders first:**

   - The current structure works with placeholders
   - Add real images as you get them
   - No breaking changes

3. **Test as you go:**
   - Add one image
   - Test it works
   - Move to next

---

## 💡 Image Ideas

### Workspace Photo Ideas:

- Your desk/workspace setup
- Connecticut shoreline/coastline
- Local business district
- Coffee shop/workspace environment
- Professional headshot (if solo)

### Mockup Ideas:

- Use screenshots from your portfolio projects
- Create device mockups showing responsive design
- Show before/after comparisons
- Display analytics dashboards
- Showcase user interfaces

---

## 📊 Expected Impact

**Before:**

- Text-heavy homepage
- Limited visual appeal
- Less engaging

**After:**

- Visual, engaging homepage
- Professional appearance
- Better user experience
- Higher conversion rates

---

**Next Steps:**

1. Gather/create images
2. Optimize images
3. Add to `src/assets/images/homepage/`
4. Uncomment imports and Image components
5. Test and refine
