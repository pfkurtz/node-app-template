import { expect } from 'chai';

import insert from '../rethink/insert';
import { USERS_TABLE } from '../common/constants/tables';
import { PROD } from '../common/constants/env';

/**
 * Validate new user data and call rethink api,
 * or return e
 * @param  {[type]} userData [description]
 * @return {[type]}          [description]
 */
export default function createUser(userData) {
  if (process.env.NODE_ENV !== PROD) {
    // validate userData
    expect(userData).to.be.an('object');
    expect(userData).to.have.property('username')
      .to.be.a('string');
    expect(userData).to.have.property('password')
      .to.be.a('string');
  }

  return insert(USERS_TABLE, userData);
}
