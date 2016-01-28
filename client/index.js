// Websockets connection

const socket = socketCluster.connect();

socket.on('error', (err) => {
    throw 'Socket error - !' + err;
});

socket.on('connect', () => {
    //console.log("CONNECTED", socket);
});

// State (redux store)

import setupStore from './setup/store';
const store = setupStore();

// UI (react)

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    main
  )
});
