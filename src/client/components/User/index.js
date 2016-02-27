import React, { PropTypes } from 'react'

import CurrentUserProfile from './CurrentUserProfile'
import UserProfile from './UserProfile'
import UserNotFound from '../errors/UserNotFound'

const User = props => (
  <div>
    <Choose>
      <When condition={props.user}>
        <UserProfile user={props.user} />
      </When>

      <When condition={props.isCurrentUser/* && ! "?public_profile"*/}>
        <CurrentUserProfile user={props.user} />
      </When>

      <Otherwise>
        <UserNotFound username={props.params.username} />
      </Otherwise>
    </Choose>
  </div>
)

User.propTypes = {
  user: PropTypes.object,
  isCurrentUser: PropTypes.bool
}

export default User
