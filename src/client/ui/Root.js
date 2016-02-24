import React, { PropTypes } from 'react';
import { connect, Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

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

const RootComponent = connect(appProps)(App);

const Root = props => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={RootComponent}>
        <IndexRoute component={Home} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
