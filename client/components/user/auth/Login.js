import React, { PropTypes } from 'react';
import getFormData from 'get-form-data';

import { login } from '../../../actions/user';
import { LOGIN } from '../../../constants/actions';
import { PROD } from '../../../../common/constants/env';

/**
 * Handles the onSubmit event for the form,
 * validates the form data,
 * and returns the callback with the correct action.
 *
 * @param  {SyntheticEvent} e - React form event
 * @param  {function} submitCallback - callback taking action object
 * @returns {event} LOGIN
 */
function handleSubmit(e, submitCallback) {
  e.preventDefault();

  const formData = getFormData(e.currentTarget);
  console.log("form data", formData);

  // @TODO validation
  // just "required" in the HTML right now

  // this will dispatch the action
  // so it really needs to be at the end of the callback
  // to the socket login event
  // `submitCallback` get passed as a parameter
  // but the socket callback decides the action
  // so how do we call this shit?

  return EE.emit(LOGIN, formData, submitCallback)
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
