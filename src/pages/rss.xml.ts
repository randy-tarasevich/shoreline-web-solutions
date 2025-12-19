import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
	const posts = await getCollection('posts');
	const siteUrl = context.site?.href || 'https://shorelinewebsolutions.com';

	// Sort posts by date (newest first)
	const sortedPosts = posts.sort((a, b) => {
		return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
	});

	return rss({
		title: 'Shoreline Web Solutions Blog',
		description: 'Professional web development insights, tips, and updates for Connecticut businesses.',
		site: siteUrl,
		items: sortedPosts.map((post) => ({
			title: post.data.title,
			pubDate: new Date(post.data.date),
			description: post.data.description || `Read ${post.data.title} on Shoreline Web Solutions blog.`,
			link: `${siteUrl}/blog/${post.slug}/`,
			author: post.data.author,
			...(post.data.image && {
				enclosure: {
					url: post.data.image.startsWith('http') 
						? post.data.image 
						: `${siteUrl}${post.data.image}`,
					type: 'image/jpeg',
				},
			}),
		})),
		customData: `<language>en-us</language>`,
	});
};

