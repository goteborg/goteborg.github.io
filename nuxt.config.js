const path = require('path')
const nodeExternals = require('webpack-node-externals')

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
    '@nuxtjs/axios',
  ],
  css: [
    {
      src: '~/assets/app.styl',
      lang: 'styl'
    }
  ]
}
