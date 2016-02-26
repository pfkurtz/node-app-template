import readUser from '../../data/readUser'

import envIsProduction from '../../utils/envIsProduction';
import expectUserCredentials from '../../expectations/expectUserCredentials';

import {
  LOGIN_FAILURE_CREDENTIALS,
  LOGIN_FAILURE_ERROR
} from '../../constants/failures';

import {
  MISSING_VALUE,
  USER_ALREADY_LOGGED_IN
} from '../../constants/errors';

import { SOCKET_LOGIN } from '../../constants/sockets';

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
      expectUserCredentials(credentials);
      //expect respond function
    }

    const authToken = scSocket.getAuthToken();

    if (authToken) {
      // Normal client interactions shouldn't get here,
      // so if it does it should set off alarms, or at least error logging.
      return respond(USER_ALREADY_LOGGED_IN);
    }

    try {
      const results = await readUser(credentials.username, true);
      const user = results[0];

      if (credentials.password === user.password) {
        console.log(`${user.username} authenticated`);

        scSocket.setAuthToken({
          username: user.username
        });
        return respond();

      } else {
        console.log(`Login failed for ${user.username}`);
        return respond(LOGIN_FAILURE_CREDENTIALS);
      }

    } catch (err) {
      console.log("readUser error:", err);
      return respond(LOGIN_FAILURE_ERROR);
    }
  }
}

login.eventName = SOCKET_LOGIN;

export default login;
