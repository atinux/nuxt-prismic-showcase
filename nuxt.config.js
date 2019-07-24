export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { href: 'https://fonts.googleapis.com/css?family=PT+Mono', rel: 'stylesheet' }
    ]
  },

  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/main.scss'
  ],

  plugins: [
    '~/components/index'
  ],

  /*
  ** Nuxt.js Modules
  */
  modules: [
    '~/modules/crawler',
    '~/modules/static',
    'prismic-nuxt'
  ],

  prismic: {
    endpoint: 'https://prismic-vuejs-showcase.prismic.io/api/v2'
  },

  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ]
}
