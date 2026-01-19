import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for SMS India Blog - Rules and guidelines for using our website",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto prose prose-lg">
      <h1>Terms of Service</h1>
      
      <p className="text-gray-600">
        <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using SMS India Blog ("the Website"), you accept and agree to be
        bound by these Terms of Service. If you do not agree to these terms, please do not
        use the Website.
      </p>

      <h2>2. Use of Website</h2>
      <p>
        You agree to use the Website only for lawful purposes and in accordance with these
        Terms. You must not:
      </p>
      <ul>
        <li>Use the Website in any way that violates applicable laws or regulations</li>
        <li>Attempt to gain unauthorized access to any part of the Website</li>
        <li>Interfere with or disrupt the Website or servers</li>
        <li>Use any automated system to access the Website without permission</li>
        <li>Engage in any activity that could harm the Website or its users</li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        All content on the Website, including text, images, graphics, logos, and software,
        is the property of SMS India Blog or its content suppliers and is protected by
        copyright and other intellectual property laws.
      </p>
      <p>
        You may not reproduce, distribute, modify, or create derivative works from any
        content without explicit written permission.
      </p>

      <h2>4. User Content</h2>
      <p>
        If you submit comments, feedback, or other content to the Website, you grant us a
        non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and
        display such content.
      </p>

      <h2>5. Third-Party Links</h2>
      <p>
        The Website may contain links to third-party websites. We are not responsible for
        the content, accuracy, or practices of these external sites. Access to third-party
        websites is at your own risk.
      </p>

      <h2>6. Advertising</h2>
      <p>
        The Website displays advertisements through Google AdSense and other advertising
        networks. We are not responsible for the content of advertisements or any products
        or services advertised.
      </p>

      <h2>7. Disclaimer of Warranties</h2>
      <p>
        The Website is provided "as is" without warranties of any kind, either express or
        implied. We do not guarantee that:
      </p>
      <ul>
        <li>The Website will be available at all times</li>
        <li>The content is accurate, complete, or up-to-date</li>
        <li>The Website will be free from errors or viruses</li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, SMS India Blog shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages arising from your
        use of the Website.
      </p>

      <h2>9. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless SMS India Blog from any claims, losses,
        damages, or expenses (including legal fees) arising from your use of the Website
        or violation of these Terms.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms of Service at any time. Changes will be
        effective immediately upon posting. Your continued use of the Website constitutes
        acceptance of the modified terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India,
        without regard to its conflict of law provisions.
      </p>

      <h2>12. Contact Information</h2>
      <p>
        For questions about these Terms of Service, please contact us through our{" "}
        <a href="/contact">Contact Page</a>.
      </p>

      <h2>13. Severability</h2>
      <p>
        If any provision of these Terms is found to be unenforceable, the remaining
        provisions will continue in full force and effect.
      </p>

      <h2>14. Entire Agreement</h2>
      <p>
        These Terms of Service constitute the entire agreement between you and SMS India
        Blog regarding your use of the Website.
      </p>
    </div>
  );
}
