import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Counter from '../Counter';
import DevTools from './DevTools';
import Login from '../user/auth/Login';
import Logout from '../user/auth/Logout';

const App = props => (
  <div>
    <If condition={props.userRecord.user}>
      <Logout username={props.userRecord.user.username} />
    <Else />
      <Login />
    </If>

    <hr />

    <p>Route: {props.location.pathname}</p>

    {props.children}

    <hr />
    <p>
      This is the classic counter example.<br />
      It's the second-to-last component in the `App` component. There's a test for that.
    </p>
    
    <Counter count={props.count} />

    <DevTools />
  </div>
);

// Most of these will be names of top-level reducers
App.propTypes = {
  count: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
  userRecord: PropTypes.object.isRequired
};

export default App;
