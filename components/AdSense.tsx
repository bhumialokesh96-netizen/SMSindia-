'use client';

import { useEffect } from 'react';

interface AdSenseProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

/**
 * Google AdSense Component
 * Compliant with AdSense policies:
 * - Non-intrusive placement
 * - Clearly labeled as advertisement
 * - Responsive design
 * - No excessive ads per page
 */
export default function AdSense({ 
  slot, 
  format = 'auto', 
  responsive = true,
  className = ''
}: AdSenseProps) {
  useEffect(() => {
    try {
      // Only load ads if AdSense ID is configured
      if (process.env.NEXT_PUBLIC_ADSENSE_ID) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Don't render if AdSense ID is not configured
  if (!process.env.NEXT_PUBLIC_ADSENSE_ID) {
    return null;
  }

  return (
    <div className={`adsense-container ${className}`}>
      <div className="adsense-label">Advertisement</div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}
