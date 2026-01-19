import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  category?: string;
  tags?: string[];
  author?: string;
  featured?: boolean;
}

// Ensure posts directory exists
function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export async function getAllPosts(): Promise<PostData[]> {
  ensurePostsDirectory();
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || data.description || "",
        category: data.category,
        tags: data.tags,
        author: data.author,
        featured: data.featured,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  ensurePostsDirectory();
  
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || data.description || "",
      content: contentHtml,
      category: data.category,
      tags: data.tags,
      author: data.author,
      featured: data.featured,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getPostsByCategory(category: string): Promise<PostData[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

export async function getPostsByTag(tag: string): Promise<PostData[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.tags?.includes(tag));
}

export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const categories = new Set<string>();
  allPosts.forEach((post) => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  return Array.from(categories);
}

export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const tags = new Set<string>();
  allPosts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags);
}
