import { expect, AssertionError } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe("DATA API: readUser", () => {
  let _get;
  let readUser;

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
    readUser('idstring');
    expect(_get.called).to.be.true;
  });

  it('should return a Promise that resolves to an object', () => {
    readUser('idstring')
    .then(result => {
      expect(result).to.be.an('object');
    });
  });
});
