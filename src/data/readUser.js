import { expect } from 'chai';

import _get from '../rethink/get';
import { PROD } from '../common/constants/env';
import { USERS_TABLE } from '../common/constants/tables';

/**
 * Promise to get a user document from rethink.
 * @param  {string} identifier - id, username, or email
 * @param  {boolean} [checkUsernameOrEmail] overload for login
 * @return {Promise} Promise for user doc
 */
export default function readUser(identifier, checkUsernameOrEmail) {
  if (process.env.NODE_ENV !== PROD) {
    expect(identifier).to.be.a('string');
  }

  return _get(USERS_TABLE. identifier);
}
