# Contributing to SMS India Blog

Thank you for your interest in contributing to SMS India Blog! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:

1. Check if the issue already exists
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment details

### Suggesting Features

Feature suggestions are welcome! Please:

1. Check existing feature requests
2. Provide detailed description
3. Explain the use case
4. Consider implementation approach

### Content Contributions

#### Writing Blog Posts

1. Follow the content guidelines
2. Use proper markdown formatting
3. Include required frontmatter
4. Check spelling and grammar
5. Ensure AdSense policy compliance

**Content Requirements:**
- Original content only
- Minimum 500 words
- Relevant to target audience
- Well-structured with headings
- Include excerpt and tags
- Family-friendly content

#### Content Template

```markdown
---
title: "Your Article Title"
date: "YYYY-MM-DD"
excerpt: "Brief description (150-160 characters)"
category: "Category Name"
tags: ["tag1", "tag2", "tag3"]
featured: false
author: "Your Name"
---

# Your Article Title

Introduction paragraph...

## Main Heading 1

Content...

## Main Heading 2

Content...

## Conclusion

Summary...
```

### Code Contributions

#### Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/SMSindia-.git
   cd SMSindia-
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Development Workflow

1. Make your changes
2. Test locally:
   ```bash
   npm run dev
   npm run build
   ```
3. Follow code style:
   - Use TypeScript
   - Follow existing patterns
   - Add comments for complex logic
   - Keep functions focused and small
4. Commit with clear messages:
   ```bash
   git commit -m "Add: Brief description of changes"
   ```
5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Create a Pull Request

#### Code Style Guidelines

**TypeScript:**
```typescript
// Use descriptive names
const getUserPosts = async (userId: string) => {
  // Implementation
};

// Add type annotations
interface PostData {
  title: string;
  date: string;
  content: string;
}

// Use const for immutable values
const MAX_POSTS = 10;

// Add JSDoc for public functions
/**
 * Fetch posts by category
 * @param category - Category name
 * @returns Array of posts
 */
export async function getPostsByCategory(category: string): Promise<PostData[]> {
  // Implementation
}
```

**React Components:**
```typescript
// Use functional components
export function MyComponent({ prop1, prop2 }: Props) {
  return <div>{/* JSX */}</div>;
}

// Add prop types
interface Props {
  title: string;
  optional?: boolean;
}

// Use semantic HTML
<article>
  <h1>{title}</h1>
  <p>{content}</p>
</article>
```

**File Organization:**
- Components in `components/`
- Library functions in `lib/`
- API routes in `app/api/`
- Pages in `app/`
- Content in `content/posts/`

#### Testing

Before submitting:

1. Test the build:
   ```bash
   npm run build
   ```
2. Check for TypeScript errors:
   ```bash
   npx tsc --noEmit
   ```
3. Test all affected pages
4. Verify responsive design
5. Check browser console for errors

### Pull Request Guidelines

**PR Title Format:**
- `Add: Description` for new features
- `Fix: Description` for bug fixes
- `Update: Description` for improvements
- `Docs: Description` for documentation

**PR Description Should Include:**
- What changes were made
- Why the changes were needed
- How to test the changes
- Screenshots (for UI changes)
- Related issues

**PR Checklist:**
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added where needed
- [ ] Documentation updated
- [ ] Build passes successfully
- [ ] No console errors
- [ ] Responsive design verified
- [ ] SEO considerations addressed

### Commit Message Guidelines

Use clear, descriptive commit messages:

```
Add search functionality to blog

- Implement search API route
- Create search component
- Add search to header
- Update documentation
```

**Format:**
```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

### Documentation

When adding features:

1. Update README.md if needed
2. Add JSDoc comments to functions
3. Update EXTENSIONS_GUIDE.md for new features
4. Include inline comments for complex logic

## Review Process

1. PR submitted
2. Automated checks run
3. Code review by maintainers
4. Requested changes (if any)
5. Approval
6. Merge to main branch

## Release Process

1. Version bumped in package.json
2. CHANGELOG.md updated
3. Tagged release created
4. Deployed to production

## Development Tips

### Local Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for issues
npm run lint
```

### Environment Setup

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ADSENSE_ID=ca-pub-test
NEXT_PUBLIC_GOOGLE_VERIFICATION=test
```

### Debugging

- Use Next.js Dev Tools
- Check browser console
- Review Network tab
- Test in multiple browsers

### Performance

- Optimize images
- Minimize bundle size
- Use lazy loading
- Avoid unnecessary re-renders

### SEO

- Include meta tags
- Use semantic HTML
- Add alt text to images
- Create descriptive URLs
- Implement structured data

## Community

### Getting Help

- Read documentation thoroughly
- Search existing issues
- Ask in discussions
- Be specific and provide context

### Stay Updated

- Watch repository for updates
- Follow announcements
- Read CHANGELOG for changes
- Review merged PRs

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in commit messages

## License

By contributing, you agree that your contributions will be licensed under the same ISC License that covers the project.

## Questions?

If you have questions about contributing:
1. Check documentation
2. Search existing issues
3. Create a new discussion
4. Contact maintainers

Thank you for contributing to SMS India Blog! 🎉
