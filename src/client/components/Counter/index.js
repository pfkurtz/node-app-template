import React, { Component, PropTypes } from 'react';

import { dispatch } from '../../store';
import addCount from '../../actions/addCount';

const Counter = props => (
  <div>
    <p>
      This is the classic counter example.<br />
      It's the second-to-last component in the `App` component. There's a test for that.
    </p>
    
    <button onClick={() => dispatch(addCount())}>
      Times Pushed: {props.count}
    </button>
  </div>
);

Counter.propTypes =  {
  count: PropTypes.number.isRequired
};

export default Counter;
