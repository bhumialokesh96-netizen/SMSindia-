import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs, getRelatedPosts } from '@/lib/posts';
import { formatDate, getReadingTime } from '@/lib/utils/formatters';
import BlogCard from '@/components/BlogCard';
import AdSense from '@/components/AdSense';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all posts (SSG)
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

// ISR: Revalidate every hour
export const revalidate = 3600;

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);
  const readingTime = getReadingTime(post.content);

  return (
    <div className="container">
      <article className="blog-post">
        <header className="blog-post-header">
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{readingTime}</span>
            <span>•</span>
            <span className="blog-card-category" style={{ padding: '0.25rem 0.75rem', borderRadius: '4px' }}>
              {post.category}
            </span>
          </div>
        </header>

        {/* Top Ad - After header, before content */}
        <AdSense slot="1234567890" className="blog-ad-top" />

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Bottom Ad - After content */}
        <AdSense slot="0987654321" className="blog-ad-bottom" />

        <div className="blog-card-tags" style={{ marginTop: '2rem' }}>
          {post.tags.map((tag) => (
            <span key={tag} className="blog-card-tag">
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="blog-grid">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
