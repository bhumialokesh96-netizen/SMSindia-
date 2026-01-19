import { NextResponse } from "next/server";
import { fetchIndiaTrends, generateContentDraft } from "@/lib/trending";

/**
 * API Route: Trending Content Pipeline
 * 
 * GET /api/trends
 * Fetches trending topics from India and generates content drafts
 * 
 * Query Parameters:
 * - limit: Number of trends to fetch (default: 10)
 * 
 * Response:
 * {
 *   trends: TrendingTopic[],
 *   drafts: ContentDraft[]
 * }
 * 
 * Usage:
 * fetch('/api/trends?limit=5')
 *   .then(res => res.json())
 *   .then(data => console.log(data));
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    // Fetch trending topics
    const trends = await fetchIndiaTrends(limit);

    // Generate content drafts
    const drafts = trends.map((trend) => generateContentDraft(trend));

    return NextResponse.json({
      success: true,
      trends,
      drafts,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in trends API:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch trending topics",
      },
      { status: 500 }
    );
  }
}
