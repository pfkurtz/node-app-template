import React from 'react';
import { Link } from 'react-router';

const NotFound = props => (
  <div>
    <h1>404</h1>
    <Link to="/">home</Link>
  </div>
);

export default NotFound;
