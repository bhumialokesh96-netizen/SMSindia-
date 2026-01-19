import { NextResponse } from 'next/server';
import { getIndiaTrendingTopics, generateContentDraft } from '@/lib/trending';

/**
 * API Route: Get trending topics for India
 * GET /api/trending
 * Returns trending topics and optionally generates content drafts
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const generateDrafts = searchParams.get('drafts') === 'true';

    const topics = await getIndiaTrendingTopics();

    if (generateDrafts) {
      const topicsWithDrafts = topics.map((topic) => ({
        ...topic,
        draft: generateContentDraft(topic),
      }));

      return NextResponse.json({
        success: true,
        count: topicsWithDrafts.length,
        topics: topicsWithDrafts,
        generatedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      success: true,
      count: topics.length,
      topics,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error fetching trending topics:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch trending topics',
      },
      { status: 500 }
    );
  }
}
