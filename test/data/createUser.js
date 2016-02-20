import { expect, AssertionError } from 'chai';
import proxyquire from 'proxyquire';

function insert(table, id) {
  return new Promise(() => {
    return setTimeout(() => {}, 1500);
  });
};

const createUser = proxyquire('../../src/data/createUser', {
  '../rethink/insert': {
    __esModule: true,
    '@noCallThru': true,
    default: insert
  }
}).default;

describe("DATA API: createUser", () => {
  it('should throw an AssertionError without an `<object>userData` param', () => {
    expect(() => createUser()).to.throw(AssertionError);
  });

  it('should throw an AssertionError without a `<string>username` property', () => {
    expect(() => createUser({
      password: 'orbofaldur'
    })).to.throw(AssertionError);
  });

  it('should throw an AssertionError without a `<string>password` property', () => {
    expect(() => createUser({
      username: 'garion'
    })).to.throw(AssertionError);
  });

  const goodUserData = {
    username: 'garion',
    password: 'orbofaldur'
  }

  it('should return a Promise with { <string>username, <string>password }', () => {
    expect(createUser(goodUserData)).to.be.a('promise');
  });
});
