import React, { PropTypes } from 'react';

import CurrentUserProfile from './CurrentUserProfile';
import UserProfile from './UserProfile';
import UserNotFound from '../errors/UserNotFound';

const User = props => (
  <div>
  {console.log("props", props)}
    <Choose>
      <When condition={props.user && props.user.username === props.currentUsername/* && no "?public_profile"*/}>
        <OwnUserProfile user={props.user} />
      </When>

      <When condition={props.user}>
        <UserProfile user={props.user} />
      </When>

      <Otherwise>
        <UserNotFound username={props.params.username} />
      </Otherwise>
    </Choose>
  </div>
);

User.propTypes = {
  user: PropTypes.object,
  currentUsername: PropTypes.string
};

export default User;
