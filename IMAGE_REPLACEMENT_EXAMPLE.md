# 🖼️ Image Replacement Example: About Page

This shows exactly what to change when you add `our-story.jpg` to the About page.

---

## 📝 Before (Current State)

**File:** `src/pages/about.astro`

### Import Section (Line 8-10):

```astro
// Import About page images (add your images to src/assets/images/about/)
// Uncomment when you add images:
// import ourStoryImage from '../assets/images/about/our-story.jpg';
```

### Image Section (Lines 90-105):

```astro
<!-- Our Story Photo -->
<div class="relative rounded-2xl overflow-hidden shadow-2xl">
    <!-- Uncomment when you add our-story.jpg:
    <Image
        src={ourStoryImage}
        alt="Shoreline Web Solutions team or workspace in Connecticut"
        class="w-full h-auto"
    />
    -->
    <div class="aspect-[4/3] bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
        <div class="text-center p-8">
            <svg class="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p class="text-slate-600 font-medium">Add photo: our-story.jpg</p>
            <p class="text-sm text-slate-500 mt-2">Team, workspace, or Connecticut location</p>
        </div>
    </div>
    <!-- Overlay card with mission -->
    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 to-transparent p-6">
        <!-- ... overlay content ... -->
    </div>
</div>
```

---

## ✅ After (When Image is Added)

### Step 1: Add the image file

```bash
# Place your image here:
src/assets/images/about/our-story.jpg
```

### Step 2: Update Import Section (Line 9)

```astro
// Import About page images (add your images to src/assets/images/about/)
import ourStoryImage from '../assets/images/about/our-story.jpg';
```

### Step 3: Update Image Section (Lines 90-105)

```astro
<!-- Our Story Photo -->
<div class="relative rounded-2xl overflow-hidden shadow-2xl">
    <Image
        src={ourStoryImage}
        alt="Shoreline Web Solutions team or workspace in Connecticut"
        class="w-full h-auto"
    />
    <!-- Overlay card with mission -->
    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/95 to-transparent p-6">
        <!-- ... overlay content ... -->
    </div>
</div>
```

**Note:** The placeholder div (with the gradient background and icon) is completely removed.

---

## 🎯 Summary of Changes

1. ✅ Uncomment the import statement (remove `//`)
2. ✅ Uncomment the `<Image>` component
3. ✅ Remove the placeholder `<div>` with gradient background

That's it! The overlay card stays in place (it's the white card that appears over the bottom of the image).

---

## 🧪 Test It

After making changes:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4321/about` and you should see your image!

---

## 📸 Image Requirements

- **File name:** `our-story.jpg`
- **Location:** `src/assets/images/about/our-story.jpg`
- **Size:** 1200×900px (4:3 aspect ratio)
- **Format:** JPG (optimized for web)
- **File size:** Under 300KB recommended

---

**Ready to try it? Add your image file, then make these 3 simple changes!**
