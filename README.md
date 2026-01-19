# SMS India Blog - Production Architecture

A high-traffic SEO content platform built with Next.js 14+, optimized for performance, SEO, and Google AdSense compliance.

## 🚀 Features

- **Next.js 14+ with App Router**: Leveraging the latest React Server Components
- **Static Site Generation (SSG)**: Pre-rendered pages for optimal performance
- **Incremental Static Regeneration (ISR)**: Fresh content without rebuilding
- **Edge Caching**: Content delivered from Vercel Edge Network
- **Git-Based Content Workflow**: Markdown files as source of truth
- **SEO Optimized**: Automated metadata, sitemap, and robots.txt
- **Google AdSense Ready**: Compliant ad placement and user experience
- **Trending Content Pipeline**: India-focused content discovery
- **Security First**: No runtime secrets, production-ready security headers

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [SEO Features](#seo-features)
- [AdSense Integration](#adsense-integration)
- [Deployment](#deployment)
- [Extending Functionality](#extending-functionality)
- [Architecture Decisions](#architecture-decisions)

## 🏁 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git for version control
- Vercel account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bhumialokesh96-netizen/SMSindia-.git
cd SMSindia-
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

5. Run development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your blog.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
SMSindia-/
├── app/                      # Next.js App Router pages
│   ├── api/                 # API routes
│   │   └── trends/         # Trending content API
│   ├── blog/               # Blog pages
│   │   ├── [slug]/        # Dynamic blog post pages
│   │   └── page.tsx       # Blog listing page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # robots.txt configuration
├── components/             # React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   └── AdUnit.tsx         # AdSense components
├── lib/                    # Utility functions
│   ├── posts.ts           # Content management functions
│   ├── utils.ts           # Helper utilities
│   └── trending.ts        # Trending content pipeline
├── content/                # Markdown content
│   └── posts/             # Blog posts in Markdown
├── public/                 # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── next-sitemap.config.js # Sitemap configuration
└── vercel.json            # Vercel deployment config
```

## 📝 Content Management

### Creating Blog Posts

Blog posts are written in Markdown and stored in `content/posts/`:

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter with metadata:

```markdown
---
title: "Your Article Title"
date: "2026-01-19"
excerpt: "A brief description of your article"
category: "Technology"
tags: ["tag1", "tag2", "tag3"]
featured: true
author: "Author Name"
---

# Your Article Title

Your article content goes here...
```

### Frontmatter Fields

- **title**: Article title (required)
- **date**: Publication date in YYYY-MM-DD format (required)
- **excerpt**: Short description for SEO and previews (required)
- **category**: Content category (optional)
- **tags**: Array of tags for categorization (optional)
- **featured**: Whether to feature on homepage (optional)
- **author**: Author name (optional)

### Content Workflow

1. **Create**: Write articles in Markdown
2. **Commit**: Commit changes to Git
3. **Deploy**: Push to trigger automatic deployment
4. **Revalidate**: ISR automatically updates content

### Git-Based Editorial Control

- All content changes are tracked in Git
- Easy rollback and version history
- Collaborative editing with pull requests
- Content review before publishing

## 🔍 SEO Features

### Automated Metadata

Every page includes optimized metadata:
- Title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Sitemap Generation

- Dynamic sitemap at `/sitemap.xml`
- Automatically includes all pages and posts
- Custom priorities and change frequencies
- Updates with new content

### Robots.txt

- Configured at `/robots.txt`
- Allows search engine crawling
- Blocks private routes
- References sitemap location

### Internal Linking

Use the utility function for internal links:

```typescript
import { generateInternalLink } from '@/lib/utils';

const link = generateInternalLink('/blog/article', 'Read More');
```

## 💰 AdSense Integration

### Setup

1. **Get AdSense Account**: Apply at [Google AdSense](https://www.google.com/adsense)
2. **Configure Environment**: Add your AdSense ID to `.env.local`
3. **Verify Domain**: Complete domain verification in AdSense dashboard

### Ad Placement

The platform includes three ad unit types:

#### Standard Ad Unit
```tsx
<AdUnit slot="your-slot-id" />
```

#### In-Article Ad
```tsx
<InArticleAd slot="your-slot-id" />
```

#### Sidebar Ad
```tsx
<SidebarAd slot="your-slot-id" />
```

### Compliance Guidelines

✅ **Do:**
- Maintain content quality and originality
- Ensure ads are clearly distinguishable
- Follow AdSense program policies
- Keep content family-friendly
- Provide value to users

❌ **Don't:**
- Click your own ads
- Encourage ad clicks
- Place ads on prohibited content
- Obscure or hide ads
- Use deceptive practices

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect Repository**: Import your Git repository in Vercel
2. **Configure Environment Variables** in Vercel dashboard
3. **Deploy**: Automatic deployments on Git push

### Edge Caching Configuration

The platform is optimized for Vercel Edge Network with regional configuration for India-first delivery.

## 🔧 Extending Functionality

### Trending Content Pipeline

The platform includes a trending content pipeline:

```typescript
import { trendingContentPipeline } from '@/lib/trending';

const drafts = await trendingContentPipeline(5);
```

API Endpoint:
```bash
GET /api/trends?limit=5
```

Extend with real APIs:
1. Google Trends API
2. News API
3. Social Media APIs
4. Custom Analytics

### Adding New Features

- **Category Pages**: Create dynamic category routes
- **Search Functionality**: Add search API route
- **Newsletter**: Integrate email service
- **Comments**: Add Disqus, giscus, or custom comments

## 🏗️ Architecture Decisions

### Why Next.js App Router?
- Server Components reduce client-side JavaScript
- Built-in optimization for images, fonts, and scripts
- Unified API and page routing

### Why Static Site Generation?
- Pre-rendered HTML loads instantly
- Excellent for SEO
- Scales with CDN caching
- Cost-effective

### Why ISR?
- Fresh content without full rebuilds
- Balance between static and dynamic
- Optimal user experience

### Why Markdown?
- Easy to write and version control
- Platform independent
- Git-friendly
- Extensible with frontmatter

## 🔒 Security

- Security headers (CSP, X-Frame-Options, etc.)
- No runtime secrets exposure
- No user authentication (production-ready)
- Input sanitization
- HTTPS enforcement

## 📊 Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🛠️ Development Guide

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Google AdSense Policies](https://support.google.com/adsense/answer/48182)
- [SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

## 📄 License

ISC License

---

Built with ❤️ for SMS India Blog