import { keyBy } from 'lodash'

import {
  UPDATE_USERS
} from '../../constants/actions'

export default function usersReducer(state = {}, action = { type: undefined }) {
  switch (action.type) {
    case UPDATE_USERS:
      // probably the only document type where we won't use `id` as key in store
      const userData = keyBy([action.payload], 'username')
      return Object.assign({}, state, userData)

    default:
      return state
  }
}
