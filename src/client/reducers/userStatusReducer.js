import { LOGOUT, SET_USER_STATUS } from '../../constants/actions';

export default function(state = LOGOUT, action = { type: undefined }) {
  // @TODO expect one of ...values, expect FSA w ..values payload
  if (action.type === SET_USER_STATUS) {
    return action.payload;
  }
  return state;
}
