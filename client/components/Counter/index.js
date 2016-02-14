import React, { Component, PropTypes } from 'react';

import { dispatch } from '../../store';
import addCount from '../../actions/addCount';

const Counter = props => (
  <button onClick={() => dispatch(addCount())}>
    Times Pushed: {props.count}
  </button>
);

Counter.propTypes =  {
  count: PropTypes.number.isRequired
};

export default Counter;
