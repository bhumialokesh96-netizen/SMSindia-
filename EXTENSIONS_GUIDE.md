# Extension Guide - SMS India Blog

This guide provides detailed examples for extending the SMS India Blog platform with additional features.

## Table of Contents

- [Adding Category Pages](#adding-category-pages)
- [Implementing Search](#implementing-search)
- [Adding Related Posts](#adding-related-posts)
- [Newsletter Integration](#newsletter-integration)
- [Social Share Buttons](#social-share-buttons)
- [Analytics Integration](#analytics-integration)
- [Comment System](#comment-system)
- [RSS Feed](#rss-feed)
- [Advanced SEO](#advanced-seo)
- [Performance Monitoring](#performance-monitoring)

## Adding Category Pages

Create dynamic category pages to organize content by topic.

### 1. Create Category Route

Create `app/category/[slug]/page.tsx`:

```typescript
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostsByCategory, getAllCategories } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${categoryName} Articles`,
    description: `Browse all articles in the ${categoryName} category`,
  };
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  const posts = await getPostsByCategory(categoryName);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">{categoryName}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="border rounded-lg p-6">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <time className="text-sm text-gray-500">
                {formatDate(post.date)}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
```

### 2. Add Category Links to Components

Update `components/Header.tsx` to include category navigation:

```typescript
<nav>
  <Link href="/category/technology">Technology</Link>
  <Link href="/category/business">Business</Link>
  <Link href="/category/general">General</Link>
</nav>
```

## Implementing Search

Add search functionality to help users find content.

### 1. Create Search API Route

Create `app/api/search/route.ts`:

```typescript
import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/posts";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q")?.toLowerCase() || "";

    if (!query) {
      return NextResponse.json({ results: [] });
    }

    const allPosts = await getAllPosts();
    const results = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
        post.category?.toLowerCase().includes(query)
    );

    return NextResponse.json({ results });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}
```

### 2. Create Search Component

Create `components/Search.tsx`:

```typescript
"use client";

import { useState } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface SearchResult {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
}

export function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
      />
      
      {isLoading && (
        <div className="absolute mt-2 p-4 bg-white border rounded-lg shadow-lg">
          Searching...
        </div>
      )}
      
      {!isLoading && results.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
          {results.map((result) => (
            <Link
              key={result.slug}
              href={`/blog/${result.slug}`}
              className="block p-4 hover:bg-gray-50 border-b last:border-b-0"
              onClick={() => setResults([])}
            >
              <h3 className="font-semibold">{result.title}</h3>
              <p className="text-sm text-gray-600">{result.excerpt}</p>
              <time className="text-xs text-gray-500">{formatDate(result.date)}</time>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
```

### 3. Add to Header

Update `components/Header.tsx`:

```typescript
import { Search } from "./Search";

// In the header component
<Search />
```

## Adding Related Posts

Show related posts at the end of each article.

### 1. Create Related Posts Function

Add to `lib/posts.ts`:

```typescript
export async function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): Promise<PostData[]> {
  const currentPost = await getPostBySlug(currentSlug);
  if (!currentPost) return [];

  const allPosts = await getAllPosts();
  
  // Filter out current post and score by similarity
  const scored = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      
      // Same category
      if (post.category === currentPost.category) score += 3;
      
      // Shared tags
      const sharedTags = post.tags?.filter((tag) =>
        currentPost.tags?.includes(tag)
      ).length || 0;
      score += sharedTags * 2;
      
      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);

  return scored;
}
```

### 2. Use in Blog Post Page

Update `app/blog/[slug]/page.tsx`:

```typescript
import { getRelatedPosts } from "@/lib/posts";

// In the component
const relatedPosts = await getRelatedPosts(slug, 3);

// Add before closing article tag
{relatedPosts.length > 0 && (
  <div className="mt-12 pt-8 border-t">
    <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {relatedPosts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          <h3 className="font-semibold mb-2">{post.title}</h3>
          <p className="text-sm text-gray-600">{post.excerpt}</p>
        </Link>
      ))}
    </div>
  </div>
)}
```

## Newsletter Integration

Integrate email newsletter subscription.

### 1. Create Newsletter Component

Create `components/Newsletter.tsx`:

```typescript
"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Replace with your email service API
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Newsletter error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
      <p className="text-gray-600 mb-4">
        Get the latest articles delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-2 border rounded-lg"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      
      {status === "success" && (
        <p className="mt-2 text-green-600">Successfully subscribed!</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-red-600">Failed to subscribe. Try again.</p>
      )}
    </div>
  );
}
```

### 2. Create Newsletter API Route

Create `app/api/newsletter/route.ts`:

```typescript
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Example: Mailchimp integration
    // const response = await fetch(
    //   `https://us1.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    //   {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email_address: email,
    //       status: "subscribed",
    //     }),
    //   }
    // );

    // Placeholder success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
```

## Social Share Buttons

Add social sharing functionality.

### Create Share Component

Create `components/ShareButtons.tsx`:

```typescript
"use client";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={shareOnTwitter}
        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500"
      >
        Twitter
      </button>
      <button
        onClick={shareOnFacebook}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Facebook
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
      >
        LinkedIn
      </button>
      <button
        onClick={copyToClipboard}
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
      >
        Copy Link
      </button>
    </div>
  );
}
```

Use in blog post page:

```typescript
import { ShareButtons } from "@/components/ShareButtons";

// In the component
<ShareButtons 
  title={post.title} 
  url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`} 
/>
```

## Analytics Integration

Add Google Analytics or similar.

### 1. Create Analytics Component

Create `components/Analytics.tsx`:

```typescript
import Script from "next/script";

export function Analytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
```

### 2. Add to Layout

Update `app/layout.tsx`:

```typescript
import { Analytics } from "@/components/Analytics";

// In the component
<body>
  <Analytics />
  {/* rest of content */}
</body>
```

## Comment System

Integrate comments using giscus (GitHub Discussions).

### 1. Install giscus Component

Create `components/Comments.tsx`:

```typescript
"use client";

import { useEffect, useRef } from "react";

export function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "your-username/your-repo");
    script.setAttribute("data-repo-id", "your-repo-id");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "your-category-id");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");
    script.crossOrigin = "anonymous";
    script.async = true;

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
```

### 2. Add to Blog Posts

Update `app/blog/[slug]/page.tsx`:

```typescript
import { Comments } from "@/components/Comments";

// Add at the end of article
<Comments />
```

## RSS Feed

Generate RSS feed for your blog.

### Create RSS Route

Create `app/feed.xml/route.ts`:

```typescript
import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = await getAllPosts();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://smsindia-blog.vercel.app";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SMS India Blog</title>
    <link>${siteUrl}</link>
    <description>Latest news, technology trends, and insights from India</description>
    <language>en</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${post.title}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description>${post.excerpt}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/blog/${post.slug}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
```

Add RSS link to layout:

```typescript
<link 
  rel="alternate" 
  type="application/rss+xml" 
  title="RSS Feed" 
  href="/feed.xml" 
/>
```

## Advanced SEO

Add structured data (JSON-LD).

### Create SEO Component

Create `components/StructuredData.tsx`:

```typescript
interface StructuredDataProps {
  type: "Article" | "WebSite";
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

Use in blog posts:

```typescript
<StructuredData
  type="Article"
  data={{
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author || "SMS India Team",
    },
    publisher: {
      "@type": "Organization",
      name: "SMS India Blog",
    },
  }}
/>
```

## Performance Monitoring

Add Web Vitals monitoring.

### Create Web Vitals Reporter

Create `app/web-vitals.tsx`:

```typescript
"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Send to analytics
    console.log(metric);
    
    // Example: Send to Google Analytics
    if (window.gtag) {
      window.gtag("event", metric.name, {
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  return null;
}
```

Add to layout:

```typescript
import { WebVitals } from "./web-vitals";

// In body
<WebVitals />
```

## Conclusion

These extensions demonstrate how to enhance the SMS India Blog platform with additional features while maintaining performance and SEO optimization. Each extension can be customized further based on your specific requirements.

For more ideas and best practices, refer to the main [README.md](./README.md) and [Next.js documentation](https://nextjs.org/docs).
