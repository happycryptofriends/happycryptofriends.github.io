'use strict'

const env = require('./env')

const config = {
  target: 'static',
  ssr: false,
  env,
  telemetry: false,
  server: {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 4002
  },
  head: {
    title: 'Pumpscommunity',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noodp' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge, chrome=1' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Commissioner:wght@300;400;500;600;700&display=swap' },
      { rel: 'icon', type: 'image/png', hid: 'favicon-16', href: 'logo.png' }
    ],
    script: [{
      src: 'https://cdn.socket.io/4.1.1/socket.io.min.js',
      integrity: 'sha384-cdrFIqe3RasCMNE0jeFG9xJHog/tgOVC1E9Lzve8LQN1g5WUHo0Kvk1mawWjxX7a',
      crossorigin: 'anonymous'
    }]
  },
  plugins: [
    { src: './plugins/socket.io.js', mode: 'client' }
  ],
  css: [
    { src: './assets/public.scss', lang: 'scss' }
  ],
  render: {
    resourceHints: false
  },
  buildDir: '.nuxt',
  build: {
    publicPath: '/nuxt/',
    loaders: {
      scss: { sourceMap: process.env.NODE_ENV === 'production' },
      vue: { cacheBusting: process.env.NODE_ENV === 'production' }
    }
  },
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact-active',
    scrollBehavior: async function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector('#app'))
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1))
            }, 100)
          })
        )
      }

      if (to.hash) {
        const el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },
  loading: {
    color: '#5CA3FD',
    height: '2.5px'
  }
}

module.exports = config
