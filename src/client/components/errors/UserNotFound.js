import React from 'react';
import { Link } from 'react-router';

const UserNotFound = props => (
  <div>
    <p>
      <strong>Nobody with that username.</strong>
    </p>

    <Link to="/">home</Link>
  </div>
);

export default UserNotFound;
