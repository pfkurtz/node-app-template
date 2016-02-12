import { put, take } from 'redux-saga';

import {
  LOGIN_REQUEST
} from '../constants/actions';

/**
 * Is there a signed JWT?
 *
 * @return {[type]} [description]
 */
export default function* userSaga() {
  // is this the best pattern for testability?
  // ie, call socket api
  let { authToken } = yield take('CHECK_FOR_SIGNED_JWT', authToken);
  console.log('In user saga with JWT:', authToken);

  while(true) {

    // furthermore, is this the best pattern,
    // controlling an internal state for the generator with variable?
    if (authToken) {
      // wait for a logout event
      yield take(LOGOUT);
      console.log("LOGOUT request");
      yield put(LOGOUT);

      // call socket.logout, which should return a promise

    } else {
      // OK, no user, wait for a LOGIN_REQUEST
      const {payload} = yield take(LOGIN_REQUEST, payload);
      console.log(LOGIN_REQUEST, payload);

      // call socket.login, which should return a promise
      // be sure to set authToken
    }
  }

}
