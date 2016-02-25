import React, { PropTypes } from 'react';

import CurrentUserProfile from './CurrentUserProfile';
import UserProfile from './UserProfile';
import UserNotFound from '../errors/UserNotFound';

const User = props => (
  <div>
    <Choose>
      <When condition={props.user && props.user.username === props.currentUsername/* && no "?public_profile"*/}>
        <OwnUserProfile user={props.user} />
      </When>

      <When condition={props.user}>
        <UserProfile user={props.user} />
      </When>

      <Otherwise>
        <UserNotFound />
      </Otherwise>
    </Choose>
  </div>
);

User.componentWillMount = function() {
  console.log(this.props);
}

User.propTypes = {
  user: PropTypes.object,
  currentUsername: PropTypes.string
};

export default User;
