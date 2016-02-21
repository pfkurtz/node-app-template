/*
@TODO sinon on `insert`
 */

import { expect, AssertionError } from 'chai';
import proxyquire from 'proxyquire';

import {
  PASSWORD_VALIDATION_ERROR,
  USERNAME_VALIDATION_ERROR
} from '../../src/constants/validation';


function insert(table, id) {
  return new Promise(() => {});
};

const createUser = proxyquire('../../src/data/createUser', {
  '../rethink/insert': {
    __esModule: true,
    '@noCallThru': true,
    default: insert
  }
}).default;

describe("DATA API: createUser", () => {
  const password = 'orbofaldur';
  const username = 'garion3-<>_asdf';

  it('should throw an AssertionError without an `<object>userData` param', () => {
    expect(() => createUser()).to.throw(AssertionError);
  });

  it('should throw an AssertionError without a `<string>username` property', () => {
    expect(() => createUser({ password })).to.throw(AssertionError);
  });

  it('should throw an AssertionError without a `<string>password` property', () => {
    expect(() => createUser({ username })).to.throw(AssertionError);
  });

  const goodUserData = { username,  password };

  it('should return a Promise with { <string>username, <string>password }, provided the properties match validation patterns', () => {
    expect(createUser(goodUserData)).to.be.a('promise');
  });

  const userWithBadUsername = { username: 'bad', password };

  it('should return a Promise with invalid username', () => {
    expect(createUser(userWithBadUsername)).to.be.a('promise');
  });

  it(`should resolve to ${USERNAME_VALIDATION_ERROR} if passed an invalid username`, () => {
    createUser(userWithBadUsername)
    .then(result => {
      expect(result).to.equal(USERNAME_VALIDATION_ERROR);
    });
  });

  const userWithBadPassWord = { username, password: 'bad' };

  console.log(createUser(userWithBadPassWord).then(res => res));

  it('should return a Promise with invalid password', () => {
    expect(createUser(userWithBadPassWord)).to.be.a('promise')
  });

  it(`should resolve to ${PASSWORD_VALIDATION_ERROR} if passed an invalid password`, () => {
    createUser(userWithBadPassWord)
    .then(result => {
      exxpect(result).to.equal(PASSWORD_VALIDATION_ERROR);
    });
  });
});
