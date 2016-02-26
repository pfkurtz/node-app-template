import {
  LOGIN_REQUEST,
  LOGIN_FAILURE_ERROR,
  LOGIN_FAILURE_CREDENTIALS,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER
} from '../../constants/actions';

import { NO_USER_RECORD } from '../../constants/failures';

/*
 * Reducer for the `user` store, ie, the current logged-in user, or null.
 * Actions' payloads should always be undefined,
 * or objects with user record properties.
 */
export default function user(state = null, action) {
  // Each imported action is a case
  switch (action.type) {

    case LOGIN_REQUEST:
      return null;

    case LOGIN_FAILURE_ERROR:
      return null;

    case LOGIN_FAILURE_CREDENTIALS:
      return null;

    case LOGIN_SUCCESS:
      return action.payload;

    case LOGOUT:
      return null;

    case UPDATE_USER:
      /* @TODO own module */
      if (!state) {
        throw new Error(NO_USER_RECORD +
          "trying to update local user record");
      }

      /* @TODO validate payload here? */

      // create fresh, updated user record
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}
