import { LOGIN_SUCCESS } from '../../../constants/actions'
import { SOCKET_LOGIN } from '../../../constants/sockets'
import { SOCKET_EMIT_ERROR } from '../../../constants/errors'
import expectUserCredentials from '../../../expectations/expectUserCredentials'

/**
 * Return a 'login' handler with `scSocket` dependecy injected.
 * @TODO tests
 * @param  {object} scSocket - SocketCluster client socket
 * @return {function} event handler
 */
export default function emitLogin(scSocket) {
  if (process.env.NODE_ENV !== 'production') {
    const expect = require('chai').expect
    expect(scSocket).to.be.an('object').to.have.property('emit')
    expect(scSocket.emit).to.be.a('function')
  }

  /**
   * Returns Promise for SocketCluster 'login' response.
   * @param  {object} credentials { username, password } or `null`
   * @return {Promise} resolves to string or true
   */
  return function handler(credentials) {
    if (process.env.NODE_ENV !== 'production') {
      // const path = 
      // const expectUserCredentials = require('../../../expectations/expectUserCredentials')
      expectUserCredentials(credentials)
    }

    return new Promise((accept, reject) => {
      scSocket.emit(SOCKET_LOGIN, credentials, (err, res) => {
        if (err) accept(err)
        accept(LOGIN_SUCCESS)
      })
    })
  }
}
