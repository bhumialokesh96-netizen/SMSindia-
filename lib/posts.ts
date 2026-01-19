import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  image?: string;
}

export interface Post extends PostMetadata {
  content: string;
  contentHtml: string;
}

/**
 * Get all post slugs from the content directory
 */
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

/**
 * Get sorted posts metadata for listing pages
 */
export function getSortedPostsMetadata(): PostMetadata[] {
  const slugs = getAllPostSlugs();
  const allPostsData = slugs.map((slug) => {
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, `${slug}.md`),
      'utf8'
    );
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'SMSIndia Team',
      category: data.category || 'General',
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image || '',
    } as PostMetadata;
  });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Get a single post by slug with full content
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'SMSIndia Team',
      category: data.category || 'General',
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image || '',
      content,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get related posts based on tags and category
 */
export function getRelatedPosts(currentSlug: string, limit = 3): PostMetadata[] {
  const allPosts = getSortedPostsMetadata();
  const currentPost = allPosts.find((post) => post.slug === currentSlug);

  if (!currentPost) return [];

  // Find posts with matching tags or category
  const related = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      // Same category = +2 points
      if (post.category === currentPost.category) score += 2;
      // Matching tags = +1 point per tag
      const matchingTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      );
      score += matchingTags.length;
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);

  return related;
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): PostMetadata[] {
  return getSortedPostsMetadata().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const posts = getSortedPostsMetadata();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const posts = getSortedPostsMetadata();
  const tags = new Set(posts.flatMap((post) => post.tags));
  return Array.from(tags);
}
