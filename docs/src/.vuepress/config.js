const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Apto. 102 Vilaggio Di Mare',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guia Rápido',
        link: '/guia/',
      },
      {
        text: 'Chegando',
        link: '/checkin/',
        items: [
          { text: 'Como Chegar', link: '/checkin/chegar/' },
          { text: 'Manual da Casa', link: '/checkin/manual/' },
          { text: 'Limpeza', link: '/checkin/limpeza/' },
          { text: 'Vistoria', link: '/checkin/vistoria/' },
        ]
      },
      {
        text: 'Saindo',
        link: '/checkout/'
      },
      {
        text: 'Atrações',
        link: '/atracoes/'
      },
      {
        text: 'Contatos',
        link: '/contatos/'
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@img': 'images'
      }
    }
  }
}
