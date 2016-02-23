import { expect, AssertionError } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

import { USERS_TABLE } from  '../../src/constants/tables';

describe("DATA API: readUser", () => {
  let readUser, _get, getUserByUsername;
  const idstring = 'idstring';

  beforeEach(() => {
    _get = sinon.spy((table, id) => Promise.resolve({}));
    getUserByUsername = sinon.spy(username => Promise.resolve({}))

    readUser = proxyquire('../../src/data/readUser', {
      '../rethink/get': {
        __esModule: true,
        '@noCallThru': true,
        default: _get
      },
      '../rethink/queries/getUserByUsername': {
        __esModule: true,
        '@noCallThru': true,
        default: getUserByUsername
      }
    }).default;
  });

  it('should throw AssertionError if not passed <string>identifier', () => {
    expect(() => readUser()).to.throw(AssertionError);
  });

  it('should throw AssertionError if passed non-boolean username', () => {
    expect(() => readUser('foo', 'bar')).to.throw(AssertionError);
  });

  it('should call `getUserByUsername` with username param', () => {
    readUser(idstring, true);
    expect(getUserByUsername.called).to.be.true;
  });

  it('should call it with "idstring"', () => {
    readUser(idstring, true);
    expect(getUserByUsername.calledWith(idstring)).to.be.true;
  });

  it('should call `_get` without username param', () => {
    readUser(idstring);
    expect(_get.called).to.be.true;
  });

  it(`should call it with ${USERS_TABLE}, "idstring"`, () => {
    readUser(idstring);
    expect(_get.calledWith(USERS_TABLE, idstring)).to.be.true;
  });

  it('should return a Promise that resolves to an object', () => {
    readUser(idstring)
    .then(result => {
      expect(result).to.be.an('object');
    });
  });

});
