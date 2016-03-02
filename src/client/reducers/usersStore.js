import { expect } from 'chai'
import { isFSA } from 'flux-standard-action'
import { keyBy } from 'lodash'

import {
  // DELETE_USERS,
  UPDATE_USERS,
  emptyFSA
} from '../../constants/actions'

/*
 * Reducer for the `users` store.
 * Dictioary of user object (public fields only), by
 */
export default function usersStoreReducer(state = {}, action = emptyFSA) {
  if (process.env.NODE_ENV !== 'production') {
    expect(state).to.be.an('object')
    expect(isFSA(action)).to.be.true
  }

  switch (action.type) {

    case UPDATE_USERS:
      // expect user doc

      // probably the only document type where we won't use `id` as key in store
      const userData = keyBy([action.payload], 'username')
      return Object.assign({}, state, userData)

    default:
      return state
  }
}
