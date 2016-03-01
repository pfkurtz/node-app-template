import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER
} from '../../constants/actions'
import { LOGIN_FAILURE } from '../../constants/failures'
import { NO_USER_RECORD } from '../../constants/failures'

/*
 * Reducer for the `user` store, ie, the current logged-in user, or null.
 * Actions' payloads should always be undefined,
 * or objects with user record properties.
 */
export default function currentUserReducer(state = null, action = {}) {
  switch (action.type) {

    case LOGIN_REQUEST:
    case LOGIN_FAILURE:
    case LOGOUT:
      return null

    case LOGIN_SUCCESS:
      if (process.env.NODE_ENV === 'production') {
        /* @TODO expect valid payload { username } */
      }
      return action.payload

    case UPDATE_USER:
      if (!state) return null

      if (process.env.NODE_ENV === 'production') {
      /* @TODO expect valid payload { userDoc }*/
      }

      // create fresh, updated user record
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}
