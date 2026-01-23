import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_Djp_mt0f.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Navigation } from '../../chunks/Navigation_dPntXoiq.mjs';
import 'clsx';
import { d as getRelatedPosts, c as createTagSlug } from '../../chunks/tags_CpxmCQdR.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DuAHye_n.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://shorelinewebsolutions.com");
const $$RelatedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RelatedPosts;
  const { currentPost, limit = 3, showTags = true } = Astro2.props;
  const relatedPosts = await getRelatedPosts(currentPost, limit);
  return renderTemplate`${relatedPosts.length > 0 && renderTemplate`${maybeRenderHead()}<section class="related-posts bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-gray-200"><div class="mb-6"><h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
Related Articles
</h3><p class="text-gray-600">
Discover more insights on similar topics
</p></div><div class="grid gap-6 md:gap-8">${relatedPosts.map((relatedPost) => renderTemplate`<article class="group related-post-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"><div class="flex flex-col md:flex-row"><!-- Post Image -->${relatedPost.post.data.image && renderTemplate`<div class="md:w-1/3"><img${addAttribute(relatedPost.post.data.image, "src")}${addAttribute(`Featured image for ${relatedPost.post.data.title} - related article`, "alt")} class="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"></div>`}<!-- Post Content --><div${addAttribute(`${relatedPost.post.data.image ? "md:w-2/3" : "w-full"} p-6`, "class")}><div class="flex items-center mb-3 text-sm text-gray-500"><div class="flex items-center mr-4"><div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">${relatedPost.post.data.author.charAt(0)}</div><span class="font-medium">${relatedPost.post.data.author}</span></div><div class="flex items-center"><svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg><time${addAttribute(relatedPost.post.data.date, "datetime")}>${new Date(relatedPost.post.data.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })}</time></div></div><h4 class="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300"><a${addAttribute(`/blog/${relatedPost.post.slug}`, "href")}>${relatedPost.post.data.title}</a></h4>${showTags && relatedPost.sharedTags.length > 0 && renderTemplate`<div class="mb-4"><div class="flex flex-wrap gap-1.5"><span class="text-xs text-gray-500 font-medium">Shared tags:</span>${relatedPost.sharedTags.map((tag) => renderTemplate`<span class="px-2 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200">${tag}</span>`)}</div></div>`}<div class="flex items-center justify-between"><div class="flex flex-wrap gap-1.5">${relatedPost.post.data.tags.slice(0, 3).map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${createTagSlug(tag)}`, "href")} class="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium rounded-full border border-gray-300 hover:from-blue-100 hover:to-cyan-100 hover:text-blue-700 hover:border-blue-300 transition-all duration-300">${tag}</a>`)}${relatedPost.post.data.tags.length > 3 && renderTemplate`<span class="text-xs text-gray-500">
+${relatedPost.post.data.tags.length - 3} more
</span>`}</div><a${addAttribute(`/blog/${relatedPost.post.slug}`, "href")} class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300 group/btn">
Read more
<svg class="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a></div></div></div></article>`)}</div><!-- View All Posts Link --><div class="mt-6 text-center"><a href="/blog" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
View All Articles
</a></div></section>`}`;
}, "/Users/rtarasevich/shoreline-web-solutions/src/components/RelatedPosts.astro", void 0);

/**
 * Calculate reading time for blog post content
 * @param content - The blog post content (markdown or HTML)
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Estimated reading time in minutes
 */
function calculateReadingTime(content, wordsPerMinute = 200) {
	// Remove markdown syntax and HTML tags for accurate word count
	const plainText = content
		.replace(/```[\s\S]*?```/g, '') // Remove code blocks
		.replace(/`[^`]+`/g, '') // Remove inline code
		.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert markdown links to text
		.replace(/[#*_~`]/g, '') // Remove markdown formatting
		.replace(/<[^>]+>/g, '') // Remove HTML tags
		.replace(/\s+/g, ' ') // Normalize whitespace
		.trim();

	// Count words
	const words = plainText.split(/\s+/).filter(word => word.length > 0).length;

	// Calculate reading time (minimum 1 minute)
	return Math.max(1, Math.ceil(words / wordsPerMinute));
}

