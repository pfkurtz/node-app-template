import { expect } from 'chai';
import EventEmitter from 'eventemitter3';

window.EE = new EventEmitter()

import { DEV, PROD } from '../common/constants/env';
import { LOGIN, LOGOUT } from './constants/actions';

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
  console.log("CONNECTED", authToken, socket.getSignedAuthToken());

  // just to help until we get a logout button
  socket.deauthenticate();

  EE.on(LOGIN, function(credentials, cb) {
    authToken = socket.getAuthToken();
    // ultimately, we don't want to be listening for LOGIN
    // if the user is already logged in
    // if we go the EventEmitter route
    // but we're trying it that way for the moment
    // probably want a user-logged-in saga, though
    if (authToken) {
      throw new Error(
      `LOGIN triggered but user is already logged in. ${authToken}`);
    }

    if (process.env.NODE_ENV !== PROD) {
      expect(credentials).to.be.an('object');
      /* @TODO username/pw expectations */
      expect(cb).to.be.a('function');
      /* @TODO expect this to be a socket */
    }

    this.emit('login', credentials, (err, res) => {
      if (err) {
        console.warn("!!! Login failure:", err);

        // @TODO there are 2 cases in here now

        return cb({
          type: 'LOGIN_FAILURE_CREDENTIALS'
        });

      } else {
        console.log(`SUCCESS! ${credentials.username} logged in`);

        return cb({
          type: 'LOGIN_SUCCESS',
          payload: {
            username: credentials.username
          }
        });
      }
    });

  }, socket);

});

// State (redux store)

import setupStore from './setup/store';
const store = setupStore();

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
