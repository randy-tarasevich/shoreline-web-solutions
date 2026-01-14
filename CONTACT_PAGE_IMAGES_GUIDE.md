# 📸 Contact Page Images Guide

**Purpose:** Add real images to enhance the visual appeal of your Contact page

---

## 📁 Image Directory

All Contact page images should be placed in:

```
src/assets/images/contact/
```

---

## 🖼️ Images Needed for Contact Page

### 1. Contact Hero Background Image

**File:** `contact-hero.jpg`  
**Location:** `src/assets/images/contact/contact-hero.jpg`  
**Size:** 1920×800px (or larger)  
**Aspect Ratio:** Wide landscape (2.4:1 or wider)  
**Purpose:** Background for Contact page hero section  
**Suggestions:**

- Professional communication/collaboration scene
- Handshake or meeting imagery
- Modern workspace with people
- Business consultation scene

**Hero Section Specs:**

- Height: 500px (mobile), 600px (desktop)
- Full-width with overlay

---

### 2. Contact Visual Image (Optional)

**File:** `contact-visual.jpg`  
**Location:** `src/assets/images/contact/contact-visual.jpg`  
**Size:** 1200×675px (16:9 aspect ratio)  
**Purpose:** Visual element in contact information section  
**Suggestions:**

- Professional communication scene
- Collaboration/meeting imagery
- Business consultation
- Team collaboration

**Note:** This is optional - the page works fine without it. Add if you want extra visual appeal.

---

## 🚀 How to Add Images

### Step 1: Prepare Images

1. Resize to recommended sizes
2. Optimize for web (use Squoosh.app)
3. Save to `src/assets/images/contact/`

### Step 2: Update contact.astro

1. Uncomment the imports:

   ```astro
   import contactHeroImage from '../assets/images/contact/contact-hero.jpg';
   import contactVisualImage from '../assets/images/contact/contact-visual.jpg';
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

1. **Contact Hero Background** - Professional appearance

### Optional:

2. **Contact Visual Image** - Nice to have, but not critical

---

## 💡 Image Ideas

### Hero Background:

- Professional communication/collaboration
- Business meeting/consultation
- Modern workspace
- Handshake or professional interaction

### Contact Visual (Optional):

- Communication/collaboration imagery
- Business consultation scene
- Can skip if preferred

---

## 📊 Current Status

**Structure:** ✅ Complete  
**Hero:** ✅ Image-ready  
**Contact Visual:** ✅ Optional image area ready

**Next:** Add your images!

---

**Status:** ✅ Contact Page Enhanced  
**Ready for:** Real images to complete the design
