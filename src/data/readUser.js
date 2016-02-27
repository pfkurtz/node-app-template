import _get from '../rethink/get'
import getUserByUsername from '../rethink/queries/getUserByUsername'

import envIsProduction from '../utils/envIsProduction'
import expectBoolean from '../expectations/expectBoolean'
import expectString from '../expectations/expectString'

import { PROD } from '../constants/env'
import { USERS_TABLE } from  '../constants/tables'

/**
 * Promise to get a user document from rethink.
 * @param  {string} identifier - id, username, or email
 * @param {boolean} [username] - whether to look up by username instead of id
 * @return {Promise} Promise for user doc
 */
export default function readUser(identifier, username) {
  if (!envIsProduction()) {
    expectString(identifier)
    if (username !== undefined) expectBoolean(username)
  }

  if (username) return getUserByUsername(identifier)
  return _get(USERS_TABLE, identifier)
}
