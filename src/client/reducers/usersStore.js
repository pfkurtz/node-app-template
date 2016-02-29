import { keyBy } from 'lodash'

import {
  // DELETE_USERS,
  UPDATE_USERS
} from '../../constants/actions'

/*
 * Reducer for the `users` store.
 * Dictioary of user object (public fields only), by
 */
export default function usersStoreReducer(state = {}, action = {}) {
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
