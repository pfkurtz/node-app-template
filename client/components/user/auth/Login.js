import React, { Component, PropTypes } from 'react';

import { login } from '../../../actions/user';

const Login = props => (
  <form onSubmit = {() => props.onSubmit(login())}>
    <input type="text" name="username" placeholder="username" />
    <input type="password" name="password" placeholder="pass phrase" />
    <button type="submit">Login</button>
  </form>
);

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Login;
