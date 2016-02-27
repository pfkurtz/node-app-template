import { call, put, race, take } from 'redux-saga'

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
  updateUser,
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

      const { logoutAction, updateAction } = yield race({
        logoutAction: take(LOGOUT),
        updateAction: take(UPDATE_USER)
      })

      if (logoutAction) {
        // server logout resolves itself asynchronously
        emitLogout()
        // logout client
        yield put(logout())
        yield put(setUserStatus(LOGOUT))

        username = null
      }

      if (updateAction && updateAction.payload.username === username) {
        console.log("was it here?")
        yield put(updateUser(updateAction.payload))
      }

    } else {
      /* @TODO own module loginSaga */

      // OK, no user, wait for a LOGIN_REQUEST
      const { payload } = yield take(LOGIN_REQUEST)

      // emit login request and await response code
      const loginResponse = yield call(emitLogin, payload)

      switch (loginResponse) {

        case LOGIN_SUCCESS:
          username = payload.username
          yield put(loginSuccess({ username }))
          yield put(setUserStatus(LOGIN_SUCCESS))
          break

        case LOGIN_FAILURE:
          yield put(loginFailureCredentials())
          yield put(setUserStatus(LOGOUT))
          break

        default:
          // this might only be for dev,
          // not sure if we need other kinds of failure
          // in which case this could simplify to if/else (with bool res)
          throw new Error(`${MISSING_VALUE}: no recognized response code`)
      }
    }

    firstLoop = false
  }
}
