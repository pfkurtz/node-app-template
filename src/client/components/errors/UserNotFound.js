import React from 'react';
import { Link } from 'react-router';

const UserNotFound = props => (
  <div>
    <h1>Nobody with that username.</h1>
    <Link to="/">home</Link>
  </div>
);

export default UserNotFound;
