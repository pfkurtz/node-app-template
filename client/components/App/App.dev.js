import React, { Component, PropTypes } from 'react';
import DevTools from './DevTools';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello tools</h1>
        <DevTools />
      </div>
    );
  }
}

export default App;
