import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DevTools from './DevTools';

import addCount from '../../actions/addCount';

const App = props => (
  <div>
    <button onClick={() => {
      console.log("in handler:", props);
      return props.dispatch(addCount());
    }}>Times Pushed: {props.count}</button>
    <DevTools />
  </div>
);

export default App;
