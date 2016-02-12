import { call, put, take } from 'redux-saga';

import {
  LOGIN_REQUEST,
  LOGOUT
} from '../constants/actions';

import {
  loginSuccess,
  loginFailureCredentials,
  loginFailureError,
  logout
} from '../actions/user';

import { getAuthToken, login, socketlogout } from '../socket';


export default function* userSaga() {
  const { initialToken } = yield take('CHECK_FOR_SIGNED_JWT');

  let username = initialToken ? initialToken.username : null;

  let firstLoop = true;

  while(true) {

    // furthermore, is this the best pattern,
    // controlling an internal state for the generator with variable?
    if (username) {

      if (firstLoop) {
        // update state
        yield put(loginSuccess({ username }));
      }

      // wait for a logout event
      yield take(LOGOUT);
      socketlogout();
      yield put(logout());

      username = null;

      // call socket.logout, which should return a promise

    } else {
      // OK, no user, wait for a LOGIN_REQUEST
      const { payload } = yield take(LOGIN_REQUEST);

      // call socket.login, which should return a promise
      // be sure to set authToken
      const loggedIn = yield call(login, payload);

      if (loggedIn === true) {
        yield put(loginSuccess({
          username: payload.username
        }));
        username = payload.username;

      } else {
        yield put(loginFailureCredentials());
      }

    }

    firstLoop = false;
  }

}
