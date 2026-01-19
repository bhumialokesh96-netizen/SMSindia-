import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { formatDate, calculateReadingTime } from "@/lib/utils";
import { InArticleAd } from "@/components/AdUnit";
import type { Metadata } from "next";

// Generate static params for all posts (SSG)
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Enable ISR with revalidation
export const revalidate = 86400; // Revalidate once per day

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags?.join(", "),
    authors: post.author ? [{ name: post.author }] : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = post.content ? calculateReadingTime(post.content) : 0;

  return (
    <article className="max-w-4xl mx-auto">
      {/* Article Header */}
      <header className="mb-8">
        <div className="mb-4">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.author && <span>By {post.author}</span>}
          {readingTime > 0 && <span>{readingTime} min read</span>}
        </div>

        {post.category && (
          <div className="mt-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">
              {post.category}
            </span>
          </div>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Ad Unit - Top of Article */}
      <InArticleAd slot="article-top" />

      {/* Article Content */}
      <div 
        className="prose prose-lg max-w-none mb-8"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />

      {/* Ad Unit - Bottom of Article */}
      <InArticleAd slot="article-bottom" />

      {/* Related Content */}
      <div className="mt-12 pt-8 border-t">
        <h2 className="text-2xl font-bold mb-4">Continue Reading</h2>
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          View All Articles →
        </Link>
      </div>
    </article>
  );
}
