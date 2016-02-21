import { expect } from 'chai';

import userStream from '../rethink/streams/userStream';
import { PROD } from '../constants/env';

/**
 * Promise to get a user document from rethink with changes().
 * @param  {string} identifier - id, username, or email
 * @return {Promise} Promise for user doc
 */
export default function readUser(identifier) {
  if (process.env.NODE_ENV !== PROD) {
    expect(identifier).to.be.a('string');
  }
  return userStream(identifier);
}
