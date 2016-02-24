import React, { PropTypes } from 'react';

import Login from '../User/Login';
import Logout from '../User/Logout';

const logoutStyle = {
  float: 'right'
};

const Header = props => (
  <header>
    <If condition={props.userRecord.user}>
      <strong>Welcome, {props.userRecord.user.username}!</strong>

      <div style={logoutStyle}>
        <Logout />
      </div>

    <Else />
      <Login />
    </If>
  </header>
);

Header.propTypes = {
  userRecord: PropTypes.object.isRequired
};

export default Header;
