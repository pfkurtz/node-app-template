import readUser from '../../data/readUser'

import envIsProduction from '../../utils/envIsProduction'
import expectUserCredentials from '../../expectations/expectUserCredentials'

import { LOGIN_FAILURE } from '../../constants/failures'

import {
  MISSING_VALUE,
  USER_ALREADY_LOGGED_IN
} from '../../constants/errors'

import { SOCKET_LOGIN } from '../../constants/sockets'

/**
 * Return a 'login' handler with `scSocket` dependecy injected.
 * @TODO tests
 * @param  {object} scSocket - SocketCluster server socket
 * @return {function} event handler
 */
function login(scSocket) {
  /* @TODO expectation on `scSocket` */

  /**
   * Handler for built-in SocketCluster 'login' event.
   * @param  {object} credentials - { username|email, password }
   * @param  {object} respond - built-in SocketCluster callback
   * @return {object} call to `respond`
   */
  return async function handler(credentials, respond) {
    if (!envIsProduction()) {
      expectUserCredentials(credentials)
      // @TODO expect respond function
    }

    const authToken = scSocket.getAuthToken()

    if (authToken) {
      // Normal client interactions shouldn't get here,
      // so if it does it should set off alarms, or at least error logging.
      console.log("BAD: USER TRIED TO LOG IN WHILE LOGGED IN")
      scSocket.deauthenticate()
      return respond(LOGIN_FAILURE)
    }

    try {
      const results = await readUser(credentials.username, true)
      const user = results[0]

      /* @TODO obviously, we need to call crypto here */
      if (credentials.password === user.password) {
        console.log(`${user.username} authenticated`)

        scSocket.setAuthToken({
          username: user.username
        })
        return respond()

      } else {
        console.log(`${LOGIN_FAILURE} for ${user.username}`)
        return respond(LOGIN_FAILURE)
      }

    } catch (err) {
      console.log("readUser error:", err)
      // @TODO we could return LOGIN_ERROR if readUser fails for some reason
      // other than no username
      return respond(LOGIN_FAILURE)
    }
  }
}

login.action = SOCKET_LOGIN

export default login
