import settings from '../common/settings';
console.log("SETTINGS", settings);

// Websockets connection

const socket = socketCluster.connect();

socket.on('error', (err) => {
    throw 'Socket error - !' + err;
});

socket.on('connect', () => {
    console.log("CONNECTED", socket);
});

if (process.env.NODE_ENV === 'development') {
  console.log("ENV", process.env.NODE_ENV);
}

// State (redux store)

import { createStore } from 'redux';
import app from './reducers';

const store = createStore(app);

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
