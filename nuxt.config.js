'use strict'

const config = {
  target: 'static',
  ssr: false,
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
    ]
  },
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
    base: '/pumpscommunity/'
  },
  loading: {
    color: '#5CA3FD',
    height: '2.5px'
  }
}

module.exports = config
