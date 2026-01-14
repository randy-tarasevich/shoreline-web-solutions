# 🔍 Google Search Console Setup Guide

**Purpose:** Set up Google Search Console to monitor your website's search performance and ensure all pages are being indexed properly.

---

## 📋 Prerequisites

- Your website must be live and accessible
- You need a Google account
- Access to your website's DNS or HTML files (for verification)

---

## 🚀 Step-by-Step Setup

### Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"** or **"Start now"**

### Step 2: Add Your Property

**Option A: Domain Property (Recommended)**

- Select **"Domain"** property type
- Enter: `shorelinewebsolutions.com`
- This covers all subdomains and protocols (www, non-www, http, https)

**Option B: URL Prefix Property**

- Select **"URL prefix"** property type
- Enter: `https://shorelinewebsolutions.com`
- More specific, but only covers this exact URL

**Recommendation:** Use Domain property for broader coverage.

### Step 3: Verify Ownership

Google needs to verify you own the website. Choose one method:

#### Method 1: HTML File Upload (Easiest)

1. Download the HTML verification file from Google
2. Upload it to your website's `public/` folder
3. Ensure it's accessible at: `https://shorelinewebsolutions.com/[filename].html`
4. Click **"Verify"** in Google Search Console

**Note:** After verification, you can delete the file if you want.

#### Method 2: HTML Tag (Alternative)

1. Copy the meta tag provided by Google
2. Add it to your `src/layouts/Layout.astro` file in the `<head>` section
3. Deploy the change
4. Click **"Verify"** in Google Search Console

#### Method 3: DNS Record (For Domain Property)

1. Add a TXT record to your domain's DNS settings
2. Use the value provided by Google
3. Wait for DNS propagation (can take up to 48 hours)
4. Click **"Verify"** in Google Search Console

---

## 📤 Step 4: Submit Your Sitemap

Once verified, submit your sitemap:

1. In Google Search Console, go to **"Sitemaps"** in the left menu
2. Enter: `sitemap.xml`
3. Click **"Submit"**

**Your sitemap URLs:**

- Main sitemap: `https://shorelinewebsolutions.com/sitemap.xml`
- Sitemap index: `https://shorelinewebsolutions.com/sitemap-index.xml`

**Note:** Astro automatically generates these sitemaps. They include all your pages, blog posts, and service pages.

---

## ✅ Step 5: Initial Setup Checklist

After verification, complete these tasks:

- [ ] Submit sitemap
- [ ] Check **"Coverage"** report for any crawl errors
- [ ] Review **"Performance"** report (may take a few days to populate)
- [ ] Check **"Mobile Usability"** report
- [ ] Review **"Core Web Vitals"** (if available)

---

## 📊 Key Reports to Monitor

### 1. Performance Report

- **Location:** Left menu → Performance
- **Shows:** Search queries, clicks, impressions, CTR, average position
- **Frequency:** Check weekly
- **Action:** Identify high-performing queries and optimize for them

### 2. Coverage Report

- **Location:** Left menu → Coverage
- **Shows:** Indexed pages, errors, warnings
- **Frequency:** Check weekly
- **Action:** Fix any errors or warnings

### 3. Mobile Usability

- **Location:** Left menu → Mobile Usability
- **Shows:** Mobile-friendly issues
- **Frequency:** Check monthly
- **Action:** Fix any mobile usability issues

### 4. Core Web Vitals

- **Location:** Left menu → Core Web Vitals
- **Shows:** Page speed metrics (LCP, FID, CLS)
- **Frequency:** Check monthly
- **Action:** Optimize pages with poor scores

### 5. Links Report

- **Location:** Left menu → Links
- **Shows:** External links, internal links, top linking sites
- **Frequency:** Check monthly
- **Action:** Monitor backlink growth

---

## 🔧 Common Issues & Solutions

### Issue: "Sitemap could not be read"

**Solution:**

- Verify sitemap is accessible: Visit `https://shorelinewebsolutions.com/sitemap.xml`
- Check for XML syntax errors
- Ensure sitemap is not blocked by robots.txt

### Issue: "URL is not on Google"

**Solution:**

- Use **"URL Inspection"** tool to request indexing
- Check Coverage report for errors
- Ensure page is linked from other pages (internal linking)

### Issue: "Mobile usability errors"

**Solution:**

- Check the specific errors in Mobile Usability report
- Fix viewport issues, text size problems, or touch target issues
- Re-test after fixes

### Issue: "Coverage errors"

**Solution:**

- Review the specific error type (404, 500, etc.)
- Fix broken links or server errors
- Use "Validate Fix" after making changes

---

## 📈 Best Practices

### Weekly Tasks:

- [ ] Check Performance report for new queries
- [ ] Review Coverage report for errors
- [ ] Monitor search rankings for target keywords

### Monthly Tasks:

- [ ] Review Core Web Vitals
- [ ] Check Mobile Usability
- [ ] Analyze top-performing pages
- [ ] Review backlink growth

### Quarterly Tasks:

- [ ] Full SEO audit
- [ ] Review and update sitemap
- [ ] Analyze competitor performance
- [ ] Update keyword strategy

---

## 🎯 What to Expect

### First Week:

- Verification complete
- Sitemap submitted
- Initial crawl started

### First Month:

- Performance data starts appearing
- Coverage report shows indexed pages
- Mobile Usability report available

### After 3 Months:

- Full performance data
- Historical trends visible
- Core Web Vitals data available
- Search ranking insights

---

## 🔗 Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Search Console Academy](https://developers.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 📝 Notes

- **Data Delay:** Search Console data has a 2-3 day delay
- **Indexing Time:** New pages may take 1-2 weeks to appear in search
- **Verification:** Once verified, you don't need to re-verify unless you change verification method
- **Multiple Properties:** You can add multiple properties (www, non-www, etc.) if needed

---

## ✅ Verification Checklist

After completing setup:

- [ ] Property added and verified
- [ ] Sitemap submitted successfully
- [ ] No critical errors in Coverage report
- [ ] Performance report showing data (after a few days)
- [ ] Mobile Usability report shows no errors
- [ ] Email notifications enabled (optional but recommended)

---

**Status:** Ready to set up  
**Estimated Time:** 15-30 minutes  
**Priority:** High - Essential for SEO monitoring
