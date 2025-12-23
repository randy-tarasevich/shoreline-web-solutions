/**
 * Calculate reading time for blog post content
 * @param content - The blog post content (markdown or HTML)
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Estimated reading time in minutes
 */
export function calculateReadingTime(content: string, wordsPerMinute: number = 200): number {
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
export function formatReadingTime(minutes: number): string {
	return `${minutes} min read`;
}



