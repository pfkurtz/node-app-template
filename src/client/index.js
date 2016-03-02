if (process.env.NODE_ENV !== 'test') {
  require('babel-polyfill')
}
// for async/generator support
// import 'babel-polyfill'

// Initialize SocketCluster connection
import './socket'

// UI (React)
import ui from './ui'

document.addEventListener('DOMContentLoaded', () => {
  ui(document.getElementById('app'))
})
