import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about SMS India Blog and our mission",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About SMS India Blog</h1>
      
      <div className="prose prose-lg">
        <p className="text-xl text-gray-600 mb-8">
          SMS India Blog is your trusted source for the latest news, technology trends,
          and insights from India.
        </p>

        <h2>Our Mission</h2>
        <p>
          We are committed to delivering high-quality, SEO-optimized content that keeps
          our readers informed about the most important developments in technology,
          business, and digital transformation across India.
        </p>

        <h2>What We Cover</h2>
        <p>Our content focuses on several key areas:</p>
        <ul>
          <li>
            <strong>Technology Trends:</strong> Latest developments in AI, cloud computing,
            5G, and emerging technologies
          </li>
          <li>
            <strong>Digital India:</strong> Coverage of India's digital transformation
            initiatives and their impact
          </li>
          <li>
            <strong>Startup Ecosystem:</strong> News and insights from India's thriving
            startup scene
          </li>
          <li>
            <strong>Business & Innovation:</strong> Analysis of business trends and
            innovative solutions
          </li>
          <li>
            <strong>Industry Analysis:</strong> Deep dives into various sectors and their
            evolution
          </li>
        </ul>

        <h2>Our Approach</h2>
        <p>
          We believe in the power of quality content. Every article published on SMS India
          Blog goes through a rigorous editorial process to ensure:
        </p>
        <ul>
          <li>Accuracy and factual correctness</li>
          <li>SEO optimization for maximum reach</li>
          <li>Engaging and accessible writing style</li>
          <li>Compliance with Google AdSense policies</li>
          <li>Value for our readers</li>
        </ul>

        <h2>Technology Stack</h2>
        <p>
          Our platform is built on cutting-edge technology to ensure optimal performance:
        </p>
        <ul>
          <li>
            <strong>Next.js 14+:</strong> React framework with App Router for optimal
            performance
          </li>
          <li>
            <strong>Static Site Generation (SSG):</strong> Pre-rendered pages for instant
            loading
          </li>
          <li>
            <strong>Incremental Static Regeneration (ISR):</strong> Fresh content without
            sacrificing performance
          </li>
          <li>
            <strong>Edge Caching:</strong> Content delivered from locations closest to
            our readers
          </li>
          <li>
            <strong>Markdown-Based Workflow:</strong> Git-backed content management for
            version control
          </li>
        </ul>

        <h2>Content Quality Standards</h2>
        <p>
          We maintain strict content quality standards to ensure compliance with Google
          AdSense policies:
        </p>
        <ul>
          <li>Original, well-researched content</li>
          <li>Proper attribution and citations</li>
          <li>Clear and transparent advertising</li>
          <li>User-first approach to content and design</li>
          <li>Regular content updates and improvements</li>
        </ul>

        <h2>Join Our Community</h2>
        <p>
          We're always looking to connect with readers, contributors, and partners who
          share our passion for quality content and innovation. Visit our{" "}
          <a href="/contact">Contact Page</a> to get in touch.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold mb-3 mt-0">Stay Updated</h3>
          <p className="mb-0">
            Visit our <a href="/blog">Blog</a> regularly to stay updated with the latest
            articles, trends, and insights from India's technology and business landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
