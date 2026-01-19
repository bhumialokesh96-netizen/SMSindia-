# Deployment Guide - SMS India Blog

This guide provides step-by-step instructions for deploying the SMS India Blog platform to production on Vercel.

## Pre-Deployment Checklist

Before deploying to production, ensure you have:

- [ ] Google AdSense account approved
- [ ] Domain name (optional but recommended)
- [ ] Vercel account created
- [ ] Git repository with all code committed
- [ ] Content ready (at least 5-10 quality articles)
- [ ] Privacy Policy and Terms of Service reviewed
- [ ] Environment variables prepared

## Step 1: Prepare Your Content

### Create Quality Content

Google AdSense requires high-quality, original content:

1. Write at least 10-15 original articles (500+ words each)
2. Ensure content is valuable and informative
3. Follow AdSense content policies
4. Avoid prohibited content (adult, violent, copyrighted material)
5. Proofread and edit for quality

### Add Content to Repository

```bash
# Create markdown files in content/posts/
cd content/posts/
# Add your .md files here

# Commit to repository
git add content/posts/
git commit -m "Add initial blog content"
git push
```

## Step 2: Configure Google AdSense

### Apply for AdSense

1. Visit [Google AdSense](https://www.google.com/adsense)
2. Sign up with your Google account
3. Provide your website URL
4. Complete the application form
5. Wait for approval (can take 1-2 weeks)

### Get Your Publisher ID

Once approved:
1. Log into AdSense dashboard
2. Navigate to Account → Account Information
3. Copy your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)

### Create Ad Units

1. Go to Ads → Overview
2. Click "By ad unit"
3. Create display ad units for:
   - Homepage top (728x90 or responsive)
   - Article top (responsive)
   - Article bottom (responsive)
4. Save each ad unit's slot ID

## Step 3: Set Up Vercel

### Create Vercel Account

1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub, GitLab, or Bitbucket
3. Authorize Vercel to access your repositories

### Import Project

1. Click "Add New Project"
2. Select your SMS India Blog repository
3. Vercel will auto-detect Next.js
4. Click "Import"

### Configure Project Settings

**Framework Preset**: Next.js (auto-detected)

**Build & Development Settings**:
- Build Command: `npm run build`
- Output Directory: `.next` (auto-detected)
- Install Command: `npm install` (auto-detected)

**Root Directory**: `./` (default)

## Step 4: Configure Environment Variables

In Vercel dashboard, add these environment variables:

### Required Variables

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

### How to Add Variables

1. In your Vercel project dashboard
2. Go to "Settings" → "Environment Variables"
3. Add each variable:
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: Your site URL
   - Environment: Production, Preview, Development
4. Click "Save"
5. Repeat for other variables

### Get Google Verification Code

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (website URL)
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag
5. Add as `NEXT_PUBLIC_GOOGLE_VERIFICATION`

## Step 5: Deploy to Production

### Initial Deployment

1. Click "Deploy" in Vercel
2. Wait for build to complete (3-5 minutes)
3. Vercel will provide a `.vercel.app` URL
4. Visit the URL to verify deployment

### Verify Deployment

Check these pages:
- Homepage: `https://your-site.vercel.app/`
- Blog listing: `https://your-site.vercel.app/blog`
- Sample post: `https://your-site.vercel.app/blog/welcome-to-sms-india-blog`
- About: `https://your-site.vercel.app/about`
- Privacy: `https://your-site.vercel.app/privacy`
- Terms: `https://your-site.vercel.app/terms`
- Contact: `https://your-site.vercel.app/contact`

## Step 6: Configure Custom Domain (Optional)

### Add Custom Domain

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Enter your domain name
3. Click "Add"
4. Follow DNS configuration instructions

### DNS Configuration

For domain registrars, add these DNS records:

**A Record**:
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record** (for www):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Update Environment Variables

After adding custom domain, update:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

Redeploy to apply changes.

## Step 7: Verify Google AdSense Integration

### Add AdSense Code Verification

1. In AdSense dashboard, get your site verification code
2. It's already in `app/layout.tsx` (pulls from env variable)
3. AdSense will verify your site (can take 24-48 hours)

### Test Ad Placements

After verification:
1. Ad placeholders will show on your site
2. Real ads may take 24-48 hours to appear
3. Don't click your own ads (violates policies)
4. Monitor in AdSense dashboard

### AdSense Policy Compliance

Ensure your site meets requirements:
- Sufficient content (10+ quality articles)
- Clear navigation
- Privacy Policy accessible
- Terms of Service accessible
- Contact information available
- No prohibited content
- Good user experience
- Original content

## Step 8: SEO Configuration

### Submit Sitemap to Google

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (already done in Step 4)
3. Go to "Sitemaps" in left menu
4. Enter: `sitemap.xml`
5. Click "Submit"

