import { call, put, take } from 'redux-saga';

import {
  CHECK_FOR_SIGNED_JWT,
  LOGIN_REQUEST,
  LOGIN_FAILURE_CREDENTIALS,
  LOGIN_FAILURE_ERROR,
  LOGOUT
} from '../constants/actions';

import {
  loginSuccess,
  loginFailureCredentials,
  loginFailureError,
  logout
} from '../actions/user';

import {
  getAuthToken,
  socketLogin,
  socketLogout
} from '../socket';

export default function* userSaga() {
  const { payload } = yield take(CHECK_FOR_SIGNED_JWT);
  let username = payload ? payload.username : null;

  // on the first loop, need to set state for
  let firstLoop = true;

  while(true) {
    if (username) {

      if (firstLoop) {
        // update state
        yield put(loginSuccess({ username }));
      }

      // wait for a logout event
      yield take(LOGOUT);
      // server logout resolves itself asynchronously
      socketLogout();
      // logout client
      yield put(logout());

      username = null;

    } else {
      // OK, no user, wait for a LOGIN_REQUEST
      const { payload } = yield take(LOGIN_REQUEST);

      // call socket.login, which should return a promise
      // be sure to set authToken
      const loggedIn = yield call(socketLogin, payload);

      if (loggedIn === true) {
        username = payload.username;
        yield put(loginSuccess({ username }));

      } else {
        /* @TODO  */
        yield put(loginFailureCredentials());
      }

    }

    firstLoop = false;
  }

}
