import { expect } from 'chai';

import { PROD } from '../../constants/env';
import { LOGIN_FAILURE_CREDENTIALS } from '../../constants/errors';
import { USER_ALREADY_LOGGED_IN } from '../../constants/failures';

function login(scSocket) {

  /**
   * Handler for built-in SocketCluster 'login' event.
   * @param  {object} credentials - { username|email, password }
   * @param  {[type]} respond - built-in SocketCluster callback
   * @return {boolean} whether the login is successful
   */
  const handler = (credentials, respond) => {
    if (process.env.NODE_ENV !== PROD) {
      expect(credentials).to.be.an('object');
      /* @TODO username/pw expectations */
    }

    const authToken = scSocket.getAuthToken();

    if (authToken) {
      // Normal client interactions shouldn't get here,
      // so if it does it should set off alarms
      respond(USER_ALREADY_LOGGED_IN);
      return false;
    }

    /* @TODO connect to database */

    if (credentials.password === 'letmein') {
      scSocket.setAuthToken({
        username: credentials.username
      });
      console.log(`${scSocket.getAuthToken().username} logged in.`);

      respond();
      return true;

    } else {
      console.log(`Login failed for ${credentials.username}`);
      /* @TODO replace string with err constant */
      respond(LOGIN_FAILURE_CREDENTIALS);
      return false;
    }
  }

  return handler;
}

login.eventName = 'login';

export default login;
