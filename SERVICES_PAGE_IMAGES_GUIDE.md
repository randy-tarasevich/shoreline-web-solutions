# 📸 Services Page Images Guide

**Purpose:** Add real images to enhance the visual appeal of your Services page

---

## 📁 Image Directory

All Services page images should be placed in:

```
src/assets/images/services/
```

---

## 🖼️ Images Needed for Services Page

### 1. Services Hero Background Image

**File:** `services-hero.jpg`  
**Location:** `src/assets/images/services/services-hero.jpg`  
**Size:** 1920×800px (or larger)  
**Aspect Ratio:** Wide landscape (2.4:1 or wider)  
**Purpose:** Background for Services page hero section  
**Suggestions:**

- Professional workspace
- Technology/development imagery
- Business collaboration
- Modern office environment

**Hero Section Specs:**

- Height: 500px (mobile), 600px (desktop)
- Full-width with overlay

---

### 2. Service Card Images (4 images)

#### AI Solutions Service Image

**File:** `ai-service.jpg`  
**Size:** 1200×600px (2:1 aspect ratio)  
**Suggestions:**

- AI chatbot interface screenshot
- AI dashboard mockup
- Automation workflow visualization
- AI technology imagery

#### Web Development Service Image

**File:** `web-dev-service.jpg`  
**Size:** 1200×600px (2:1 aspect ratio)  
**Suggestions:**

- Website on multiple devices
- Code editor with website preview
- Development workspace
- Responsive design mockup

#### E-commerce Service Image

**File:** `ecommerce-service.jpg`  
**Size:** 1200×600px (2:1 aspect ratio)  
**Suggestions:**

- Online store interface
- Shopping cart checkout
- Product catalog view
- E-commerce dashboard

#### SEO Service Image

**File:** `seo-service.jpg`  
**Size:** 1200×600px (2:1 aspect ratio)  
**Suggestions:**

- Analytics dashboard
- SEO tools interface
- Search rankings visualization
- Growth charts

---

## 🚀 How to Add Images

### Step 1: Prepare Images

1. Resize to recommended sizes
2. Optimize for web (use Squoosh.app)
3. Save to `src/assets/images/services/`

### Step 2: Update services.astro

1. Uncomment the imports:

   ```astro
   import servicesHeroImage from '../assets/images/services/services-hero.jpg';
   import aiServiceImage from '../assets/images/services/ai-service.jpg';
   import webDevServiceImage from '../assets/images/services/web-dev-service.jpg';
   import ecommerceServiceImage from '../assets/images/services/ecommerce-service.jpg';
   import seoServiceImage from '../assets/images/services/seo-service.jpg';
   ```

2. Uncomment Image components in the sections

3. Remove placeholder divs

### Step 3: Test

1. Build: `npm run build`
2. Check images display correctly
3. Verify hover effects work

---

## ✅ Priority Order

### High Priority:

1. **Service Card Images** - Biggest visual impact (4 images)
2. **Services Hero Background** - Professional appearance

---

## 💡 Image Ideas

### Service Card Images:

- **Best:** Screenshots from your actual projects
- **Alternative:** Stock photos from Unsplash/Pexels
- **Mockups:** Create device mockups using tools like Mockup World

### Hero Background:

- Professional workspace
- Technology/development imagery
- Business collaboration scene

---

## 📊 Current Status

**Structure:** ✅ Complete  
**Hero:** ✅ Image-ready  
**Service Cards:** ✅ Image areas ready (h-56)  
**Hover Effects:** ✅ Configured

**Next:** Add your images!

---

**Status:** ✅ Services Page Enhanced  
**Ready for:** Real images to complete the design
