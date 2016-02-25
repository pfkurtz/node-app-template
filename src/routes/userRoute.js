import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import User from '../client/components/User';
import UserNotFound from '../client/components/errors/UserNotFound';

import store from '../client/store';

function userProps(state) {
  return {
    user: state.userRecord
  };
}

const ConnectedUser = connect(userProps)(User);

const userRoute = {
  path: 'user/:username',
  component: ConnectedUser,
  onEnter(props) {
    const user = store.getState().userRecord.user;
    if (!user) this.component = UserNotFound;
    console.log("UserRoute onEnter", props, this);
  }
};

export default userRoute;
