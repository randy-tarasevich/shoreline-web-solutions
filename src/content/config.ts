import { defineCollection, z } from "astro:content";

const posts = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		author: z.string(),
		date: z.string(),
		dateModified: z.string().optional(),
		description: z.string().optional(),
		image: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	posts,
};
