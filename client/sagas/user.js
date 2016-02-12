import { put, take } from 'redux-saga';

import {
  LOGIN_REQUEST
} from '../constants/actions';

/**
 * Is there a signed JWT?
 * n: yield take(LOGIN_REQUEST);
 * y: yield take(CONNECTED_WITH|OUT_JWT);
 *
 * CONNECTED_WITHOUT -> yield take(LOGIN_REQUEST)
 * there may be puts in between yields, etc
 *
 * @return {[type]} [description]
 */
export default function* userSaga() {
  //yield take('CHECK_FOR_SIGNED_JWT');



  // OK, no user, wait for a LOGIN_REQUEST
  yield take(LOGIN_REQUEST);
  console.log(LOGIN_REQUEST + 'in user saga');


}
