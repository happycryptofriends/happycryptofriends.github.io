const config = {
  default: {
    socketHost: 'localhost:4003'
  },
  production: {
    socketHost: 'happycryptofriends.github.io'
  }
}

const merged = Object.assign(
  config.default,
  config[process.env.NODE_ENV || 'default'] || {}
)

module.exports = merged
