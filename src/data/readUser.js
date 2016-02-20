import { expect } from 'chai';

import streamUser from '../rethink/streams/streamUser';
import { PROD } from '../common/constants/env';

/**
 * Promise to get a user document from rethink.
 * @param  {string} identifier - id, username, or email
 * @return {Promise} Promise for user doc
 */
export default function readUser(identifier) {
  if (process.env.NODE_ENV !== PROD) {
    expect(identifier).to.be.a('string');
  }
  return streamUser(identifier);
}
