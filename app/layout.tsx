import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://smsindia.vercel.app'),
  title: {
    default: 'SMSIndia Blog - Latest SMS, Telecom & Tech Trends in India',
    template: '%s | SMSIndia Blog',
  },
  description: 'Stay updated with the latest SMS, telecommunications, and technology trends in India. Expert insights, guides, and industry news.',
  keywords: ['SMS India', 'telecom India', 'technology trends', 'mobile technology', 'digital India', 'telecommunications'],
  authors: [{ name: 'SMSIndia Team' }],
  creator: 'SMSIndia Blog',
  publisher: 'SMSIndia Blog',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'SMSIndia Blog',
    title: 'SMSIndia Blog - Latest SMS, Telecom & Tech Trends in India',
    description: 'Stay updated with the latest SMS, telecommunications, and technology trends in India.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMSIndia Blog - Latest SMS, Telecom & Tech Trends in India',
    description: 'Stay updated with the latest SMS, telecommunications, and technology trends in India.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script - Only load if configured */}
        {adsenseId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>
        <div className="app-container">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