/**
 * Format reading time as a human-readable string
 * @param minutes - Reading time in minutes
 * @returns Formatted string (e.g., "5 min read")
 */
function formatReadingTime(minutes) {
	return `${minutes} min read`;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://shorelinewebsolutions.com");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const siteUrl = "https://shorelinewebsolutions.com";
  const readingTime = calculateReadingTime(post.body);
  const readingTimeText = formatReadingTime(readingTime);
  const getPostDescription = () => {
    if (post.data.description) {
      return post.data.description;
    }
    const contentText = post.body.replace(/[#*\[\]()]/g, "").replace(/\n+/g, " ").trim();
    const firstParagraph = contentText.split(".")[0] || contentText;
    return firstParagraph.substring(0, 155).trim() + (firstParagraph.length > 155 ? "..." : "");
  };
  const postDescription = getPostDescription();
  const postOgImage = post.data.image ? `${siteUrl}${post.data.image}` : `${siteUrl}/og-image.jpg`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.data.title} - Shoreline Web Solutions Blog`, "description": postDescription, "canonical": `/blog/${post.slug}`, "ogImage": postOgImage, "ogType": "article", "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> ", "<main data-astro-cid-4sn4zg3r> <!-- Navigation --> ", ' <!-- Article Header --> <article class="relative pt-20 pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden" data-astro-cid-4sn4zg3r> <!-- Background Elements --> <div class="absolute inset-0" data-astro-cid-4sn4zg3r> <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" data-astro-cid-4sn4zg3r></div> <div class="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" data-astro-cid-4sn4zg3r></div> <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl" data-astro-cid-4sn4zg3r></div> </div> <div class="relative max-w-5xl mx-auto px-6" data-astro-cid-4sn4zg3r> <!-- Breadcrumb --> <nav class="mb-10" data-astro-cid-4sn4zg3r> <a href="/blog" class="group inline-flex items-center text-blue-300 hover:text-white transition-all duration-300" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-4sn4zg3r></path> </svg> <span class="font-medium" data-astro-cid-4sn4zg3r>Back to Blog</span> </a> </nav> <!-- Article Title --> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight" data-astro-cid-4sn4zg3r> ', ' </h1> <!-- Article Meta Info --> <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10" data-astro-cid-4sn4zg3r> <div class="flex items-center space-x-6 text-blue-200" data-astro-cid-4sn4zg3r> <div class="flex items-center" data-astro-cid-4sn4zg3r> <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3" data-astro-cid-4sn4zg3r> ', ' </div> <div data-astro-cid-4sn4zg3r> <span class="font-semibold text-white" data-astro-cid-4sn4zg3r>By ', '</span> <div class="text-sm text-blue-300" data-astro-cid-4sn4zg3r>Author</div> </div> </div> <div class="flex items-center" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4sn4zg3r> <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" data-astro-cid-4sn4zg3r></path> </svg> <div data-astro-cid-4sn4zg3r> <time', ' class="font-semibold text-white" data-astro-cid-4sn4zg3r> ', ' </time> <div class="text-sm text-blue-300" data-astro-cid-4sn4zg3r>Published</div> </div> </div> </div> <!-- Reading Time Estimate --> <div class="flex items-center text-blue-200" data-astro-cid-4sn4zg3r> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-4sn4zg3r> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" data-astro-cid-4sn4zg3r></path> </svg> <span class="font-semibold text-white" data-astro-cid-4sn4zg3r>', "</span> </div> </div> <!-- Article Image --> ", ' </div> </article> <!-- Article Content --> <section class="py-20 bg-gradient-to-b from-gray-50 to-white" data-astro-cid-4sn4zg3r> <div class="max-w-5xl mx-auto px-6" data-astro-cid-4sn4zg3r> <div class="grid grid-cols-1 lg:grid-cols-4 gap-12" data-astro-cid-4sn4zg3r> <!-- Main Content --> <div class="lg:col-span-3" data-astro-cid-4sn4zg3r> <div class="blog-content max-w-none" data-astro-cid-4sn4zg3r data-astro-cid-4sn4zg3r> ', ' </div> <!-- Article Tags --> <div class="mt-12 pt-8 border-t border-gray-200" data-astro-cid-4sn4zg3r> <div class="flex flex-wrap gap-3" data-astro-cid-4sn4zg3r> <span class="text-sm font-medium text-gray-600 mb-3 w-full" data-astro-cid-4sn4zg3r>Tags:</span> ', ' </div> </div> <!-- Related Posts --> <div class="mt-12" data-astro-cid-4sn4zg3r> ', ' </div> </div> <!-- Sidebar --> <div class="lg:col-span-1" data-astro-cid-4sn4zg3r> <div class="sticky top-8 space-y-8" data-astro-cid-4sn4zg3r> <!-- Author Card --> <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100" data-astro-cid-4sn4zg3r> <div class="flex items-center mb-4" data-astro-cid-4sn4zg3r> <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4" data-astro-cid-4sn4zg3r> ', ' </div> <div data-astro-cid-4sn4zg3r> <h4 class="font-bold text-gray-900" data-astro-cid-4sn4zg3r>', `</h4> <p class="text-sm text-gray-600" data-astro-cid-4sn4zg3r>Web Developer</p> </div> </div> <p class="text-sm text-gray-700 leading-relaxed" data-astro-cid-4sn4zg3r>
Web developer helping businesses grow online with professional websites and web applications.
</p> </div> </div> </div> </div> </div> </section> <!-- CTA Section --> <section class="py-20 bg-gradient-to-r from-slate-900 to-blue-900" data-astro-cid-4sn4zg3r> <div class="max-w-4xl mx-auto text-center px-6" data-astro-cid-4sn4zg3r> <div class="cta-content" data-astro-cid-4sn4zg3r> <h2 class="text-4xl md:text-5xl font-bold text-white mb-6" data-astro-cid-4sn4zg3r>
Ready to Elevate Your Web Presence?
</h2> <p class="text-xl text-blue-200 mb-8 leading-relaxed" data-astro-cid-4sn4zg3r>
Let's discuss how we can help bring your vision to life with a website that truly represents your business.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-4sn4zg3r> <a href="/contact" class="magnetic-button px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105" data-astro-cid-4sn4zg3r>
Start Your Project
</a> <a href="/blog" class="magnetic-button px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300" data-astro-cid-4sn4zg3r>
See More Posts
</a> </div> </div> </div> </section> </main> `])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${siteUrl}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${siteUrl}/blog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.data.title,
        "item": `${siteUrl}/blog/${post.slug}`
      }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.data.title,
    "author": {
      "@type": "Person",
      "name": post.data.author
    },
    "datePublished": post.data.date,
    "dateModified": post.data.dateModified || post.data.date,
    "image": post.data.image ? `${siteUrl}${post.data.image}` : `${siteUrl}/og-image.jpg`,
    "publisher": {
      "@type": "Organization",
      "name": "Shoreline Web Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/favicon.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`
    }
  })), maybeRenderHead(), renderComponent($$result2, "Navigation", $$Navigation, { "currentPage": "blog", "data-astro-cid-4sn4zg3r": true }), post.data.title, post.data.author.charAt(0), post.data.author, addAttribute(post.data.date, "datetime"), new Date(post.data.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), readingTimeText, post.data.image && renderTemplate`<div class="mb-10" data-astro-cid-4sn4zg3r> <img${addAttribute(post.data.image, "src")}${addAttribute(`Featured image for ${post.data.title} - ${post.data.author}'s article on web development and digital marketing`, "alt")} class="w-full max-w-3xl mx-auto h-auto rounded-lg shadow-lg" loading="eager" data-astro-cid-4sn4zg3r> </div>`, renderComponent($$result2, "Content", Content, { "data-astro-cid-4sn4zg3r": true }), post.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${createTagSlug(tag)}`, "href")} class="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-md" data-astro-cid-4sn4zg3r> ${tag} </a>`), renderComponent($$result2, "RelatedPosts", $$RelatedPosts, { "currentPost": post, "limit": 3, "showTags": true, "data-astro-cid-4sn4zg3r": true }), post.data.author.charAt(0), post.data.author) })} `;
}, "/Users/rtarasevich/shoreline-web-solutions/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/rtarasevich/shoreline-web-solutions/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
