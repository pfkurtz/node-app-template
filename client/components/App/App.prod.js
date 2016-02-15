import React, { PropTypes } from 'react';

import Counter from '../Counter';
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
      Classic counter example.
    </p>

    <Counter count={props.count} />
  </div>
);

// Most of these will be names of top-level reducers
App.propTypes = {
  count: PropTypes.number.isRequired,
  userRecord: PropTypes.object.isRequired
};

export default App;
