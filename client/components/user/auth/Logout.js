import React, { PropTypes } from 'react';
import getFormData from 'get-form-data';

import { dispatch } from '../../../store';
import { logout } from '../../../actions/user';

const Logout = props => (
  <button onClick={() => dispatch(logout())}>
    Logout <strong>{props.username}</strong>
  </button>
);

Logout.propTypes = {
  username: PropTypes.string.isRequired
};

export default Logout;
