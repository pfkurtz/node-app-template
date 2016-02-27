import { forEach } from 'lodash'

import { checkForSignedJWT } from '../../actions/user'
import { dispatch } from '../store'
import * as listeners from './listeners'
import { SOCKET_CONNECT, SOCKET_ERROR } from '../../constants/sockets'

// This is how we connect to the server.
const scSocket = socketCluster.connect()

scSocket.on(SOCKET_CONNECT, () => {
  // First step in the user saga
  const authToken = scSocket.getAuthToken()
  dispatch(checkForSignedJWT(authToken))

  // listeners
  forEach(listeners, listener => {
    scSocket.on(listener.ACTION, (data, res) => {
      console.log("NEW DATA", data)
      //dispatch(listener.action(data))
    })
  })
})

scSocket.on(SOCKET_ERROR, (err) => {
  scSocket.deauthenticate()
  throw 'scSocket error - !' + err
})

/* @TODO set up on all listeners */

/**
 * Returns scSocketCluster `authToken`.
 * @return {object|null} JWT
 */
export function getAuthToken() {
  return scSocket.getAuthToken()
}

/**
 * Emits built-in SocketCluster 'deauthenticate' event.
 * @return {undefined} NA
 */
export function emitLogout() {
  scSocket.deauthenticate()
}

/**
 * API
 * All import are called with `scSocket`,
 * because they all return function with dependcy injection.
 *
 * NB The two functions above are so simple
 * doesn't seem like the need their own files,
 * with the added complexity of dependency injection.
 */

import _emitLogin from './emitters/emitLogin'
export const emitLogin = _emitLogin(scSocket)
