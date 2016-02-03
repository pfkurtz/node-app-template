import React, { Component, PropTypes } from 'react';

import addCount from '../../actions/addCount';

const Counter = props => (
  <button onClick={() => props.onClick(addCount())}>
    Times Pushed: {props.count}
  </button>
);

Counter.propTypes =  {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Counter;