### Verify Sitemap

Visit: `https://yourdomain.com/sitemap.xml`

Should see XML with all your pages listed.

### Submit to Bing

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`

### Check Robots.txt

Visit: `https://yourdomain.com/robots.txt`

Should see:
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /private/

Sitemap: https://yourdomain.com/sitemap.xml
```

## Step 9: Performance Optimization

### Enable Vercel Analytics (Optional)

1. In Vercel dashboard, go to "Analytics"
2. Enable Web Analytics
3. View Core Web Vitals metrics

### Monitor Performance

Use these tools:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Performance Targets

Aim for:
- Performance Score: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Step 10: Post-Deployment Tasks

### Monitor AdSense

1. Check AdSense dashboard daily
2. Monitor earnings and performance
3. Watch for policy violations
4. Optimize ad placements based on data

### Content Strategy

1. Publish new content regularly (2-3 times/week)
2. Update existing content
3. Monitor trending topics
4. Use `/api/trends` for content ideas

### SEO Monitoring

1. Track rankings in Google Search Console
2. Monitor click-through rates
3. Analyze search queries
4. Optimize based on data

### Backup Strategy

1. Content is in Git (automatically backed up)
2. Database: Not applicable (static site)
3. Environment variables: Document separately
4. Regular Git commits

## Troubleshooting

### Build Failures

**Issue**: Build fails on Vercel

**Solution**:
1. Check build logs in Vercel dashboard
2. Verify `package.json` dependencies
3. Test build locally: `npm run build`
4. Ensure TypeScript errors are fixed

### AdSense Not Showing

**Issue**: Ads not displaying

**Possible Causes**:
1. AdSense approval pending
2. Ad code not verified
3. Content policy violation
4. Browser ad blocker
5. New site (ads take 24-48 hours)

**Solution**:
1. Check AdSense dashboard for issues
2. Verify `NEXT_PUBLIC_ADSENSE_ID` is set
3. Review content policies
4. Wait 48 hours after verification

### Sitemap Not Found

**Issue**: `/sitemap.xml` returns 404

**Solution**:
1. Ensure `app/sitemap.ts` exists
2. Check build logs for errors
3. Verify Next.js version (14+)
4. Redeploy

### Environment Variables Not Working

**Issue**: Environment variables not accessible

**Solution**:
1. Verify variable names start with `NEXT_PUBLIC_`
2. Check they're set in Vercel dashboard
3. Redeploy after adding variables
4. Clear cache and hard refresh browser

### Content Not Updating

**Issue**: New posts not appearing

**Solution**:
1. Verify `.md` files are in `content/posts/`
2. Check frontmatter format
3. Redeploy to trigger rebuild
4. Wait for ISR revalidation (1 hour default)

## Security Checklist

- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Security headers configured (in `next.config.js`)
- [ ] No secrets in code
- [ ] Environment variables secured
- [ ] Dependencies up to date
- [ ] No user authentication (as per requirements)
- [ ] Content Security Policy headers
- [ ] Regular security audits

## Maintenance

### Daily Tasks
- Monitor AdSense performance
- Check for errors in Vercel logs
- Review analytics

### Weekly Tasks
- Publish new content
- Check SEO rankings
- Review performance metrics
- Update trending content

### Monthly Tasks
- Update dependencies: `npm update`
- Security audit: `npm audit`
- Content quality review
- AdSense optimization
- Backup verification

## Support Resources

- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **AdSense**: [support.google.com/adsense](https://support.google.com/adsense)
- **Search Console**: [support.google.com/webmasters](https://support.google.com/webmasters)

## Success Metrics

Track these KPIs:

### Traffic Metrics
- Daily visitors
- Page views
- Bounce rate
- Average session duration

### SEO Metrics
- Organic search traffic
- Keyword rankings
- Backlinks
- Domain authority

### AdSense Metrics
- RPM (Revenue per 1000 impressions)
- CTR (Click-through rate)
- CPC (Cost per click)
- Total earnings

### Performance Metrics
- Core Web Vitals
- Page load time
- Time to interactive
- Lighthouse scores

## Next Steps

After successful deployment:

1. **Content Marketing**: Promote your blog
2. **Social Media**: Share articles
3. **Email Newsletter**: Build subscriber list
4. **Guest Posting**: Write for other sites
5. **Backlinks**: Build quality backlinks
6. **Analytics**: Set up detailed analytics
7. **A/B Testing**: Optimize ad placements
8. **Community**: Engage with readers

## Conclusion

Congratulations! Your SMS India Blog is now live in production. Follow this guide for maintenance and optimization to grow your traffic and AdSense revenue.

For questions or issues, refer to the main [README.md](./README.md) or open an issue on GitHub.

---

Happy Blogging! 🚀
