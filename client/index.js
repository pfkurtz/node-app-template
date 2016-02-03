import { expect } from 'chai';
import EventEmitter from 'eventemitter3';
window.EE = new EventEmitter()

import { DEV, PROD } from '../common/constants/env';
import { LOGIN } from './constants/actions';

// Websockets connection

const socket = socketCluster.connect();

socket.on('error', (err) => {
  throw 'Socket error - !' + err;
});

socket.on('connect', () => {
  console.log("CONNECTED", socket.getAuthToken(), socket.getSignedAuthToken());

  EE.on(LOGIN, (credentials, cb) => {
    if (process.env.NODE_ENV !== PROD) {
      expect(credentials).to.be.an('object');
      expect(cb).to.be.a('function');
    }

    console.log("EVENT HANDLER", this);
  }, socket);

  // const credentials = {
  //   username: 'patkirts',
  //   password: 'letmein'
  // };
  //
  // socket.deauthenticate((err) => {
  //   if (err) throw new Error(err);
  //
  //   setTimeout(() => {
  //     console.log("!!!authToken 3 seconds after deauthenticate()", socket.getAuthToken(), socket.getSignedAuthToken());
  //
  //     socket.emit('login', credentials, (err) => {
  //       if (err) {
  //         console.log("ERROR", err);
  //       } else {
  //         setTimeout(() => {
  //           console.log("Successful login:", socket.getAuthToken(),  socket.getSignedAuthToken());
  //         }, 3000);
  //       }
  //     });
  //   }, 2000);
  // });
});

// State (redux store)

import setupStore from './setup/store';
const store = setupStore();

if (process.env.NODE_ENV === DEV) {
  window.STORE = store;
  console.log("STORE", store);
}

// TODO check `store` is what it should be

// UI (react)

import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import App from './components';

function props(state) {
  return {
    count: state.count
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
  )
});
