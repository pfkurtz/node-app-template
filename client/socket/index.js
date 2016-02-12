import { expect } from 'chai';

import {
  LOGIN_REQUEST,
  LOGOUT
} from '../constants/actions';

import { dispatch } from '../index';

// Websockets connection

const socket = socketCluster.connect();

socket.on('error', (err) => {
  throw 'Socket error - !' + err;
});

socket.on('connect', () => {
  let authToken = socket.getAuthToken();
  //console.log("CONNECTED", authToken, socket.getSignedAuthToken());

  dispatch({ type: 'CHECK_FOR_SIGNED_JWT', authToken: socket.getAuthToken() });
});

//export default socket;

/**
 * @TODO create api;
 * getAuthToken clone method
 * login
 * logout
 */

export function getAuthToken() {
  return socket.getAuthToken();
}

export function login(credentials) {
  return new Promise((resolve, reject) => {
    return socket.emit('login', credentials, (err) => {
      if (err) return reject(err);
      return resolve(true);
    });
  });
}

export function socketlogout() {
  socket.deauthenticate();
}
