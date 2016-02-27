import expectString from '../../expectations/expectString'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_USER_STATUS
} from '../../constants/actions'

export default function(state = LOGOUT, action = { type: undefined }) {
  if (process.env.NODE_ENV !== 'production') {
    const expect = require('chai').expect

    if (action.type === SET_USER_STATUS) {
      expect(action.payload).to.be.oneOf([
        LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT
      ])
    }
  }

  if (action.type === SET_USER_STATUS) return action.payload
  return state
}
