import { UPDATE_USERS } from '../../constants/actions';

export default function(userDoc) {
  // expect object

  return {
    type: UPDATE_USERS,
    payload: userDoc
  }
}
