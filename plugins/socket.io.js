const token = getCookie('happyCryptoToken')

const socket = window.io(process.env.socketHost, {
  auth: {
    token
  }
})

function getCookie (name) {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

function info (message) {
  console.log(`%cHappyCryptoBackend service ${message}`, 'color: #79b3d7; font-size: 14px;')
}

socket.on('connect', () => {
  info('connected')
})

socket.io.on('reconnection_attempt', i => {
  info('reconnection_attempt', i)
})

socket.on('connect_error', (err) => {
  info('connect_error')
  console.log('err.message', err.message)
  if (err.message !== 'invalid_token') {
    setTimeout(() => {
      socket.connect()
    }, 1000)
  }
})

export default (context, inject) => {
  socket.on('disconnect', reason => {
    info('disconnected')
    if (reason === 'io server disconnect') {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.connect()
    }
  })

  socket.io.on('reconnect', () => {
    info('reconnect')
  })

  inject('socket', socket)
  context.$socket = socket
}
