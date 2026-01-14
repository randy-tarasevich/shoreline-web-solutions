# 🔧 Fix: Google Cloud Permission Error

**Error:** "You do not have the required 'resourcemanager.projects.create' permission"

---

## 🎯 Quick Solutions

### Option 1: Use a Personal Google Account (Recommended)

If you're using a work or school Google account, it may have restrictions.

1. **Sign out** of your current Google account
2. **Sign in** with a personal Gmail account (yourname@gmail.com)
3. Go to [Google Cloud Console](https://console.cloud.google.com/)
4. Create a new project with your personal account

**Note:** You can use your personal account for this - it's just for API access.

---

### Option 2: Use an Existing Project

If you already have a Google Cloud project:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the **project dropdown** at the top
3. Select an **existing project** from the list
4. Skip project creation and go straight to enabling Places API

---

### Option 3: Ask Your Organization Admin

If you're using a work/school account:

1. Contact your Google Workspace admin
2. Ask them to either:
   - Create a project for you, OR
   - Grant you permission to create projects

---

### Option 4: Use Google Cloud Free Trial

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Try the **free trial** option (if available)
3. This sometimes bypasses permission restrictions

---

## ✅ After You Have Access

Once you can access Google Cloud Console:

1. **Create or select a project**
2. **Enable billing** (required for Places API)
3. **Enable Places API**
4. **Create API key**
5. **Add to your .env file**

---

## 💡 Why This Happens

- **Work/School accounts** often have restrictions on creating projects
- **Personal accounts** usually have full access
- **Organization policies** can block project creation

**Solution:** Use a personal Google account for API access - it's safe and common practice.

---

## 🚀 Quick Alternative: Manual Reviews

If you can't set up the API right now, you can always:

1. **Manually add reviews** to `src/pages/portfolio.astro`
2. **Copy reviews** from your Google Business Profile
3. **Update them** whenever you get new reviews

The carousel will work perfectly with manual reviews too!

---

**Need help?** The API setup is optional - manual reviews work great too!

