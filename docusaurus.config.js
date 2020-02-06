module.exports = {
  title: 'NCNU OpenSource',
  tagline: 'OpenSource related in NCNU',
  url: 'http://lsa.moli.rocks/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'NCNU-OpenSource', // Usually your GitHub org/user name.
  projectName: 'NCNU-OpenSource.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NCNU OpenSource',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/readme', label: 'Notes', position: 'left'},
        {
          href: 'https://github.com/NCNU-OpenSource/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://t.me/MOLi_rocks',
          label: 'Telegram',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Related Links',
          items: [
            {
              label: 'Notes',
              to: 'docs/readme',
            },
            {
              label: 'Blog',
              href: 'https://blog.moli.rocks/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/NCNU.OpenSource/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/NCNU-OpenSource/',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/MOLi_rocks',
            },
          ],
        },
      ],
      copyright: `Copyright © NCNU OpenSource BY-SA 4.0. Built with Docusaurus.`,
    },
    googleAnalytics: {
      trackingID: 'UA-65940060-4',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/NCNU-OpenSource/NCNU-OpenSource.github.io/edit/src/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
        }
      },
    ],
  ],
};
