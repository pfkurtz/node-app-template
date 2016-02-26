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
      console.log("payload", payload);

      // call socket.login, which should return a promise

      try {
        const failureError = yield call(emitLogin, payload);
        console.log("emitLogin yield", failureError);

        /* @TODO set authToken */

        /* @TODO make this not ugly */
        if (!failureError) {
          username = payload.username;
          yield put(loginSuccess({ username }));

        } else if (failureError === LOGIN_FAILURE_CREDENTIALS) {
          yield put(loginFailureCredentials());

        } else if (failureError === LOGIN_FAILURE_ERROR || failureError === SOCKET_EMIT_ERROR) {
          yield put(loginFailureError());

        } else {
          throw new Error(MISSING_VALUE);
        }

      } catch (err) {
        console.warn(err);
        yield put(loginFailureError());
      }


    }

    firstLoop = false;
  }

}
