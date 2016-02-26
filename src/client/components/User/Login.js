import React, { PropTypes } from 'react';
import getFormData from 'get-form-data';

import { dispatch } from '../../store';
import { LOGIN_REQUEST } from '../../../constants/actions';
import { loginRequest } from '../../../actions/user';

/**
 * Handles the onSubmit event for the form,
 * @TODO validates the form data,
 * and emits the login action
 * with form data and callback.
 *
 * @param  {SyntheticEvent} e - React form event
 * @return {Object} dispatches loginRequest with formData
 */
export function handleLogin(e) {
  e.preventDefault();
  e.stopPropagation();

  // Get the data from the form
  const form = e.currentTarget;
  const formData = getFormData(form, { trim: true });

  /* @TODO validation */
  // just "required" in the HTML right now

  // update the app state
  console.log(formData)
  return dispatch(loginRequest(formData));
}

const Login = props => (
  <form onSubmit={e => handleLogin(e)}>
    <input type="text" name="username" placeholder="username"
      required />
    <input type="password" name="password" placeholder="pass phrase"
      required />
    <button type="submit">Login</button>
  </form>
);

// Login.propTypes = {
//
// };

export default Login;
