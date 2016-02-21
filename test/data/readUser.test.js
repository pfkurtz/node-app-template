import { expect, AssertionError } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

import { USERS_TABLE } from  '../../src/constants/tables';

describe("DATA API: readUser", () => {
  let readUser, _get;
  const idstring = 'idstring';

  beforeEach(() => {
    _get = sinon.spy(function(table, id) {
      return Promise.resolve({});
    });

    readUser = proxyquire('../../src/data/readUser', {
      '../rethink/get': {
        __esModule: true,
        '@noCallThru': true,
        default: _get
      }
    }).default;
  });

  it('should throw AssertionError if not passed <string>identifier', () => {
    expect(() => readUser()).to.throw(AssertionError);
  });

  it('should call _get', () => {
    readUser(idstring);
    expect(_get.called).to.be.true;
  });

  it('should call it with "idstring"', () => {
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
