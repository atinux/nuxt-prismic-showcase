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
  ** Nuxt.js Build Modules
  */
  buildModules: [
    '~/modules/crawler',
    '~/modules/static',
    // Doc: https://prismic-nuxt.js.org/
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/prismic',
  ],

  prismic: {
    endpoint: 'https://prismic-vuejs-showcase.prismic.io/api/v2',
    preview: '/preview/' // because we use nuxt generate
  }
}
