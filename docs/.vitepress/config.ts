import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'
import footnote from 'markdown-it-footnote'

// GitHub Pages serves this project at /<repo-name>/. CI injects the exact
// path from actions/configure-pages (steps.pages.outputs.base_path), so a
// future repo rename cannot silently break asset URLs again.
const base = normalizeBase(process.env.VITEPRESS_BASE || '/smart-id-security-research/')
const repoUrl = 'https://github.com/tomkabel/smart-id-security-research'

function normalizeBase(b: string): string {
  const withLead = b.startsWith('/') ? b : `/${b}`
  return withLead.endsWith('/') ? withLead : `${withLead}/`
}

export default defineConfig({
  title: 'Smart-ID Security Research',
  description:
    'Independent security research on Smart-ID authentication and cross-device eID vulnerabilities',
  lang: 'en-US',
  base,
  cleanUrls: true,
  lastUpdated: true,

  // Repo-meta files that live under docs/ but are not site pages.
  srcExclude: ['README.md', 'LICENSE'],

  // `head` URLs are NOT rewritten with `base`, so prefix them explicitly.
  head: [
    ['link', { rel: 'icon', href: `${base}favicon.svg`, type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: `${base}favicon.ico` }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Smart-ID Security Research' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Independent security research on Smart-ID authentication and cross-device eID vulnerabilities'
      }
    ]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Core Research', link: '/01-core-research/' },
      { text: 'Technical Security', link: '/02-technical-security/' },
      { text: 'Regulatory Framework', link: '/03-regulatory-framework/' },
      { text: 'Memoranda', link: '/04-regulatory-memoranda/' },
      { text: 'Enforcement', link: '/05-enforcement/' },
      { text: 'Supplementary', link: '/06-supplementary-research/' },
      { text: 'Opinion', link: '/07-opinion-editorials/' }
    ],

    sidebar: generateSidebar({
      documentRootPath: '/docs',
      collapsed: false,
      capitalizeFirst: true,
      includeRootIndexFile: true,
      useTitleFromFrontmatter: true,
      excludeByGlobPattern: ['README.md']
    }),

    socialLinks: [{ icon: 'github', link: repoUrl }],

    editLink: {
      pattern: `${repoUrl}/edit/master/docs/:path`,
      text: 'Suggest an edit on GitHub'
    },

    search: { provider: 'local' },

    footer: {
      message: 'Research content licensed under CC-BY-4.0. Site code licensed under MIT.',
      copyright: 'Copyright © 2024-present SKID Security Research'
    }
  },

  markdown: {
    lineNumbers: true,
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => {
      // Previously registered via an async factory, which markdown-it never
      // awaits – the plugin was silently a no-op.
      md.use(footnote)
    }
  }
})
