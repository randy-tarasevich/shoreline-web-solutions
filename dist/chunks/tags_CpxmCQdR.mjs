import { g as getCollection } from './_astro_content_DuAHye_n.mjs';

/**
 * Get all unique tags from all blog posts
 */
async function getAllTags() {
  const posts = await getCollection("posts");
  const tagMap = new Map();

  // Group posts by tag
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      if (!tagMap.has(tag)) {
        tagMap.set(tag, []);
      }
      tagMap.get(tag).push(post);
    });
  });

  // Convert to TagInfo array and sort by count (descending)
  return Array.from(tagMap.entries())
    .map(([name, posts]) => ({
      name,
      slug: createTagSlug(name),
      count: posts.length,
      posts: posts.sort(
        (a, b) =>
          new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
      ),
    }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Get posts filtered by a specific tag
 */
async function getPostsByTag(tagSlug) {
  const allTags = await getAllTags();
  const tag = allTags.find((t) => t.slug === tagSlug);

  if (!tag) {
    return { tag: null, posts: [] };
  }

  return {
    tag,
    posts: tag.posts,
  };
}

/**
 * Get related posts based on shared tags
 */
async function getRelatedPosts(currentPost, limit = 3) {
  const allPosts = await getCollection("posts");
  const currentTags = currentPost.data.tags;

  const relatedPosts = [];

  allPosts.forEach((post) => {
    if (post.slug === currentPost.slug) return; // Skip current post

    const sharedTags = post.data.tags.filter((tag) =>
      currentTags.includes(tag)
    );

    if (sharedTags.length > 0) {
      // Calculate relevance score based on number of shared tags
      const relevanceScore =
        sharedTags.length / Math.max(currentTags.length, post.data.tags.length);

      relatedPosts.push({
        post,
        sharedTags,
        relevanceScore,
      });
    }
  });

  // Sort by relevance score and return top results
  return relatedPosts
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, limit);
}

/**
 * Get popular tags (most used)
 */
async function getPopularTags(limit = 10) {
  const allTags = await getAllTags();
  return allTags.slice(0, limit);
}

/**
 * Create a URL-friendly slug from a tag name
 */
function createTagSlug(tagName) {
  return tagName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim();
}

/**
 * Get tag statistics for analytics
 */
async function getTagStats() {
  const allTags = await getAllTags();
  const allPosts = await getCollection("posts");

  const totalTags = allTags.length;
  const totalPosts = allPosts.length;
  const totalTagUsages = allPosts.reduce(
    (sum, post) => sum + post.data.tags.length,
    0
  );
  const averageTagsPerPost = totalPosts > 0 ? totalTagUsages / totalPosts : 0;

  const mostUsedTag = allTags.length > 0 ? allTags[0] : null;
  const leastUsedTag = allTags.length > 0 ? allTags[allTags.length - 1] : null;

  return {
    totalTags,
    totalPosts,
    averageTagsPerPost,
    mostUsedTag,
    leastUsedTag,
  };
}

export { getAllTags as a, getTagStats as b, createTagSlug as c, getRelatedPosts as d, getPopularTags as e, getPostsByTag as g };
