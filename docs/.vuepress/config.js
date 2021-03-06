const guideSidebar = require('./guide');
const apiSidebar = {
  '/api/': require('./api')
};
const sidebar = Object.assign({}, guideSidebar, apiSidebar);

module.exports = {
  base: '/titanium-docs/',
  title: 'Titanium Mobile',
  description: 'Native iOS-, Android- and Windows Apps with JavaScript',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  theme: 'titanium',
  themeConfig: {
    logo: '/titanium-logo.png',
    footerCopyright: 'Copyright © 2019-present Axway Appcelerator',
    footerLogo: '/images/axway-appcelerator-logo.png',
    footerSitemap: {
      'Docs': [
        { text: 'Alloy', link: '/guide/Alloy_Framework/' }
      ],
      'Other': [
        { text: 'Some link', link: 'https://docs.appcelerator.com/' }
      ],
      'Social': [
        { text: 'Twitter', link: 'https://twitter.com/appcelerator' }
      ]
    },
    // Top navigation bar
    nav: [
      {
        text: 'Guide',
        items: [
          {
            text: 'Titanium SDK',
            link: '/guide/Titanium_SDK/'
          },
          {
            text: 'Alloy',
            link: '/guide/Alloy_Framework/'
          },
          {
            text: 'Appcelerator Studio',
            link: '/guide/Axway_Appcelerator_Studio/'
          },
          {
            text: 'Appcelerator CLI',
            link: '/guide/Appcelerator_CLI/'
          }
        ]
      },
      { text: 'API Reference', link: '/api/' },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Help',
            items: [
              {
                text: 'Slack',
                link: 'https://tislack.org'
              },
              {
                text: 'Contribution Guide',
                link: '/contribute.md'
              },
              {
                text: 'TDoc Specificiation',
                link: '/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/TDoc_Specification'
              }
            ]
          },
          {
            text: 'Core',
            items: [
              {
                text: 'SDK',
                link: '/guide/Titanium_SDK/'
              },
              {
                text: 'Hyperloop',
                link: '/guide/Titanium_SDK/Titanium_SDK_Guide/Hyperloop/'
              }
            ]
          },
          {
            text: 'Frameworks',
            items: [
              {
                text: 'Alloy',
                link: '/guide/Alloy_Framework/'
              },
              {
                text: 'Vue.js',
                link: 'https://github.com/appcelerator/titanium-vue'
              },
              {
                text: 'Angular',
                link: '/guide/Titanium_SDK/Titanium_SDK_Guide/Titanium_and_Angular/'
              }
            ]
          },
          {
            text: 'News',
            items: [
              {
                text: 'Blog',
                link: 'https://appcelerator.com/blog'
              },
              {
                text: 'Twitter',
                link: 'https://twitter.com/appcelerator'
              }
            ]
          }
        ]
      }
    ],

    sidebar,
    sidebarDepth: 5,

    // Repo settings
    docsDir: 'docs',
    repo: 'appcelerator/titanium_mobile',
    docsRepo: 'appcelerator/titanium-docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub'
  },
  plugins: [
    'versioning',
    'apidocs',
    '@vuepress/back-to-top',
    require('./guides-content-sidebar') // Show right-hand sidebar for in-page headers in guides
  ]
};
