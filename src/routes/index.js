import { connect } from 'react-redux';

import App from '../client/components';
import Home from '../client/components/Home';
import NotFound from '../client/components/errors/NotFound';

import userRoute from './userRoute';

function appProps(state) {
  return {
    count: state.count,
    location: state.routing.location,
    user: state.user
  };
}

const ConnectedApp = connect(appProps)(App);
// connect Home if it needs to be passed any data

const routes = [
  {
    path: '/',
    component: ConnectedApp,
    indexRoute: { component: Home },
    childRoutes: [
      userRoute,
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

/* @TODO immutable? (as an assurance, code wouldn't do it) */

export default routes;
