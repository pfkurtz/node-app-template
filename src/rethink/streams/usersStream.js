// import { expect } from 'chai'

import r from '../'
import { USERS_TABLE } from '../../constants/tables'
// import { PROD } from '../../constants/env'

/**
 * Promise for a document stream in RethinkDB.
 * @param  {string} id - user doc id
 * @return {Promise} - users stream
 */
export default function userStream() {
  return r.table(USERS_TABLE)
  .without('password')
  .changes({ includeInitial: true })
  .run()
}
