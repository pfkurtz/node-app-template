import { expect, AssertionError } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe("DATA API: getUserStream", () => {
  let getUserStream, userStream;
  const idstring = 'idstring';

  beforeEach(() => {
    userStream = sinon.spy((table, id) => {
      return Promise.resolve({});
    });

    getUserStream = proxyquire('../../../src/data/streams/getUserStream', {
      '../../rethink/streams/userStream': {
        __esModule: true,
        '@noCallThru': true,
        default: userStream
      }
    }).default;
  });

  it('should throw AssertionError if not passed <string>identifier', () => {
    expect(() => getUserStream()).to.throw(AssertionError);
  });

  it('should call userStream', () => {
    getUserStream(idstring);
    expect(userStream.called).to.be.true;
  });

  it('should call it with "idstring"', () => {
    getUserStream(idstring);
    expect(userStream.calledWith(idstring)).to.be.true;
  });

  it('should return a Promise that resolves to an object', () => {
    getUserStream(idstring)
    .then(result => {
      expect(result).to.be.an('object');
    });
  });

});
