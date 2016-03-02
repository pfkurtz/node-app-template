import { expect } from 'chai'
import { isFSA } from 'flux-standard-action'

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER
} from '../../constants/actions'
import { LOGIN_FAILURE } from '../../constants/failures'

/*
 * Reducer for the `user` store, ie, the current logged-in user, or null.
 * Actions' payloads should always be undefined,
 * or objects with user record properties.
 */
export default function currentUserReducer(state = null, action = {}) {
  if (process.env.NODE_ENV !== 'production') {
    expect(isFSA(action)).to.be.true
  }

  switch (action.type) {

    case LOGIN_REQUEST:
    case LOGIN_FAILURE:
    case LOGOUT:
      return null

    case LOGIN_SUCCESS:
      if (process.env.NODE_ENV !== 'production') {
        /* @TODO own module, only username (once validation functions written) */
        expect(action.payload).to.be.an('object')
          .to.have.property('username')
        expect(action.payload.username).to.be.a('string')
      }
      return action.payload

    case UPDATE_USER:
      if (!state) return null

      if (process.env.NODE_ENV !== 'production') {
        expect(action.payload).to.be.an('object')
          .to.have.property('username')
        expect(action.payload.username).to.be.a('string')
        /* @TODO own module, expect nothing but valid client-ok user fields */
      }

      // create fresh, updated user record
      return Object.assign({}, state, action.payload)

    default:
      return state
  }
}
