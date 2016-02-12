import { expect } from 'chai';

import { checkForSignedJWT } from '../actions/user';
import { dispatch } from '../index';

// Websockets connection

const socket = socketCluster.connect();

socket.on('error', (err) => {
  throw 'Socket error - !' + err;
});

socket.on('connect', () => {
  let authToken = socket.getAuthToken();
  //console.log("CONNECTED", authToken, socket.getSignedAuthToken());

  dispatch(checkForSignedJWT(socket.getAuthToken()));
});

/**
 * @TODO create api;
 * getAuthToken clone method
 * login
 * logout
 */

export function getAuthToken() {
  return socket.getAuthToken();
}

/**
 *
 *
 * @param  {object|null} credentials { username, password } or `null`
 * @return {Promise} resolves login callback
 */
export function socketLogin(credentials) {
  return new Promise((resolve, reject) => {
    return socket.emit('login', credentials, (err) => {
      if (err) return reject(err);
      return resolve(true);
    });
  });
}

export function socketLogout() {
  socket.deauthenticate();
}
