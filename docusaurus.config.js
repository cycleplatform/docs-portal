const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Cycle Docs',
  tagline: 'Cycle.io portal documentation',
  url: 'https://docs.cycle.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cycleplatform', // Usually your GitHub org/user name.
  projectName: 'docs-portal', // Usually your repo name.
  themeConfig: {
    algolia: {
      // TODO replace with our api key
      apiKey: '47ecd3b21be71c5822571b9f59e52544',
      // TODO create a new index on algolia
      indexName: 'docusaurus-2',
      contextualSearch: true,
    },
    navbar: {
      title: 'Portal Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Portal',
        },
        {
          href: 'https://google.com', label: 'API', position: 'left',
        },
        {
          href: 'https://portal.cycle.io',
          label: 'Portal Login',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/cycleplatform/docs-portal/',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Portal',
              to: '/docs/intro',
            },
            {
              label: 'API',
              href: "google.com"
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://slack.cycle.io/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cycleplatform',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://cycle.io',
            },
            {
              label: 'Portal Login',
              href: 'https://portal.cycle.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cycleplatform/docs-portal/tree/main',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Petrichor Holdings, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cycleplatform/docs-portal/tree/main',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: [
              require.resolve('./src/css/custom.css'),
              require.resolve('./src/css/base.css'),
              require.resolve('./src/css/lists.css'),
          ],
        },
      },
    ],
  ],
};
