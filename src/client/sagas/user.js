import { refresh } from 'react-router';
import { call, put, take } from 'redux-saga';

import {
  CHECK_FOR_SIGNED_JWT,
  LOGIN_REQUEST,
  LOGIN_FAILURE_CREDENTIALS,
  LOGIN_FAILURE_ERROR,
  LOGOUT,
  UPDATE_USER
} from '../../constants/actions';

import {
  MISSING_VALUE,
  SOCKET_EMIT_ERROR
} from '../../constants/errors';

import {
  loginSuccess,
  loginFailureCredentials,
  loginFailureError,
  logout
} from '../../actions/user';

import {
  getAuthToken,
  emitLogin,
  emitLogout
} from '../socket';

/**
 * Infinite generator for user state.
 * @TODO tests
 * @return {undefined} NA
 */
export default function* userSaga() {
  const { payload } = yield take(CHECK_FOR_SIGNED_JWT);
  let username = payload ? payload.username : null;
  // console.log("saga USERNAME:", username);

  // on the first loop, need to set state for
  let firstLoop = true;

  while(true) {
    if (username) {

      if (firstLoop) {
        // update state
        yield put(loginSuccess({ username }));
      }

      /* @TODO own module logoutSaga */
      // wait for a logout event
      // @TODO race for LOGOUT or UPDATE_USER
      yield take(LOGOUT);
      // server logout resolves itself asynchronously
      emitLogout();
      // logout client
      yield put(logout());

      username = null;

    } else {
      /* @TODO own module loginSaga */

      // OK, no user, wait for a LOGIN_REQUEST
      const { payload } = yield take(LOGIN_REQUEST);

      // call socket.login, which should return a promise
      const loggedIn = yield call(emitLogin, payload);

      /* @TODO set authToken */

      /* @TODO make this not ugly */
      if (loggedIn === true) {
        username = payload.username;
        yield put(loginSuccess({ username }));
        refresh();

      } else if (loggedIn === LOGIN_FAILURE_CREDENTIALS) {
        yield put(loginFailureCredentials());

      } else if (loggedIn === LOGIN_FAILURE_ERROR || loggedIn === SOCKET_EMIT_ERROR) {
        yield put(loginFailureError());

      } else {
        throw new Error(MISSING_VALUE);
      }

    }

    firstLoop = false;
  }

}
