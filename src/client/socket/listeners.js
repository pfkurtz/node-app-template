import {
  UPDATE_USER
} from '../../constants/actions';

import { updateUser } from '../../actions/user';

export const updateUserListener = {
  ACTION: UPDATE_USER,
  action: updateUser,
  // validation: validateUserDoc
};
