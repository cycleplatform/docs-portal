const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Cycle Docs",
  tagline: "Cycle.io Documentation",
  url: "https://docs.cycle.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "imgs/cycle/logo/logo-gear.svg",
  organizationName: "cycleplatform", // Usually your GitHub org/user name.
  projectName: "docs-portal", // Usually your repo name.
  // themes: ["@saucelabs/theme-github-codeblock"],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    image: "https://static.cycle.io/website/og.png",
    algolia: {
      apiKey: "e3d876b635908b0ab9c420076449e467",
      indexName: "portal-docs",
      appId: "3IWTY7DLF6",
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      logo: {
        alt: "Cycle Logo",
        src: "imgs/cycle/logo/logo-white.svg",
        href: "https://docs.cycle.io/",
        target: "_self"
      },
      items: [
        {
          type: "doc",
          docId: "getting-started/overview/overview", 
          position: "left", 
          label: "Getting Started"
        }, 
        {
          type: "doc", 
          docId: "reference/intro", 
          position: "left", 
          label: "Reference"
        }, 
        {
          type: "doc",
          docId: "guides/guides",
          position: "left", 
          label: "Guides"
        },
        {
          
          href: "https://slack.cycle.io", 
          target: "_blank", 
          label: "Community"
        }
        // {
        //   type: "doc",
        //   docId: "intro",
        //   position: "left",
        //   label: "Portal Docs",
        // },
        // {
          
        //   label: "API Docs",
        //   position: "left",
        //   href: "https://api-docs.cycle.io"
        // },
        // {
        //   href: "https://portal.cycle.io",
        //   label: "Portal Login",
        //   position: "right",
        // },
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
          title: "Docs",
          items: [
            {
              label: "Portal",
              to: "/docs/intro",
            },
            {
              label: "Public API",
              href: "https://api-docs.cycle.io",
            },
            // {
            //   label: "Internal API",
            //   href: "https://docs.cycle.io/internal-api/introduction",
            // },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Slack",
              href: "https://slack.cycle.io/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/cycleplatform",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/cycle-platform",
            },
            {
              label: "Reddit",
              href: "https://www.reddit.com/r/cycleplatform",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Website",
              href: "https://cycle.io",
            },
            {
              label: "Portal Login",
              href: "https://portal.cycle.io",
            },
            {
              label: "GitHub",
              href: "https://github.com/cycleplatform/docs-portal/tree/main",
            },
            {
              label: "Status",
              href: "https://status.cycle.io/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Petrichor Holdings, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/cycleplatform/docs-portal/tree/main",
          // routeBasePath removes the /docs slug from the url
          routeBasePath: "/"
        },

        theme: {
          customCss: [require.resolve("./src/css/fa-styles/all.css"), require.resolve("./src/css/base.css"), require.resolve("./src/css/lists.css"), require.resolve("./src/css/code.css"), require.resolve("./src/css/fonts.css")],
        },
      },
    ],
  ],
};
