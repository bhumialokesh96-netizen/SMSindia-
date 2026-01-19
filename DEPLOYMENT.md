# SMSIndia Blog - Deployment Guide

This guide walks you through deploying the SMSIndia Blog platform to Vercel (recommended) or other hosting platforms.

## Prerequisites

- Node.js 18.0.0 or higher
- npm 10.0.0 or higher
- GitHub account
- Vercel account (free tier works)

## Quick Start with Vercel (Recommended)

### 1. Prepare Your Repository

Ensure all code is committed and pushed to GitHub:

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `bhumialokesh96-netizen/SMSindia-`
4. Vercel will auto-detect Next.js configuration
5. Configure environment variables (see below)
6. Click "Deploy"

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? smsindia-blog
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

### 3. Configure Environment Variables

In Vercel Dashboard → Project → Settings → Environment Variables, add:

**Required:**
- `SITE_URL`: `https://your-domain.vercel.app`
- `SITE_NAME`: `SMSIndia Blog`
- `SITE_DESCRIPTION`: `Your source for SMS, telecom, and technology trends in India`

**Optional (for Google AdSense):**
- `NEXT_PUBLIC_ADSENSE_ID`: `ca-pub-XXXXXXXXXXXXXXXX`

### 4. Configure Custom Domain (Optional)

1. In Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Vercel provides automatic SSL certificates

### 5. Update Site URL

After deployment, update the `SITE_URL` environment variable to match your actual domain:

```
SITE_URL=https://your-custom-domain.com
```

Redeploy for changes to take effect.

## Alternative Deployment Options

### Netlify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add environment variables
4. Deploy

### AWS Amplify

1. Connect repository
2. Amplify auto-detects Next.js
3. Configure environment variables
4. Deploy

### Self-Hosted

#### Using PM2 (Production Process Manager)

```bash
# Install PM2
npm install -g pm2

# Build the application
npm run build

# Start with PM2
pm2 start npm --name "smsindia-blog" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

#### Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t smsindia-blog .
docker run -p 3000:3000 --env-file .env smsindia-blog
```

## Post-Deployment Checklist

### 1. Verify Core Functionality

- [ ] Homepage loads correctly
- [ ] Blog posts are accessible
- [ ] Navigation works
- [ ] Static pages (Privacy, Terms, Contact) load
- [ ] 404 page displays correctly

### 2. SEO Verification

- [ ] Sitemap accessible: `https://your-domain.com/sitemap.xml`
- [ ] robots.txt accessible: `https://your-domain.com/robots.txt`
- [ ] Meta tags present on all pages
- [ ] Open Graph tags working (test with [Open Graph Debugger](https://developers.facebook.com/tools/debug/))
- [ ] Twitter Cards working

### 3. Performance Testing

Use [Google PageSpeed Insights](https://pagespeed.web.dev/):

- [ ] Mobile performance score > 90
- [ ] Desktop performance score > 95
- [ ] Accessibility score > 95
- [ ] Best Practices score > 90
- [ ] SEO score > 95

### 4. Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership (DNS verification recommended)
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

### 5. Google AdSense Setup (Optional)

1. Apply for [Google AdSense](https://www.google.com/adsense)
2. Add your site for review
3. Once approved, get your Publisher ID
4. Add `NEXT_PUBLIC_ADSENSE_ID` to environment variables
5. Update ad slot IDs in `app/blog/[slug]/page.tsx`
6. Redeploy

### 6. Google Analytics Setup (Optional)

1. Create property in [Google Analytics](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to `app/layout.tsx` (see README for code snippet)
4. Redeploy

## Monitoring and Maintenance

### Vercel Dashboard

Monitor your deployment:

- **Analytics**: Traffic, page views, performance
- **Logs**: Real-time logs and errors
- **Deployments**: History of all deployments
- **Performance**: Core Web Vitals tracking

### Adding New Content

To add new blog posts:

1. Create `.md` file in `content/posts/`
2. Add frontmatter and content
3. Commit and push to GitHub
4. Vercel auto-deploys on push to main branch
5. ISR revalidates pages within 1 hour

### Updating Site Configuration

If you update configuration files:

1. Make changes locally
2. Test with `npm run build` and `npm start`
3. Commit and push
4. Verify deployment in Vercel Dashboard

## Troubleshooting

### Build Failures

**Issue**: Build fails on Vercel

**Solutions**:
1. Check build logs in Vercel Dashboard
2. Verify Node.js version (should be 18+)
3. Ensure all dependencies are in `package.json`
4. Test build locally: `npm run build`

### Environment Variables Not Working

**Issue**: Site URL or AdSense not showing

**Solutions**:
1. Verify variables are set in Vercel Dashboard
2. Ensure variable names match exactly
3. Redeploy after adding/changing variables
4. Check if variables need `NEXT_PUBLIC_` prefix for client-side access

### Sitemap Not Generating

**Issue**: Sitemap returns 404

**Solutions**:
1. Verify `next-sitemap.config.js` is present
2. Check `postbuild` script in `package.json`
3. Redeploy to trigger build
4. Verify files in `public/` directory after build

### ISR Not Revalidating

**Issue**: Blog posts not updating

**Solutions**:
1. Verify `revalidate` is set in blog post pages
2. Check Vercel Functions logs for errors
3. Force revalidation by redeploying
4. Verify content files are in correct location

### Slow Performance

**Issue**: Poor PageSpeed scores

**Solutions**:
1. Enable all Vercel optimization features
2. Optimize images (use WebP/AVIF)
3. Minimize JavaScript bundles
4. Use Vercel Analytics to identify issues
5. Review and remove unused dependencies

## Security Best Practices

### Keep Dependencies Updated

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update Next.js specifically
npm install next@latest react@latest react-dom@latest
```

### Security Scanning

```bash
# Run security audit
npm audit

# Fix vulnerabilities
npm audit fix
```

### Environment Variables

- Never commit `.env` files to Git
- Use Vercel's encrypted environment variables
- Rotate secrets regularly
- Use different credentials for production/development

## Scaling Considerations

### High Traffic Handling

Vercel automatically handles:
- Global CDN distribution
- Edge caching
- Automatic scaling
- DDoS protection

For extremely high traffic:
1. Upgrade Vercel plan
2. Implement aggressive caching
3. Use CDN for static assets
4. Monitor usage in Vercel Dashboard

### Content Growth

As content grows:
1. Sitemap will automatically paginate (5000 URLs per file)
2. Build times may increase (consider incremental builds)
3. Consider implementing pagination on homepage
4. Archive old content if needed

## Backup and Recovery

### Content Backup

Your content is safe in Git:
```bash
# Clone repository
git clone https://github.com/bhumialokesh96-netizen/SMSindia-.git

# Content is in content/posts/
```

### Deployment Rollback

In Vercel Dashboard:
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

Or using CLI:
```bash
vercel rollback
```

## Support and Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **Google Search Console**: https://search.google.com/search-console
- **Google AdSense Help**: https://support.google.com/adsense

## Continuous Improvement

### Regular Tasks

**Weekly:**
- Review Google Search Console for errors
- Check Google Analytics for traffic patterns
- Monitor Vercel performance metrics

**Monthly:**
- Update dependencies
- Review and optimize slow pages
- Add new content based on trending topics
- Check for broken links

**Quarterly:**
- Review and update SEO strategy
- Audit AdSense performance
- Update outdated content
- Performance optimization review

---

**Deployment Complete! 🎉**

Your SMSIndia Blog is now live and ready to serve high-quality content to readers across India.

For support, refer to the main README.md or open an issue on GitHub.
