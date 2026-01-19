import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SMS India Blog team",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="prose prose-lg">
        <p className="text-xl text-gray-600 mb-8">
          We'd love to hear from you! Whether you have questions, feedback, or suggestions,
          feel free to reach out to us.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 mt-0">Get in Touch</h2>
          <p>
            For general inquiries, feedback, or content suggestions, please send us an email:
          </p>
          <p className="text-lg font-medium text-blue-600">
            contact@smsindiabolag.com
          </p>
        </div>

        <h2>Content Submissions</h2>
        <p>
          Interested in contributing to SMS India Blog? We're always looking for quality
          content related to:
        </p>
        <ul>
          <li>Technology trends in India</li>
          <li>Business and startup news</li>
          <li>Digital transformation</li>
          <li>Industry insights and analysis</li>
        </ul>
        <p>
          Please send your content proposals with a brief outline to our editorial team.
        </p>

        <h2>Advertising Inquiries</h2>
        <p>
          For advertising opportunities and partnerships, please include "Advertising" in
          your email subject line.
        </p>

        <h2>Technical Support</h2>
        <p>
          If you're experiencing technical issues with the website, please describe the
          problem in detail, including:
        </p>
        <ul>
          <li>Your browser and version</li>
          <li>Operating system</li>
          <li>Steps to reproduce the issue</li>
          <li>Any error messages you received</li>
        </ul>

        <h2>Privacy and Legal</h2>
        <p>
          For privacy concerns or legal matters, please reference our{" "}
          <a href="/privacy">Privacy Policy</a> and{" "}
          <a href="/terms">Terms of Service</a> pages. For specific inquiries, contact us
          with "Legal" in the subject line.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold mb-3 mt-0">Response Time</h3>
          <p className="mb-0">
            We strive to respond to all inquiries within 48 hours during business days.
            Thank you for your patience.
          </p>
        </div>
      </div>
    </div>
  );
}
