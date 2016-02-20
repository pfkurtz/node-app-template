import { expect, AssertionError } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe("DATA API: readUser", () => {
  let readUser, streamUser;
  const idstring = 'idstring';

  beforeEach(() => {
    streamUser = sinon.spy(function(table, id) {
      return Promise.resolve({});
    });

    readUser = proxyquire('../../src/data/readUser', {
      '../rethink/streams/streamUser': {
        __esModule: true,
        '@noCallThru': true,
        default: streamUser
      }
    }).default;
  });

  it('should throw AssertionError if not passed <string>identifier', () => {
    expect(() => readUser()).to.throw(AssertionError);
  });

  it('should call streamUser', () => {
    readUser(idstring);
    expect(streamUser.called).to.be.true;
  });

  it('should call it with "idstring"', () => {
    readUser(idstring);
    expect(streamUser.calledWith(idstring)).to.be.true;
  });

  it('should return a Promise that resolves to an object', () => {
    readUser(idstring)
    .then(result => {
      expect(result).to.be.an('object');
    });
  });

});
