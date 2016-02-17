import { expect } from 'chai';

import { checkForSignedJWT } from '../actions/user';
import { dispatch } from '../store';

const socket = socketCluster.connect();

socket.on('connect', () => {
  // First step in the user saga, at this point
  const authToken = socket.getAuthToken();
  dispatch(checkForSignedJWT(authToken));
});

socket.on('error', (err) => {
  throw 'Socket error - !' + err;
});

/**
 * API
 * @TODO separate files when gets unwieldy
 * best pattern for passing in `socket` to these functions?
 * make a class, these are methods??
 */

/**
 * Returns socketCluster `authToken`.
 * @return {object|null} JWT
 */
export function getAuthToken() {
  return socket.getAuthToken();
}

/**
 * Promise for socketCluster 'login'.
 * @param  {object|null} credentials { username, password } or `null`
 * @return {Promise} resolves login callback
 */
export function socketLogin(credentials) {
  return new Promise((resolve, reject) => {
    return socket.emit('login', credentials, (err) => {
      if (err) return resolve(err);
      return resolve(true);
    });
  });
}

/**
 * Calls `deauthenticate` on socketCluster
 * @return {undefined} no return value
 */
export function socketLogout() {
  socket.deauthenticate();
  /* @TODO delete cookie, but put it back if deauthenticate fails, right? */
  delete document.cookie;
}
