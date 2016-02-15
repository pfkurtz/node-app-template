import React from 'react';
import { Link } from 'react-router';

const NotFound = props => (
  <div>
    <p>
      <strong>Nothing Found at this Route.</strong>
    </p>

    <Link to="/">home</Link>
  </div>
);

export default NotFound;
