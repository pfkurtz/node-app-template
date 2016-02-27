import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const UserNotFound = props => (
  <div>
    <h1>404: "{props.username}" not found</h1>
    <Link to="/">home</Link>
  </div>
)

UserNotFound.propTypes = {
  username: PropTypes.string.isRequired
}

export default UserNotFound
