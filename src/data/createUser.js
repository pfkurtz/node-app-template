import { expect } from 'chai';

import insert from '../rethink/insert';

import { USERS_TABLE } from '../common/constants/tables';
import { PROD } from '../common/constants/env';
import {
  PASSWORD_VALIDATION_ERROR,
  PASSWORD_VALIDATION_PATTERN,
  USERNAME_VALIDATION_ERROR,
  USERNAME_VALIDATION_PATTERN
} from '../common/constants/validation';

/**
 * Validate new user data and return promise from  rethink api,
 * or return validation error string.
 * @param  {object} userData - new user document
 * @return {Promise} rethink call or validation error
 */
export default function createUser(userData) {
  if (process.env.NODE_ENV !== PROD) {
    expect(userData).to.be.an('object');
    expect(userData).to.have.property('username')
      .to.be.a('string');
    expect(userData).to.have.property('password')
      .to.be.a('string');
  }

  // validation @TODO own module
  if (!userData.username.match(USERNAME_VALIDATION_PATTERN)) {
    return Promise.resolve(USERNAME_VALIDATION_ERROR);

  } else if (!userData.password.match(PASSWORD_VALIDATION_PATTERN)) {
    return Promise.resolve(PASSWORD_VALIDATION_ERROR);
  }

  const userDoc = {
    username: userData.username,
    password: userData.password
  };

  return insert(USERS_TABLE, userDoc);
}
