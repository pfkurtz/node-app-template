import React, { PropTypes } from 'react'

const User = props => (
  <div>
    <h1>Welcome, {props.user.username}!</h1>
  </div>
)

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User
