import React, { PropTypes } from 'react';

import Counter from '../Counter';
import DevTools from './DevTools';

import Login from '../user/auth/Login';
import Logout from '../user/auth/Logout';

const App = props => {
  /* @TODO refactor with JSX control structures */
  if(!props.userRecord.user) {
    return (
      <div>
        <Login onSubmit={action => props.dispatch(action)} />
        <hr />
        <Counter
          count={props.count}
          onClick={action => props.dispatch(action)} />
        <DevTools />
      </div>
    );

  } else {
    return (
      <div>
        <Logout onClick={action => props.dispatch(action)}
          username={props.userRecord.user.username} />
        <hr />
        <Counter
          count={props.count}
          onClick={action => props.dispatch(action)} />
        <DevTools />
      </div>
    );
  }

}

// Most of these will be names of top-level reducers
App.propTypes = {
  count: PropTypes.number.isRequired,
  userRecord: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default App;
