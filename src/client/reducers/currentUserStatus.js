import { expect } from 'chai'
import { isFSA } from 'flux-standard-action'

import expectString from '../../expectations/expectString'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_USER_STATUS,
  emptyFSA
} from '../../constants/actions'
import { LOGIN_FAILURE } from '../../constants/failures'

export default function(state = LOGOUT, action = emptyFSA) {
  if (process.env.NODE_ENV !== 'production') {
    expect(state).to.be.a('string')
    expect(isFSA(action)).to.be.true

    if (action.type === SET_USER_STATUS) {
      expect(action.payload).to.be.oneOf([
        LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT
      ])
    }
  }

  if (action.type === SET_USER_STATUS) return action.payload
  return state
}
