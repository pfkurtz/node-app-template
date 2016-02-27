import { call, put, take } from 'redux-saga'

import {
  CHECK_FOR_SIGNED_JWT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER
} from '../../constants/actions'
import { LOGIN_FAILURE } from '../../constants/failures'
import { MISSING_VALUE } from '../../constants/errors'

import {
  loginSuccess,
  loginFailureCredentials,
  loginFailureError,
  logout,
  setUserStatus
} from '../../actions/user'

import {
  getAuthToken,
  emitLogin,
  emitLogout
} from '../socket'

/**
 * Infinite generator for user state.
 * @TODO tests
 * @return {undefined} NA
 */
export default function* userSaga() {
  const { payload } = yield take(CHECK_FOR_SIGNED_JWT)
  let username = payload ? payload.username : null
  // console.log("saga USERNAME:", username)

  // on the first loop, need to set state for
  let firstLoop = true

  while(true) {
    if (username) {

      if (firstLoop) {
        // update state
        yield put(loginSuccess({ username }))
        yield put(setUserStatus(LOGIN_SUCCESS))
      }

      /* @TODO own module logoutSaga */
      // wait for a logout event
      // @TODO race for LOGOUT or UPDATE_USER
      yield take(LOGOUT)
      // server logout resolves itself asynchronously
      emitLogout()
      // logout client
      yield put(logout())
      yield put(setUserStatus(LOGOUT))

      username = null

    } else {
      /* @TODO own module loginSaga */

      // OK, no user, wait for a LOGIN_REQUEST
      const { payload } = yield take(LOGIN_REQUEST)
      console.log("payload", payload)

      // call socket.login, which should return a promise

      const loginResponse = yield call(emitLogin, payload)
      console.log("emitLogin yield", loginResponse)

      /* @TODO make this not ugly */
      if (loginResponse === LOGIN_SUCCESS) {
        username = payload.username
        yield put(loginSuccess({ username }))
        yield put(setUserStatus(LOGIN_SUCCESS))

      } else if (loginResponse === LOGIN_FAILURE) {
        yield put(loginFailureCredentials())
        yield put(setUserStatus(LOGOUT))

      // } else if (loginResponse === LOGIN_ERROR) {
      //   yield put(loginFailureError())
      //   yield put(setUserStatus(LOGOUT))

      } else {
        throw new Error(MISSING_VALUE)
      }
    }

    firstLoop = false
  }

}
