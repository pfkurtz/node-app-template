import { expect } from 'chai';
import React, { PropTypes } from 'react';
import getFormData from 'get-form-data';

import { login } from '../../../actions/user';
import { PROD } from '../../../../common/constants/env';

/**
 * Handles the onSubmit event for the form,
 * validates the form data,
 * and returns the callback with the correct action.
 *
 * @param  {SyntheticEvent} e - React form event
 * @param  {function} submitCallback - callback taking action object
 * @returns {function} calls callback
 */
function handleSubmit(e, submitCallback) {
  if (process.env.NODE_ENV !== PROD) {
    expect(submitCallback).to.be.a('function');
  }

  e.preventDefault();

  const formData = getFormData(e.currentTarget);
  console.log("form data", formData);

  // @TODO validation
  // just "required" in the HTML right now

  // this will dispatch the action
  return submitCallback(login(formData));
}

const Login = props => (
  <form onSubmit={(e) => handleSubmit(e, props.onSubmit)}>
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
