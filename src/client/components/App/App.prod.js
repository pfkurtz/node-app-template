import React, { PropTypes } from 'react';

import Counter from '../Counter';
import Login from '../user/auth/Login';
import Logout from '../user/auth/Logout';

const App = props => (
  <div>
    <Header userRecord={props.userRecord} />
    <hr />

    <main>
      {props.children}
    </main>

    <hr />
    <Counter count={props.count} />
  </div>
);

// Most of these will be names of top-level reducers
App.propTypes = {
  count: PropTypes.number.isRequired,
  userRecord: PropTypes.object.isRequired
};

export default App;
