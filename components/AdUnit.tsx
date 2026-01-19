"use client";

/**
 * AdUnit Component
 * 
 * Google AdSense compliant ad unit component.
 * 
 * Usage:
 * <AdUnit slot="homepage-top" />
 * 
 * Requirements for Google AdSense:
 * 1. Set NEXT_PUBLIC_ADSENSE_ID in environment variables
 * 2. Ensure ad units are not obstructed or hidden
 * 3. Maintain proper spacing around ads
 * 4. Follow AdSense policies for content quality
 * 5. Ensure ads are visible and not below the fold initially
 */

interface AdUnitProps {
  slot: string;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  responsive?: boolean;
  className?: string;
}

export function AdUnit({ 
  slot, 
  format = "auto", 
  responsive = true,
  className = "" 
}: AdUnitProps) {
  // Only render if AdSense ID is configured
  if (!process.env.NEXT_PUBLIC_ADSENSE_ID) {
    return (
      <div className={`ad-container ${className}`}>
        <p className="text-gray-500 text-sm">
          Advertisement Space
          <br />
          <span className="text-xs">Configure NEXT_PUBLIC_ADSENSE_ID to display ads</span>
        </p>
      </div>
    );
  }

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
}

/**
 * In-Article Ad Unit
 * Optimized for placement within blog content
 */
export function InArticleAd({ slot }: { slot: string }) {
  return (
    <div className="my-8">
      <AdUnit slot={slot} format="auto" responsive={true} />
    </div>
  );
}

/**
 * Sidebar Ad Unit
 * Optimized for sidebar placement
 */
export function SidebarAd({ slot }: { slot: string }) {
  return (
    <div className="sticky top-20">
      <AdUnit slot={slot} format="vertical" responsive={false} />
    </div>
  );
}
