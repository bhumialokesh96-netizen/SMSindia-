import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the SMSIndia Blog team',
};

export default function ContactPage() {
  return (
    <div className="container">
      <div className="static-page">
        <h1>Contact Us</h1>
        
        <p>
          We&apos;d love to hear from you! Whether you have questions, feedback, or suggestions,
          feel free to reach out to us.
        </p>

        <h2>Get in Touch</h2>
        <p>
          For general inquiries, partnership opportunities, or content suggestions, please use
          the following methods to contact us:
        </p>

        <h2>Editorial Team</h2>
        <p>
          If you have story ideas, corrections, or would like to contribute content to SMSIndia Blog,
          our editorial team would be happy to hear from you.
        </p>

        <h2>Advertising Inquiries</h2>
        <p>
          For advertising opportunities and partnerships, please reach out with details about
          your proposal.
        </p>

        <h2>Technical Support</h2>
        <p>
          Experiencing issues with our website? Let us know, and we&apos;ll work to resolve them
          as quickly as possible.
        </p>

        <h2>Social Media</h2>
        <p>
          Follow us on social media for the latest updates, articles, and industry news:
        </p>
        <ul>
          <li>Twitter: @SMSIndiaBlog (coming soon)</li>
          <li>LinkedIn: SMSIndia Blog (coming soon)</li>
          <li>Facebook: SMSIndia Blog (coming soon)</li>
        </ul>

        <h2>Business Hours</h2>
        <p>
          We typically respond to inquiries within 24-48 hours during business days (Monday-Friday).
        </p>

        <h2>Mailing Address</h2>
        <p>
          SMSIndia Blog<br />
          Digital Content Division<br />
          India
        </p>

        <p style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--border-radius)' }}>
          <strong>Note:</strong> This is a content platform focused on providing information about SMS,
          telecommunications, and technology trends in India. We do not provide direct SMS services or
          technical support for mobile carriers.
        </p>
      </div>
    </div>
  );
}
