import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_DuAHye_n.mjs';
export { renderers } from '../renderers.mjs';

const GET = async (context) => {
	const posts = await getCollection("posts");
	const siteUrl = context.site?.href || "https://shorelinewebsolutions.com";

	// Ensure we have posts
	if (!posts || posts.length === 0) {
		return new Response("No posts found", { status: 404 });
	}

	// Sort posts by date (newest first)
	const sortedPosts = posts.sort((a, b) => {
		return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
	});

	// Build RSS items - ensure all required fields are present
	const items = [];

	for (const post of sortedPosts) {
		if (!post.data.title || !post.data.date) {
			continue; // Skip invalid posts
		}

		const pubDate = new Date(post.data.date);

		// Validate date
		if (isNaN(pubDate.getTime())) {
			console.warn(`Invalid date for post: ${post.slug}, skipping`);
			continue;
		}

		const link = `${siteUrl}/blog/${post.slug}/`;
		const title = String(post.data.title).trim();
		const description = String(
			`Read ${title} by ${post.data.author} on Shoreline Web Solutions blog.`,
		);

		const item = {
			title: title,
			pubDate: pubDate,
			description: description,
			link: link,
		};

		// Add enclosure if image exists (RSS schema requires url, length, and type)
		if (post.data.image) {
			item.enclosure = {
				url: post.data.image.startsWith("http")
					? post.data.image
					: `${siteUrl}${post.data.image}`,
				length: 0, // Length in bytes - set to 0 if unknown
				type: "image/jpeg",
			};
		}

		items.push(item);
	}

	return rss({
		title: "Shoreline Web Solutions Blog",
		description:
			"Professional web development insights, tips, and updates for businesses.",
		site: siteUrl,
		items: items,
		customData: `<language>en-us</language>`,
	});
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
