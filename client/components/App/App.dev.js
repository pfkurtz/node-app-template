import React, { PropTypes } from 'react';

import Counter from '../Counter';
import DevTools from './DevTools';

const App = props => {
  return (
    <div>
      <Counter
        count={props.count}
        onClick={action => props.dispatch(action)} />
      <DevTools />
    </div>
  );
}

// Most of these will be names of top-level reducers
App.propTypes = {
  count: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default App;
