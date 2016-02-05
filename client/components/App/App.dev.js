import React, { PropTypes } from 'react';

import Counter from '../Counter';
import DevTools from './DevTools';

import Login from '../user/auth/Login';

const App = props => {
  console.log('App (RootComponent) props:', props);
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
