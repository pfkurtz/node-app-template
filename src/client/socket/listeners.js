import {
  UPDATE_USER,
  UPDATE_USERS
} from '../../constants/actions'

import { updateUser } from '../../actions/user'
import updateUsers from '../../actions/users/updateUsers'

export const updateUserListener = {
  actionType: UPDATE_USER,
  action: updateUser,
  // validation: validateUserDoc
}

export const updateUsersListener = {
  actionType: UPDATE_USERS,
  action: updateUsers
}
