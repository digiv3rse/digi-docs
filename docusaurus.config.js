const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'DiGi Docs',
  url: 'https://docs.digiv3rse.xyz',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'digiv3rse',
  projectName: 'DiGi Docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'DiGi Docs Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Intro',
        },
        {
          position: 'left',
          label: 'Contracts',
          to: '/docs/smart-contracts/creator-tools/intro',
        },
        {
          position: 'left',
          label: 'DiGi Network',
          to: '/docs/digi-network/intro',
        },
        {
          position: 'left',
          label: 'API',
          to: '/docs/digi-api/intro',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    prism: {
      theme: darkCodeTheme,
      additionalLanguages: ['solidity', 'graphql'],
    },
    algolia: {
      apiKey: 'ea9711802399936fa4d55c3033c4cfc5',
      indexName: 'digi',
      appId: 'BH4D9OD16A',
    },
    footer: {
      style: 'dark',
    },
    image: 'img/og-image.png',
    ...(process.env.GTAG_ID && {
      gtag: {
        trackingID: process.env.GTAG_ID,
        anonymizeIP: true,
      },
    }),
    metadatas: [
      {
        name: 'title',
        content: 'DiGi Docs',
      },
      {
        name: 'og:description',
        content: 'Bringing imagination onchain.'
      },
      {
        name: 'description',
        content:
          'DiGi makes it easy for developers to get started building with NFTs. ',
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/digiv3rse/digi-docs/blob/main',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        guides: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      'docusaurus2-dotenv',
      {
        safe: false,
        systemvars: true,
        silent: false,
        expand: false,
        defaults: true,
      },
    ],
  ],
}
