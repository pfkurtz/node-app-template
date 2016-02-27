import express from 'express'
import serveStatic from 'serve-static'

import { PROD } from '../constants/env'

/**
 * Initialize, set up, and return an Express app.
 * @return {object} Express app
 */
export default function app() {
  const app = express()

  let publicPath
  if (process.env.NODE_ENV === PROD) {
    publicPath = '/public'
  } else {
    publicPath = '/src/public'
  }

  app.use(serveStatic(process.cwd() + publicPath))

  /* @TODO routes in own modules */

  // Public/Universal JS routes will be like this
  app.get('/universal', (req, res) => {
    res.write("This will be rendered HTML from JS on the server.")
    res.end()
  })

  // Any SPA route is covered by this,
  // because the client has enough data for page's state
  app.all('*', (req, res) => {
    res.sendFile(process.cwd() + publicPath + '/index.html')
  })

  return app
}
