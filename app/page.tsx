import { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import { getSortedPostsMetadata } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Latest SMS, telecommunications, and technology trends in India. Expert insights, guides, and industry news.',
};

export default function HomePage() {
  const posts = getSortedPostsMetadata();
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);
  const recentPosts = posts.slice(0, 6);

  return (
    <div className="container">
      <section className="hero">
        <h1>Welcome to SMSIndia Blog</h1>
        <p>
          Your trusted source for the latest trends in SMS, telecommunications,
          and digital technology across India
        </p>
      </section>

      {featuredPosts.length > 0 && (
        <section>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>
            Featured Articles
          </h2>
          <div className="blog-grid">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 600 }}>
          Latest Articles
        </h2>
        <div className="blog-grid">
          {recentPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
