const path = require('path')
const nodeExternals = require('webpack-node-externals')

const scrollBehavior = function (to, from, savedPosition, ...args) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      if (document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

    return new Promise(resolve => {
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // coords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }

      // if no children detected
      if (to.matched.length < 2) {
      // scroll to the top of the page
        position.x = 0
        position.y = 0
      } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
        position.x = 0
        position.y = 0
      }

      // wait for the out transition to complete (if necessary)
      this.app.$root.$once('triggerScroll', () => {
        // if the resolved position is falsy or an empty object,
        // will retain current scroll position.
        resolve(position)
      })
    })
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'goteborg-studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to Goteborg! ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat|Poiret+One' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extractCSS: true,
    extend (config, ctx) {
      config.module.rules.forEach((value, i) => {
        if (value.loader === 'vue-loader') {
          const sassOptions = {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, './sass/variables.scss')
            }
          }
          value.options.loaders.sass.push(sassOptions)
          value.options.loaders.scss.push(sassOptions)
          config.module.rules[i] = value
        }
      })
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
      /* svg support */
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: /node_modules/
      })
    }
  },
  plugins: ['~/plugins/vuetify'],
  modules: [
    '@nuxtjs/axios'
  ],
  css: [
    {
      src: '~/assets/app.styl',
      lang: 'styl'
    }
  ],
  router: {
    scrollBehavior
  }
}
