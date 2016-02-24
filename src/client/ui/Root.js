import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import { connect } from 'react-redux';
import { Route, IndexRoute } from 'react-router';

import App from '../components';
import Home from '../components/Home';
import User from '../components/User';
import NotFound from '../components/errors/NotFound';

function appProps(state) {
  return {
    count: state.count,
    location: state.routing.location,
    userRecord: state.userRecord
  };
}

const ConnectedApp = connect(appProps)(App);
// connect Home if it needs to be passed any data

function userProps(state) {
  return {
    user: state.userRecord.user
  };
}

const ConnectedUser = connect(userProps)(User);

const Root = props => (
  <Provider store={props.store}>
    <Router history={browserHistory}>
    <Route path="/" component={ConnectedApp}>
      <IndexRoute component={Home} />

      <Route path=":username" component={ConnectedUser}
        onEnter={function(_props) {
          const user = props.store.getState().userRecord.user;
          if (!user) this.component = NotFound;
        }} />

      <Route path="*" component={NotFound} />
    </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
