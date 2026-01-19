import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for SMSIndia Blog - Rules and guidelines for using our website',
};

export default function TermsPage() {
  return (
    <div className="container">
      <div className="static-page">
        <h1>Terms of Service</h1>
        <p><strong>Last Updated:</strong> January 19, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using SMSIndia Blog, you accept and agree to be bound by these Terms of Service.
          If you do not agree to these terms, please do not use our website.
        </p>

        <h2>2. Use of Website</h2>
        <p>You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use of the website.</p>

        <h2>3. Content Ownership and Copyright</h2>
        <p>
          All content on SMSIndia Blog, including text, graphics, logos, and images, is the property of SMSIndia Blog
          or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create
          derivative works without our express written permission.
        </p>

        <h2>4. User Responsibilities</h2>
        <p>When using our website, you agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Not engage in any activity that disrupts or interferes with the website</li>
          <li>Not attempt to gain unauthorized access to any part of the website</li>
          <li>Not use automated systems or software to extract data from the website</li>
        </ul>

        <h2>5. Third-Party Content and Links</h2>
        <p>
          Our website may contain links to third-party websites or services. We are not responsible for the content,
          accuracy, or practices of these external sites. Your use of third-party websites is at your own risk.
        </p>

        <h2>6. Advertisements</h2>
        <p>
          We display advertisements through Google AdSense. Advertisers are responsible for ensuring their ads comply
          with applicable laws. We do not endorse or guarantee any products or services advertised on our site.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          This website is provided &quot;as is&quot; without any warranties, express or implied. We do not warrant that the
          website will be uninterrupted, error-free, or free from viruses or other harmful components.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          SMSIndia Blog and its owners shall not be liable for any direct, indirect, incidental, consequential, or
          punitive damages arising from your use of or inability to use the website.
        </p>

        <h2>9. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless SMSIndia Blog from any claims, damages, losses, or expenses
          arising from your use of the website or violation of these terms.
        </p>

        <h2>10. Content Accuracy</h2>
        <p>
          We strive to provide accurate and up-to-date information, but we make no guarantees regarding the accuracy,
          completeness, or reliability of any content on this website.
        </p>

        <h2>11. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
          upon posting. Your continued use of the website constitutes acceptance of the modified terms.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with the laws of India.
        </p>

        <h2>13. Contact Information</h2>
        <p>
          If you have questions about these Terms of Service, please contact us through our{' '}
          <a href="/contact">Contact Page</a>.
        </p>
      </div>
    </div>
  );
}
