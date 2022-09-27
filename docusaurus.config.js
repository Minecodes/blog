// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Minecodes Blog',
  tagline: 'News about cybersecurity, programming, and more',
  url: 'https://blog.minecodes.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Minecodes', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Blog',
        logo: {
          alt: 'Minecodes Blog',
          src: 'img/logo.svg',
        },
        items: [
          {
            position: 'left',
            label: 'Home',
            href: 'https://minecodes.de'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/Minecodes/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [{
                label: 'Docs',
                to: 'https://docs.minecodes.de/docs/intro',
              },
              {
                label: 'Old website',
                to: 'https://github.com/Minecodes/codeluna-vue',
              },
              {
                label: 'Old Gitlab',
                to: 'https://minecodes13.gitlab.io/Minecodes/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Minecodes',
              }, {
                label: 'GitLab',
                href: 'https://gitlab.com/Minecodes13',
              },
            ],
          },
          {
            title: 'Community',
            items: [{
                label: 'Youtube',
                href: 'https://youtube.com/Minecodes',
              },
              {
                label: 'Twitch',
                href: 'https://twitch.com/Minecodes',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/ngZaGzPnmq',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/minecodes_',
              },
              {
                label: 'Mastodon',
                href: 'https://mastodon.social/@minecodes',
              },
              {
                label: 'Reddit',
                href: 'https://reddit.com/r/minecodes',
              },
              {
                label: 'dev.to',
                href: 'https://dev.to/minecodes',
              }
            ],
          },
          {
            title: 'More',
            items: [{
              label: 'Docusaurus',
              href: 'https://docusaurus.io/',
            }],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Minecodes. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
