# Image Placement Guide for Shoreline Web Solutions

## 📋 Overview

This guide outlines the best practices for image placement in your Astro project, based on Astro's asset handling capabilities and your current project structure.

---

## 🎯 **Recommended Image Placement Strategy**

### **1. `/src/assets/images/` - Component & Page Images**

**Use for:**
- Images used in Astro components (`.astro` files)
- Images that need optimization, processing, or transformation
- Portfolio/project screenshots
- Hero images in pages
- Images used with Astro's `<Image>` component

**Structure:**
```
src/assets/images/
├── portfolio/
│   ├── legacy-electrical-screenshot.png
│   ├── martel-electric-screenshot.png
│   └── [future-project-images].png
├── hero/
│   └── [hero-images].jpg
└── icons/
    └── [icon-images].svg
```

**Usage Example:**
```astro
---
import { Image } from 'astro:assets';
import portfolioImage from '../assets/images/portfolio/project-1.png';
---

<Image 
  src={portfolioImage} 
  alt="Project screenshot"
  width={800}
  height={600}
/>
```

**Benefits:**
- ✅ Automatic optimization and format conversion
- ✅ Build-time processing
- ✅ TypeScript support
- ✅ Better performance with lazy loading
- ✅ Responsive image generation

---

### **2. `/public/images/blog/` - Blog Post Images**

**Use for:**
- Blog post featured images (referenced in markdown frontmatter)
- Images embedded in markdown content
- Social sharing images (OG images)

**Structure:**
```
public/
├── images/
│   └── blog/
│       ├── post-1.png
│       ├── post-2.png
│       ├── post-3.png
│       └── post-4.png
├── favicon.svg
└── robots.txt
```

**Usage in Markdown Frontmatter:**
```markdown
---
title: "Your Post Title"
image: "/images/blog/your-post-image.png"
---
```

**Usage in Components (when displaying blog images):**
```astro
---
// For blog post images from frontmatter, use regular img tag
// since they're already in public folder
---

<img src={post.data.image} alt={post.data.title} />
```

**Benefits:**
- ✅ Direct URL access (no build processing needed)
- ✅ Easy to reference in markdown
- ✅ Works with content collections
- ✅ Simple path structure

---

### **3. `/public/` - Static Assets**

**Use for:**
- Favicons (`favicon.svg`)
- `robots.txt`
- Files that must be at root level
- Assets referenced by external services
- Files that don't need processing

**Structure:**
```
public/
├── favicon.svg
├── robots.txt
└── [other-static-files]
```

---

## 🔧 **Current Issues & Fixes Needed**

### **Issue 1: Blog Post Images Using `<Image>` Component Incorrectly**

**Problem:** In `src/pages/blog/[slug].astro` and `src/pages/blog.astro`, blog post images are used with `<Image>` component, but they're strings from the frontmatter, not imported assets.

**Current Code (Incorrect):**
```astro
<Image 
  src={post.data.image}  // ❌ This is a string "/post-4.png"
  alt={post.data.title}
/>
```

**Fix:** Since blog images are in `/public/`, use regular `<img>` tags:

```astro
{post.data.image && (
  <img 
    src={post.data.image} 
    alt={post.data.title}
    class="w-full h-auto mb-8"
    loading="lazy"
  />
)}
```

**OR** move blog images to assets and import them dynamically (more complex but better optimization).

---

### **Issue 2: Inconsistent Image Locations**

**Current State:**
- Portfolio images: `/src/assets/` ✅ (correct)
- Blog images: `/public/` (needs organization)
- Some images directly in `/public/` root

**Recommended Fix:**
1. Move all blog images to `/public/images/blog/`
2. Update frontmatter paths: `image: "/images/blog/post-4.png"`
3. Keep portfolio images in `/src/assets/images/portfolio/`

---

## 📁 **Recommended Final Structure**

```
project-root/
├── public/
│   ├── images/
│   │   └── blog/
│   │       ├── post-1.png
│   │       ├── post-2.png
│   │       ├── post-3.png
│   │       └── post-4.png
│   ├── favicon.svg
│   └── robots.txt
│
└── src/
    └── assets/
        └── images/
            ├── portfolio/
            │   ├── legacy-electrical-screenshot.png
            │   └── martel-electric-screenshot.png
            └── [other-component-images]/
```

---

## 🎨 **Best Practices Summary**

### **When to Use `/src/assets/images/`:**
- ✅ Images in Astro components
- ✅ Images that need optimization
- ✅ Portfolio/project images
- ✅ Hero images on pages
- ✅ Any image used with `<Image>` component

### **When to Use `/public/images/`:**
- ✅ Blog post featured images
- ✅ Images referenced in markdown
- ✅ Social sharing images (OG images)
- ✅ Images that need direct URL access
- ✅ Large images that don't need processing

### **Image Optimization Tips:**
1. **For component images:** Use Astro's `<Image>` component for automatic optimization
2. **For blog images:** Optimize manually before placing in `/public/`
   - Recommended: 1200x630px for featured images
   - Format: WebP or PNG
   - Compress before upload
3. **File naming:** Use descriptive, kebab-case names
   - ✅ `legacy-electrical-screenshot.png`
   - ❌ `IMG_1234.png`

---

## 🚀 **Migration Steps**

1. **Create new directory structure:**
   ```bash
   mkdir -p public/images/blog
   mkdir -p src/assets/images/portfolio
   ```

2. **Move blog images:**
   ```bash
   mv public/post-*.png public/images/blog/
   ```

3. **Update blog post frontmatter:**
   Change `image: "/post-4.png"` to `image: "/images/blog/post-4.png"`

4. **Move portfolio images:**
   ```bash
   mv src/assets/legacy-electrical-screenshot.png src/assets/images/portfolio/
   mv src/assets/martel-electric-screenshot.png src/assets/images/portfolio/
   ```

5. **Update component imports:**
   Update `portfolio.astro` imports to new paths

6. **Fix blog image rendering:**
   Replace `<Image>` with `<img>` tags for blog post images

---

## 📝 **Quick Reference**

| Image Type | Location | Usage |
|------------|----------|-------|
| Portfolio screenshots | `/src/assets/images/portfolio/` | Import in components |
| Blog featured images | `/public/images/blog/` | Reference in frontmatter |
| Hero images | `/src/assets/images/hero/` | Import in components |
| Favicons | `/public/` | Direct reference |
| OG images | `/public/images/` | Direct URL reference |

---

## ✅ **Summary**

**Best placement:**
- **Component/Page images:** `/src/assets/images/` (with imports)
- **Blog post images:** `/public/images/blog/` (with direct paths)
- **Static assets:** `/public/` (root level)

This structure provides optimal performance, maintainability, and follows Astro best practices.



