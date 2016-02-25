import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import User from '../client/components/User';
import UserNotFound from '../client/components/errors/UserNotFound';

import store from '../client/store';

function userProps(state) {
  return {
    user: state.userRecord.user,
    currentUsername: state.userRecord.user ?
      state.userRecord.user.username : null
  };
}

const ConnectedUser = connect(userProps)(User);

const userRoute = {
  path: 'user/:username',
  component: ConnectedUser
};

export default userRoute;
