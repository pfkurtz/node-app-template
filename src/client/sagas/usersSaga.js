import { put, take } from 'redux-saga'

import { updateUser } from '../../actions/user'
import updateUsers from '../../actions/users/updateUsers'
import { UPDATE_USERS } from '../../constants/actions'

export default function* usersSaga() {
  while (true) {
    const { payload } = yield take(UPDATE_USERS)
    yield put(updateUsers(payload))
    /* This isn't necessary once user also subscribes to userself: */
    yield put(updateUser(payload))
  }
}
