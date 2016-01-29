import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DevTools from './DevTools';

import addCount from '../../actions/addCount';

class App extends Component {
  render() {
    console.log("PROPS",this.props);
    const { count, dispatch } = this.props;
    return (
      <div>
        <button onClick={() => {
          console.log("in handler", this.props);
          return dispatch(addCount())
        }}>Times Pushed: {count}</button>
        <DevTools />
      </div>
    );
  }
}

function props(state) {
  return {
    count: state.count
  };
}

export default connect(props)(App);
