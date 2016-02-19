import React, { PropTypes } from 'react';
import getFormData from 'get-form-data';

import { dispatch } from '../../../store';
import { logout } from '../../../actions/user';

const Logout = props => (
  <button onClick={() => dispatch(logout())}>Logout</button>
);

export default Logout;
