import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for SMS India Blog - How we handle your data and privacy",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto prose prose-lg">
      <h1>Privacy Policy</h1>
      
      <p className="text-gray-600">
        <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        SMS India Blog is committed to protecting your privacy. This Privacy Policy explains
        how we collect, use, and safeguard information when you visit our website.
      </p>

      <h3>1.1 Automatically Collected Information</h3>
      <p>
        When you visit our website, we automatically collect certain information about your
        device, including:
      </p>
      <ul>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>IP address</li>
        <li>Pages visited and time spent on pages</li>
        <li>Referring website</li>
      </ul>

      <h3>1.2 Cookies and Tracking Technologies</h3>
      <p>
        We use cookies and similar tracking technologies to enhance your browsing experience
        and analyze site traffic. You can control cookie preferences through your browser
        settings.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information to:</p>
      <ul>
        <li>Improve our website and content</li>
        <li>Analyze user behavior and preferences</li>
        <li>Display relevant advertisements</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Google AdSense</h2>
      <p>
        We use Google AdSense to display advertisements on our website. Google AdSense uses
        cookies to serve ads based on your prior visits to our website or other websites.
        You can opt out of personalized advertising by visiting{" "}
        <a
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads Settings
        </a>
        .
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for
        the privacy practices of these external sites. We encourage you to review their
        privacy policies.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement appropriate security measures to protect your information. However,
        no method of transmission over the internet is 100% secure.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        Our website is not intended for children under 13 years of age. We do not knowingly
        collect personal information from children under 13.
      </p>

      <h2>7. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on
        this page with an updated revision date.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us through our{" "}
        <a href="/contact">Contact Page</a>.
      </p>

      <h2>9. Your Rights</h2>
      <p>
        Depending on your location, you may have certain rights regarding your personal
        information, including:
      </p>
      <ul>
        <li>The right to access your personal data</li>
        <li>The right to rectify inaccurate data</li>
        <li>The right to request deletion of your data</li>
        <li>The right to object to data processing</li>
      </ul>

      <h2>10. Compliance</h2>
      <p>
        This Privacy Policy complies with applicable data protection laws and Google AdSense
        program policies.
      </p>
    </div>
  );
}
