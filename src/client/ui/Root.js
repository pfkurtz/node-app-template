import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import HomeRoute from '../routes/HomeRoute';

const Root = props => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <HomeRoute />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
hhhgv
