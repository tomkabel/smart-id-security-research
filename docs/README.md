# SKID Security Research Documentation

This directory contains the VitePress-based documentation site for the Smart-ID Security Research project. It builds automatically to GitHub Pages.

## Quick Start

Run these from the repository root (the toolchain lives in the root `package.json`):

```bash
npm ci
npm run docs:dev      # dev server
npm run docs:build    # production build -> docs/.vitepress/dist
npm run docs:preview  # preview the production build
```

The dev server prints the local URL, including the `/smart-id-security-research/` base path.

## Project Structure

```
.
├── .vitepress/
│   └── config.ts              # VitePress configuration
├── 01-core-research/          # Primary research documents
├── 02-technical-security/     # Security measures and vulnerabilities
├── 03-regulatory-framework/   # Laws, acts, and regulations
├── 04-regulatory-memoranda/   # Formal memoranda to authorities
├── 05-enforcement/            # Regulatory enforcement analysis
├── 06-supplementary-research/ # Supporting research papers
├── 07-opinion-editorials/     # Editorials and expert opinions
├── public/                    # Static assets (logos, favicons)
├── index.md                   # Home page
├── README.md                  # This file
└── package.json
```

## Content Organization

The documentation is organized into several main sections (numbered for logical ordering):

1. **Core Research** (`01-core-research/`): Primary research examining Smart-ID security architecture
2. **Technical Security** (`02-technical-security/`): Security measures and vulnerability assessments
3. **Regulatory Framework** (`03-regulatory-framework/`): Laws, acts, and regulatory standards
4. **Regulatory Memoranda** (`04-regulatory-memoranda/`): Formal memoranda submitted to Estonian authorities (RIA, TTJA, AKI)
5. **Enforcement** (`05-enforcement/`): Regulatory enforcement strategy and analysis
6. **Supplementary Research** (`06-supplementary-research/`): Supporting documents, fraud evolution analysis
7. **Opinion & Editorials** (`07-opinion-editorials/`): Expert perspectives and editorial analysis

Each section has its own directory with markdown files that automatically appear in the sidebar navigation.

## Adding New Research Files

1. Create a markdown file in the appropriate content folder
2. Add frontmatter with title (optional):
   ```markdown
   ---
   title: Your Document Title
   ---
   ```
3. The file will automatically appear in the sidebar and be accessible at the corresponding path

## Configuration

### VitePress Config

The main configuration is in `.vitepress/config.ts`. This controls:
- Site title and description
- Navigation menu
- Sidebar structure for each section
- Search configuration
- Theme settings

### Theme

VitePress uses the default theme with custom navigation. The site supports dark mode automatically.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch. The workflow:

1. Installs dependencies
2. Builds the site with `npm run build`
3. Deploys the `.vitepress/dist/` directory to GitHub Pages

## Content Features

- **Search**: Built-in local search functionality
- **Responsive**: Works on all device sizes
- **Dark Mode**: Automatic dark/light theme based on system preference
- **Table of Contents**: Automatic page outline generation
- **Code Highlighting**: Syntax highlighting for code blocks
- **Clean URLs**: SEO-friendly URL structure

## Technical Stack

- **VitePress**: Static site generator
- **TypeScript**: For configuration type safety
- **Markdown**: Content format
- **GitHub Pages**: Hosting platform
- **GitHub Actions**: CI/CD automation

## Notes

- Clean URLs are enabled (`cleanUrls: true`)
- Search uses local provider for privacy
- Build output goes to `.vitepress/dist/`
- Links between pages should use paths without `.html` extensions