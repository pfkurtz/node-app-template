import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router'

import User from '../client/components/User'

/**
 * @TODO own module, test
 * @param  {[type]} state    [description]
 * @param  {[type]} ownProps [description]
 * @return {[type]}          [description]
 */
function userProps(state, ownProps) {
  const routeUsername = ownProps.params.username
  const currentUsername = state.user ? state.user.username : null
  const isCurrentUser = routeUsername === currentUsername
  const user = isCurrentUser ? state.user : state.users[routeUsername]

  return { user, isCurrentUser }
}

const userRoute = {
  path: 'user/:username',
  component: connect(userProps)(User)
}

export default userRoute
