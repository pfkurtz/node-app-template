import React, { PropTypes } from 'react';
import getFormData from 'get-form-data';

import { LOGIN_REQUEST } from '../../../constants/actions';
import { PROD } from '../../../../common/constants/env';

import loginRequest from '../../../actions/user';

/**
 * Handles the onSubmit event for the form,
 * @TODO validates the form data,
 * and emits the login action
 * with form data and callback.
 *
 * @param  {SyntheticEvent} e - React form event
 * @param  {function} submitCallback - callback taking action
 * @returns {event} LOGIN
 */
function handleSubmit(e, submitCallback) {
  e.preventDefault();
  e.stopPropagation();

  // Get the data from the form
  const form = e.currentTarget;
  const formData = getFormData(form, { trim: true });

  /* @TODO validation */
  // just "required" in the HTML right now

  // update the app state
  // NB this gets called to update store (latency compensation)
  // and passed on to the event handler,
  // to be called when server responds
  submitCallback({
    type: LOGIN_REQUEST,
    payload: {
      // drop the password because action logs persist
      // even if the reducer didn't put it in the store
      username: formData.username
    }
  });

  // emit LOGIN_REQUEST event with form data and callback
  return EE.emit(LOGIN_REQUEST, formData, submitCallback);
}

const Login = props => (
  <form onSubmit={e => handleSubmit(e, props.onSubmit)}>
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
