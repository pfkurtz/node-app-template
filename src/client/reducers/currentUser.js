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
      return null

    case LOGIN_FAILURE:
      return null

    case LOGIN_SUCCESS:
      return action.payload

    case LOGOUT:
      return null

    case UPDATE_USER:
      /* @TODO own module */
      if (!state) return null

      /* @TODO validate payload here? */

      // create fresh, updated user record
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}
