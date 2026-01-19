import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for SMSIndia Blog - How we collect, use, and protect your information',
};

export default function PrivacyPage() {
  return (
    <div className="container">
      <div className="static-page">
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated:</strong> January 19, 2026</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to SMSIndia Blog. We respect your privacy and are committed to protecting your personal data.
          This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Automatically Collected Information:</strong> IP address, browser type, device information, pages visited, and time spent on pages</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to improve user experience and analyze site traffic</li>
          <li><strong>Google AdSense:</strong> Our advertising partner may use cookies and web beacons to serve relevant ads</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide and improve our content and services</li>
          <li>Analyze website usage and optimize user experience</li>
          <li>Display relevant advertisements through Google AdSense</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>4. Google AdSense and Advertising</h2>
        <p>
          We use Google AdSense to display advertisements on our site. Google may use cookies to serve ads based on your
          prior visits to our website or other websites. You can opt out of personalized advertising by visiting
          Google&apos;s <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
        </p>

        <h2>5. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices
          or content of these external sites. Please review their privacy policies before providing any information.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information. However, no method of transmission
          over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>7. Children&apos;s Privacy</h2>
        <p>
          Our website is not intended for children under 13 years of age. We do not knowingly collect personal
          information from children.
        </p>

        <h2>8. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of certain data collection practices</li>
        </ul>

        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on this page with an updated
          revision date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have questions about this privacy policy, please contact us through our{' '}
          <a href="/contact">Contact Page</a>.
        </p>
      </div>
    </div>
  );
}
