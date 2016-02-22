import { expect } from 'chai';

import { PROD } from '../../constants/env';
import LOGIN_FAILURE_CREDENTIALS from '../../constants/errors';

export default function socket(socket) {
  const initialAuthToken = socket.getAuthToken();
  console.log("got a connection:", initialAuthToken ?
    initialAuthToken.username : " Somebodye, dunnowhoo");

  socket.on('login', (credentials, respond) => {
    if (process.env.NODE_ENV !== PROD) {
      expect(credentials).to.be.an('object');
      /* @TODO username/pw expectations */
    }

    const authToken = socket.getAuthToken();

    if (authToken) {
      /* @TODO replace string with err constant
       * Normal client interactions shouldn't get here, so wherever this is after all the refactoring should set off bells and whistles */
      respond('User already logged in.');
      return false;
    }

    if (credentials.password === 'letmein') {
      respond();

      socket.setAuthToken({
        username: credentials.username
      });

      console.log(`${socket.getAuthToken().username} logged in.`);
      return true;

    } else {
      console.log(`Login failed for ${credentials.username}`);
      /* @TODO replace string with err constant */
      respond(LOGIN_FAILURE_CREDENTIALS);
      return false;
    }
  });

}
