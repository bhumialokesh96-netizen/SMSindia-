import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { AdUnit } from "@/components/AdUnit";

export const revalidate = 3600; // Revalidate every hour (ISR)

export default async function Home() {
  const posts = await getAllPosts();
  
  // Get featured posts (first 3)
  const featuredPosts = posts.slice(0, 3);
  const recentPosts = posts.slice(3, 9);

  return (
    <div>
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
          Welcome to SMS India Blog
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Your trusted source for the latest news, technology trends, and insights from India.
        </p>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      {post.category && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {post.category}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* AdSense Unit */}
      <AdUnit slot="homepage-top" />

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <article
                key={post.slug}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      {post.category && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {post.category}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* View All Posts Link */}
      <div className="text-center">
        <Link
          href="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Articles
        </Link>
      </div>
    </div>
  );
}
