import React from 'react';
import { connect } from 'react-redux';
import { Route, IndexRoute } from 'react-router';

import App from '../components';
import Home from '../components/Home';
import NotFound from '../components/errors/NotFound';

/**
 * `props` for `RootComponent` (`App`)
 * @param  {Object} state - from first call of store reducer
 * @return {Object} `props`
 */
function appProps(state) {
  return {
    count: state.count,
    location: state.routing.location,
    userRecord: state.userRecord
  };
}

const ConnectedApp = connect(appProps)(App);
// connect Home if it needs to be passed any data

const HomeRoute = () => (
  <Route path="/" component={ConnectedApp}>
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default HomeRoute;
