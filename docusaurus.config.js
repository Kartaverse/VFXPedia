// VFXPedia Docusaurus Configuration
// Replace placeholders (e.g. URL, title) with your actual values.

module.exports = {
  title: 'VFXPedia',
  tagline: 'A central resource for visual effects artists',
  url: 'https://kartaverse.github.io',
  baseUrl: '/VFXPedia/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Kartaverse',
  projectName: 'vfxpedia',

  // Markdown configuration
  markdown: {
    hooks: {
      onBrokenMarkdownImages: () => {
        // Ignore broken markdown image errors
        return;
      }
    }
  },

  themeConfig: {
    navbar: {
      title: 'VFXPedia',
      logo: {
        alt: 'VFXPedia Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Kartaverse/VFXPedia',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            { label: 'Privacy Policy', to: '/docs/privacy-policy' },
            { label: 'About VFXPedia', to: '/docs/about' },
            { label: 'Disclaimers', to: '/docs/disclaimers' },
          ],
        },
      ],
      copyright: `Copyright © 2008-${new Date().getFullYear()} VFXPedia. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
      additionalLanguages: ['lua'],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Kartaverse/VFXPedia/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};