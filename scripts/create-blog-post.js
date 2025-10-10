#!/usr/bin/env node

/**
 * Blog Post Creation Script
 *
 * This script helps create new blog posts following the established template
 * and ensures consistent formatting and structure.
 *
 * Usage: node scripts/create-blog-post.js
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

function getNextPostNumber() {
  const postsDir = path.join(__dirname, "../src/content/posts");
  const files = fs.readdirSync(postsDir);
  const postFiles = files.filter(
    (file) => file.startsWith("post-") && file.endsWith(".md")
  );

  if (postFiles.length === 0) return 1;

  const numbers = postFiles.map((file) => {
    const match = file.match(/post-(\d+)\.md/);
    return match ? parseInt(match[1]) : 0;
  });

  return Math.max(...numbers) + 1;
}

function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function generatePostContent(data) {
  const template = `---
title: "${data.title}"
author: "Randy Tarasevich"
date: "${data.date}"
image: "/${data.image}"
tags:
  [
    "${data.tags.join('",\n    "')}"
  ]
---

[Opening hook paragraph that grabs attention and establishes the problem your audience faces. This should be 2-4 sentences that immediately resonate with your target audience.]

[Second paragraph that builds on the problem and establishes your credibility or experience with this issue. Connect it to your Connecticut business community experience.]

## **🎯 The Core Problem**

[Explain the main challenge in detail. Use specific examples and scenarios that your audience will recognize. This should be 2-3 paragraphs that really drive home why this problem matters.]

[Include statistics or data points that support your argument. Make it clear why this is a pressing issue for small businesses.]

## **💡 Why Current Solutions Fall Short**

[Explain why existing approaches or common solutions don't work well. This could be about templates, DIY solutions, or other common approaches that seem easy but have hidden costs.]

[Use real examples or scenarios that illustrate the limitations. Make it relatable to Connecticut business owners.]

## **🚀 The Better Approach**

[Present your recommended solution or approach. This should be the core of your expertise and value proposition.]

[Break down the solution into clear, actionable steps or principles. Make it feel achievable but professional.]

## **💰 The Real Impact**

[Explain the benefits and outcomes of following your recommended approach. Use specific examples of results or improvements.]

[Include Connecticut-specific considerations or local market insights that make this relevant to your audience.]

## **⚡ Taking Action**

[Provide clear next steps for readers who want to implement your recommendations. Make it easy for them to get started.]

[Include a compelling call-to-action that guides them toward working with you or taking the next logical step.]

---

**Sources and References**

- Source Name - "Article Title"
- Another Source - "Study Title"
- Third Source - "Report Name"`;

  return template;
}

async function main() {
  console.log("🚀 Blog Post Creation Script");
  console.log("============================\n");

  try {
    // Get post details
    const title = await question("📝 Enter the blog post title: ");
    const image = await question(
      '🖼️  Enter image filename (e.g., "web-design-tips.png"): '
    );

    console.log("\n📋 Available tag categories:");
    console.log("• web development, web design, digital marketing");
    console.log("• small business, entrepreneurs, local business");
    console.log("• SEO, e-commerce, mobile-first, user experience");
    console.log("• connecticut, new england, local business");
    console.log("• content marketing, social media, email marketing\n");

    const tagsInput = await question("🏷️  Enter tags (comma-separated): ");
    const tags = tagsInput.split(",").map((tag) => tag.trim());

    // Ensure connecticut is included
    if (!tags.includes("connecticut")) {
      tags.push("connecticut");
    }

    const postNumber = getNextPostNumber();
    const date = getCurrentDate();
    const filename = `post-${postNumber}.md`;
    const filepath = path.join(__dirname, "../src/content/posts", filename);

    // Generate content
    const content = generatePostContent({
      title,
      image,
      tags,
      date,
    });

    // Write file
    fs.writeFileSync(filepath, content);

    console.log("\n✅ Blog post created successfully!");
    console.log(`📁 File: ${filename}`);
    console.log(`📍 Location: src/content/posts/${filename}`);
    console.log(`🔗 URL: /blog/post-${postNumber}`);

    console.log("\n📋 Next steps:");
    console.log("1. Edit the content following the template structure");
    console.log("2. Add your opening hook and problem statement");
    console.log("3. Develop each section with Connecticut-specific insights");
    console.log("4. Include real examples and data points");
    console.log("5. Add sources and references");
    console.log("6. Review using the BLOG_POST_CHECKLIST.md");
    console.log("7. Test the build: npm run build");
  } catch (error) {
    console.error("❌ Error creating blog post:", error.message);
  } finally {
    rl.close();
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { createSlug, generatePostContent };
