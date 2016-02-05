import {
  LOGIN_REQUEST,
  LOGIN_FAILURE_ERROR,
  LOGIN_FAILURE_CREDENTIALS,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER
} from '../constants/actions';

import { NO_USER_RECORD } from '../constants/errors';

const defaultState = {
  userState: LOGOUT,
  user: null
};

/*
 * Reducer for the 'user' store.
 * Actions' payloads should always be undefined,
 * or objects with user record properties.
 */
export default function userRecord(
  state = defaultState,
  action = { type: undefined }
) {
  // Each imported action is a case
  switch (action.type) {

    case LOGIN_REQUEST:
      return {
        userState: USER_LOGIN_REQUESTED,
        user: null
      };

    case LOGIN_FAILURE_ERROR:
      return {
        userState: LOGIN_FAILURE_ERROR,
        user: null
      };

    case LOGIN_FAILURE_CREDENTIALS:
      return {
        userState: LOGIN_FAILURE_CREDENTIALS,
        user: null
      };

    case LOGIN_SUCCESS:
      return {
        userState: LOGIN_SUCCESS,
        user: action.payload,
      };

    case LOGOUT:
      return {
        userState: LOGOUT,
        user: null
      };

    case UPDATE_USER:
      if (!state.user) {
        throw new Error(NO_USER_RECORD +
          "trying to update local user record");
      }

      /* @TODO validate payload here? */

      // create fresh, updated user record
      const user = Object.assign({}, state.user, action.payload);

      return {
        userState: LOGIN_SUCCESS,
        user
      };

    default:
      return state;
  }
}
