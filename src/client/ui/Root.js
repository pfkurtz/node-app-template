import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from '../../routes';
console.log("ROUTES", routes);

const Root = props => (
  <Provider store={props.store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
