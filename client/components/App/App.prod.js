import React, { Component } from 'react';

const Test = props => (
  <span>{props.foo}</span>
);

const App = props => (
  <h1 onClick={props.onClick} foo={props.foo}>Hello <Test foo={props.foo} /></h1>
);

export default App;
