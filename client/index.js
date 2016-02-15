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

import App from './components';

/**
 * `props` for `RootComponent` (`App`)
 * @param  {Object} state - from first call of store reducer
 * @return {Object} `props`
 */
function props(state) {
  return {
    count: state.count,
    userRecord: state.userRecord
  };
}

/* @TODO this becomes RouteComponent next */
const RootComponent = connect(props)(App);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={RootComponent}>

        </Route>
      </Router>
    </Provider>,
    document.getElementById('main')
  );
});
