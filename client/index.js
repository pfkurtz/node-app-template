// for async/generator support
import 'babel-polyfill';

import { DEV } from '../common/constants/env';
/**
 * Anything here?
 */

console.log("NODE_ENV:", process.env.NODE_ENV);

// this just sets it up
import './socket';

// State (redux store)

import setupStore from './store';
const store = setupStore();

/* @TODO this is a silly place for this */
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
