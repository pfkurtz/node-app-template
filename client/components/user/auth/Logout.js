import React, { PropTypes } from 'react';
import getFormData from 'get-form-data';

import { logout } from '../../../actions/user';
import handleLogout from './helpers/handleLogout';

const Logout = props => (
  <button onClick={e => handleLogout(e, props.onClick)}>
    Logout <strong>{props.username}</strong>
  </button>
);

Logout.propTypes = {
  onClick: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

export default Logout;
