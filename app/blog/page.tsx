import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">All Articles</h1>
      
      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">No articles published yet.</p>
          <p className="text-gray-500">Check back soon for new content!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
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
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
