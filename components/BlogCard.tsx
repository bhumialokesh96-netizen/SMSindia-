import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils/formatters';
import { PostMetadata } from '@/lib/posts';

interface BlogCardProps {
  post: PostMetadata;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="blog-card">
      <Link href={`/blog/${post.slug}`} className="blog-card-link">
        {post.image && (
          <div className="blog-card-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.image} alt={post.title} loading="lazy" />
          </div>
        )}
        <div className="blog-card-content">
          <div className="blog-card-meta">
            <span className="blog-card-category">{post.category}</span>
            <span className="blog-card-date">{formatDate(post.date)}</span>
          </div>
          <h2 className="blog-card-title">{post.title}</h2>
          <p className="blog-card-description">{post.description}</p>
          <div className="blog-card-tags">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="blog-card-tag">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
