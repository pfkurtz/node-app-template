import { LOGIN, LOGOUT } from '../../constants/actions';

export default function user(
  state = null,
  action = { type: undefined }
) {
  switch (action.type) {
    case LOGIN:
      console.log("LOGIN reducer", action);
      return action.payload || null;

    case LOGOUT:
      return null;

    default:
      return state;
  }
}
