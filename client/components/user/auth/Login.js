import React, { PropTypes } from 'react';

import handleLogin from './helpers/handleLogin';

const Login = props => (
  <form onSubmit={e => handleLogin(e, props.onSubmit)}>
    <input type="text" name="username" placeholder="username"
      required />
    <input type="password" name="password" placeholder="pass phrase"
      required />
    <button type="submit">Login</button>
  </form>
);

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Login;
