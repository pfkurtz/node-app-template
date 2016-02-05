import {
  LOGIN_REQUEST,
  LOGIN_FAILURE_ERROR,
  LOGIN_FAILURE_CREDENTIALS,
  LOGIN_SUCCESS,
  LOGOUT,

} from '../../constants/actions';

import { NO_USER_RECORD } from '../../constants/errors';

const defaultState = {
  userState: LOGOUT,
  user: null
};

/**
 * Reducer for the 'user' store.
 * Actions' payloads should always be undefined,
 * or objects with user record properties.
 *
 * @param  {object} state  =             defaultState [description]
 * @param  {object} action =             {            type:         undefined } [description]
 * @return {object}        [description]
 */
export default function user(
  state = defaultState,
  action = { type: undefined }
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      // this is the submitting request case
      // @TODO this should run ASA user submits
      // or ASA
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

      // create fresh, updated user record
      const user = Object.assign({}, state.user, action.payload);

      return {
        userState: LOGIN_SUCCESS,
        user
      };

    default:
      return defaultState;
  }
}
