import React, { PropTypes } from 'react';
import getFormData from 'get-form-data';

import { LOGOUT } from '../../../constants/actions';
import { PROD } from '../../../../common/constants/env';

import { logout } from '../../../actions/user';

function handleClick(e, clickCallback) {
  e.preventDefault();

  EE.emit(LOGOUT, clickCallback);
}

const Logout = props => (
  <button onClick={e => handleClick(e, props.onClick)}>
    Logout <strong>{props.username}</strong>
  </button>
);

Logout.propTypes = {
  onClick: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

export default Logout;
