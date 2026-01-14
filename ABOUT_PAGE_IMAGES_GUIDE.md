# 📸 About Page Images Guide

**Purpose:** Add real images to enhance the visual appeal of your About page

---

## 📁 Image Directory

All About page images should be placed in:

```
src/assets/images/about/
```

---

## 🖼️ Images Needed for About Page

### 1. About Hero Background Image

**File:** `about-hero.jpg`  
**Location:** `src/assets/images/about/about-hero.jpg`  
**Size:** 1920×800px (or larger)  
**Aspect Ratio:** Wide landscape (2.4:1 or wider)  
**Purpose:** Background for About page hero section  
**Suggestions:**

- Connecticut shoreline/coastline
- Professional workspace
- Team collaboration
- Modern office environment

**Hero Section Specs:**

- Height: 500px (mobile), 600px (desktop)
- Full-width with overlay

---

### 2. Our Story Photo

**File:** `our-story.jpg`  
**Location:** `src/assets/images/about/our-story.jpg`  
**Size:** 1200×900px (4:3 aspect ratio)  
**Purpose:** Shows your story - team, workspace, or location  
**Suggestions:**

- **Team photo** - If you have team members
- **Workspace photo** - Your actual office/desk setup
- **Connecticut location** - Local landmark or shoreline
- **Professional headshot** - If solo business
- **Working environment** - Development setup, collaboration

**Design:**

- Image with overlay card showing "Why We Do What We Do"
- Modern, professional appearance

---

### 3. Skills & Expertise Images (3 images - Optional)

These are optional but add visual interest to the skill cards.

#### Web Development Skill Image

**File:** `web-dev-skill.jpg`  
**Size:** 800×600px  
**Suggestions:**

- Code on screen
- Responsive design mockup
- Development workspace
- Website on multiple devices

#### Automation Skill Image

**File:** `automation-skill.jpg`  
**Size:** 800×600px  
**Suggestions:**

- Dashboard showing integrations
- Workflow diagram
- Business tools integration
- Automation interface

#### Marketing Skill Image

**File:** `marketing-skill.jpg`  
**Size:** 800×600px  
**Suggestions:**

- Analytics dashboard
- SEO tools interface
- Growth charts
- Marketing metrics

**Note:** These are optional - the cards work fine with just icons. Add images if you want extra visual appeal.

---

## 🚀 How to Add Images

### Step 1: Prepare Images

1. Resize to recommended sizes
2. Optimize for web (use Squoosh.app)
3. Save to `src/assets/images/about/`

### Step 2: Update about.astro

1. Uncomment the import:

   ```astro
   import aboutHeroImage from '../assets/images/about/about-hero.jpg';
   import ourStoryImage from '../assets/images/about/our-story.jpg';
   ```

2. Uncomment Image components in the sections

3. Remove placeholder divs

### Step 3: Test

1. Build: `npm run build`
2. Check images display correctly
3. Verify responsive behavior

---

## ✅ Priority Order

### High Priority:

1. **Our Story Photo** - Biggest visual impact
2. **About Hero Background** - Professional appearance

### Optional:

3. **Skill Images** - Nice to have, but cards work without them

---

## 💡 Image Ideas

### Our Story Photo (Most Important):

- **Best:** Team photo or workspace photo
- **Alternative:** Connecticut location photo
- **Stock:** Professional workspace from Unsplash

### Hero Background:

- Connecticut shoreline (matches brand)
- Modern workspace
- Abstract professional imagery

### Skill Images:

- Screenshots from your projects
- Stock photos of development/marketing
- Can skip these if preferred

---

## 📊 Current Status

**Structure:** ✅ Complete  
**Hero:** ✅ Image-ready  
**Our Story:** ✅ Image + overlay design  
**Skills:** ✅ Image areas ready (optional)

**Next:** Add your images!

---

**Status:** ✅ About Page Enhanced  
**Ready for:** Real images to complete the design
