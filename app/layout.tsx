import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SMS India Blog - Latest News, Tech & Trends",
    template: "%s | SMS India Blog"
  },
  description: "Stay updated with the latest news, technology trends, and insights from India. Your trusted source for quality content.",
  keywords: ["India", "news", "technology", "trends", "blog", "SMS"],
  authors: [{ name: "SMS India Team" }],
  creator: "SMS India",
  publisher: "SMS India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://smsindia-blog.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "SMS India Blog",
    title: "SMS India Blog - Latest News, Tech & Trends",
    description: "Stay updated with the latest news, technology trends, and insights from India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMS India Blog",
    description: "Stay updated with the latest news, technology trends, and insights from India.",
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense - Add your AdSense code here */}
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
