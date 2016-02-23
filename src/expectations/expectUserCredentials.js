import { expect } from 'chai';

/**
 * Expect user credentials.
 * @param  {object} credentials - { <string>username, <string>password }
 * @return {boolean} true if all expectations pass
 */
export default function expectUserCredentials(credentials) {
  expect(credentials).to.be.an('object');
  expect(credentials).to.have.property('username');
  expect(credentials.username).to.be.a('string');
  expect(credentials).to.have.property('password');
  expect(credentials.password).to.be.a('string');
  return true;
}
