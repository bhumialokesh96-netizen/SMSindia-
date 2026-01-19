/**
 * Trending topics data structure
 * In production, this would fetch from Google Trends API or similar service
 */

export interface TrendingTopic {
  id: string;
  keyword: string;
  searchVolume: number;
  category: string;
  region: string;
  timestamp: string;
}

export interface ContentDraft {
  title: string;
  description: string;
  category: string;
  tags: string[];
  outline: string[];
  suggestedContent: string;
}

/**
 * Simulated trending topics for India
 * In production, integrate with Google Trends API or similar
 */
export async function getIndiaTrendingTopics(): Promise<TrendingTopic[]> {
  // Simulated data - replace with actual API call
  const mockTrends: TrendingTopic[] = [
    {
      id: '1',
      keyword: '5G launch India',
      searchVolume: 50000,
      category: 'Technology',
      region: 'India',
      timestamp: new Date().toISOString(),
    },
    {
      id: '2',
      keyword: 'UPI payment trends',
      searchVolume: 45000,
      category: 'FinTech',
      region: 'India',
      timestamp: new Date().toISOString(),
    },
    {
      id: '3',
      keyword: 'SMS banking India',
      searchVolume: 35000,
      category: 'Banking',
      region: 'India',
      timestamp: new Date().toISOString(),
    },
    {
      id: '4',
      keyword: 'WhatsApp Business India',
      searchVolume: 40000,
      category: 'Business',
      region: 'India',
      timestamp: new Date().toISOString(),
    },
    {
      id: '5',
      keyword: 'telecom regulations India',
      searchVolume: 25000,
      category: 'Telecom',
      region: 'India',
      timestamp: new Date().toISOString(),
    },
  ];

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return mockTrends;
}

/**
 * Generate content draft from trending topic
 */
export function generateContentDraft(topic: TrendingTopic): ContentDraft {
  const outlines: Record<string, string[]> = {
    Technology: [
      'Introduction and Current State',
      'Key Features and Benefits',
      'Impact on Indian Market',
      'Adoption Challenges',
      'Future Outlook',
      'Conclusion and Call-to-Action',
    ],
    FinTech: [
      'Overview of the Trend',
      'Market Statistics in India',
      'User Benefits and Use Cases',
      'Security and Compliance',
      'Industry Players',
      'Future Predictions',
    ],
    Banking: [
      'Introduction to Service',
      'How It Works',
      'Benefits for Customers',
      'Bank Offerings Comparison',
      'Security Considerations',
      'Conclusion',
    ],
    Business: [
      'Business Context in India',
      'Features and Capabilities',
      'Success Stories',
      'Implementation Guide',
      'Best Practices',
      'Conclusion',
    ],
    Telecom: [
      'Current Regulatory Landscape',
      'Recent Changes and Updates',
      'Impact on Consumers',
      'Impact on Service Providers',
      'Expert Opinions',
      'What to Expect Next',
    ],
  };

  const defaultOutline = [
    'Introduction',
    'Background and Context',
    'Key Points',
    'Impact and Implications',
    'Expert Perspectives',
    'Conclusion',
  ];

  const outline = outlines[topic.category] || defaultOutline;

  const suggestedContent = `
# ${topic.keyword} - Comprehensive Guide

## Introduction
${topic.keyword} has become a trending topic in India with over ${topic.searchVolume.toLocaleString()} searches. This comprehensive guide explores everything you need to know.

${outline.map((section, index) => `
## ${index + 1}. ${section}
[Content section for ${section} - to be written based on research and current data]
`).join('\n')}

## Conclusion
Stay updated with the latest trends in ${topic.category} by following our blog.

**Keywords:** ${topic.keyword}, India ${topic.category}, Indian market trends
  `.trim();

  return {
    title: `${topic.keyword}: Complete Guide for ${new Date().getFullYear()}`,
    description: `Everything you need to know about ${topic.keyword} in India. Latest trends, statistics, and expert insights.`,
    category: topic.category,
    tags: [topic.keyword, topic.category, 'India', 'trends', 'guide'],
    outline,
    suggestedContent,
  };
}
