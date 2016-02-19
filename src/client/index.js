// for async/generator support
import 'babel-polyfill';

// Initialize SocketCluster connection
import './socket';

// State (Redux store, prop for `Provider` component)
import store from './store';

// UI (React)
/* @TODO own module, takes `store` as param */

import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import reactRouter from 'react-router';

import App from './components';
import Home from './components/Home';
import NotFound from './components/errors/NotFound';

/**
 * `props` for `RootComponent` (`App`)
 * @param  {Object} state - from first call of store reducer
 * @return {Object} `props`
 */
function props(state) {
  return {
    count: state.count,
    location: state.routing.location,
    userRecord: state.userRecord
  };
}

const RootComponent = connect(props)(App);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={RootComponent}>
          <IndexRoute component={Home} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
});
