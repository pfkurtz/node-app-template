import 'babel-polyfill';

/**
 *
 */

import { expect } from 'chai';

import EE from './setup/events';

import { DEV, PROD } from '../common/constants/env';
import { LOGIN_REQUEST, LOGOUT } from './constants/actions';
import {
  loginSuccess,
  loginFailureCredentials,
  loginFailureError,
  logout
} from './actions/user';

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

  EE.on(LOGIN_REQUEST, function(credentials, cb) {
    authToken = this.getAuthToken();
    // ultimately, we don't want to be listening for LOGIN
    // if the user is already logged in
    // if we go the EventEmitter route
    // but we're trying it that way for the moment
    // probably want a user-logged-in saga, though
    if (authToken) {
      throw new Error(`LOGIN triggered but user is already logged in. ${authToken}`);
    }

    if (process.env.NODE_ENV !== PROD) {
      expect(credentials).to.be.an('object');
      /* @TODO username/pw expectations */
      expect(cb).to.be.a('function');
      /* @TODO expect this to be a socket */
    }

    /*
      Callback to this should be its own module
     */
    this.emit('login', credentials, (err, res) => {
      if (err) {
        console.warn("!!! Login failure:", err);

        // @TODO there are 2 cases in here now
        return cb(loginFailureCredentials());

      } else {
        console.log(`SUCCESS! ${credentials.username} logged in.`);
        return cb(loginSuccess({ username: credentials.username }));
      }
    });

  }, socket);

  // each of the events need to be set up with EE
  // with appropriate `this` (need to expect on required methods)
  EE.on(LOGOUT, function(cb) {
    authToken = this.getAuthToken();
    if (!authToken) {
      throw new Error(`LOGOUT triggered without user logged in.`);
    }

    if (process.env.NODE_ENV !== PROD) {
      expect(cb).to.be.a('function');
      /* @TODO expect this to be a socket */
    }

    this.deauthenticate((err) => {
      if (err) {
        console.error(err);
        return; /* @TODO: what in this case? --> logout error payload */
      }

      console.log(`${authToken.username} logged out.`);
      return cb(logout());
    });

  }, socket);

});

// State (redux store)

import setupStore from './setup/store';
const store = setupStore();

export const dispatch = store.dispatch;

if (process.env.NODE_ENV === DEV) {
  window.STORE = store;
}

// TODO check `store` is what it should be

// UI (react)

import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import App from './components';

function props(state) {
  return {
    count: state.count,
    userRecord: state.userRecord
  };
}

const RootComponent = connect(props)(App);

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  render(
    <Provider store={store}>
      <RootComponent />
    </Provider>,
    main
  );
});
