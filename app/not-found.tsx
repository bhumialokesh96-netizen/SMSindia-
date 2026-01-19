import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="container">
      <div className="static-page" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: '6rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
          404
        </h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              backgroundColor: 'var(--primary-color)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: 'var(--border-radius)',
              fontWeight: 500,
              transition: 'background-color 0.2s',
            }}
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '0.75rem 2rem',
              border: '2px solid var(--primary-color)',
              color: 'var(--primary-color)',
              textDecoration: 'none',
              borderRadius: 'var(--border-radius)',
              fontWeight: 500,
              transition: 'all 0.2s',
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
