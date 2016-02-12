import { expect } from 'chai';

import { DEV, PROD } from '../../common/constants/env';
import {
  LOGIN_REQUEST,
  LOGOUT
} from '../constants/actions';
import {
  loginSuccess,
  loginFailureCredentials,
  loginFailureError,
  logout
} from '../actions/user';
import { dispatch } from '../index';

// Websockets connection

const socket = socketCluster.connect();
if (process.env.NODE_ENV === DEV) {
  window.SOCKET = socket;
}

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
