import { keyBy } from 'lodash'

import {
  UPDATE_USERS
} from '../../constants/actions'

export default function usersReducer(state = {}, action = { type: undefined }) {
  switch (action.type) {
    case UPDATE_USERS:
      const userData = keyBy([action.payload], 'id')
      return Object.assign({}, state, userData)

    default:
      return state
  }
}
