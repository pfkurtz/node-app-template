import { expect } from 'chai';

import _get from '../rethink/get';
import { PROD } from '../constants/env';
import { USERS_TABLE } from  '../constants/tables';

/**
 * Promise to get a user document from rethink.
 * @param  {string} identifier - id, username, or email
 * @return {Promise} Promise for user doc
 */
export default function readUser(identifier) {
  if (process.env.NODE_ENV !== PROD) {
    expect(identifier).to.be.a('string');
  }
  return _get(USERS_TABLE, identifier);
}