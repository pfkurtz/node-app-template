import { expect, AssertionError } from 'chai';

import {
  LOGIN_REQUEST,
  LOGIN_FAILURE_ERROR,
  LOGIN_FAILURE_CREDENTIALS,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER
} from '../../../client/constants/actions';

import {
  loginRequest,
  loginSuccess,
  loginFailureError,
  loginFailureCredentials,
  logout,
  updateUser
} from '../../../client/actions/user';

describe('ACTIONS: loginRequest', () => {
  const goodCredentials = {
    username: 'foo',
    password: 'bar'
  };
  const goodRequest = loginRequest(goodCredentials);

  it('should have type LOGIN_REQUEST with good credentials', () => {
    expect(goodRequest.type).to.equal(LOGIN_REQUEST);
  });

  it('should throw AssertionError without proper credentials', () => {
    expect(() => loginRequest()).to.throw(AssertionError);
    expect(() => loginRequest(true)).to.throw(AssertionError);
    expect(() => loginRequest(false)).to.throw(AssertionError);
    expect(() => loginRequest(undefined)).to.throw(AssertionError);
    expect(() => loginRequest('username')).to.throw(AssertionError);
    expect(() => loginRequest({})).to.throw(AssertionError);
    expect(() => loginRequest({
      username: 'foo'
    })).to.throw(AssertionError);
    expect(() => loginRequest({
      username: 'foo',
      password: 12345
    })).to.throw(AssertionError);
    expect(() => loginRequest({
      password: 'bar'
    })).to.throw(AssertionError);
    expect(() => loginRequest({
      username: { meaning: 42 },
      password: 'bar'
    })).to.throw(AssertionError);
  });
});

describe('ACTIONS: loginFailureError', () => {
  it('should have type LOGIN_FAILURE_ERROR', () => {
    expect(loginFailureError().type).to.equal(LOGIN_FAILURE_ERROR);
  });
});

describe('ACTIONS: loginFailureCredentials', () => {
  it('should have type LOGIN_FAILURE_CREDENTIALS', () => {
    expect(loginFailureCredentials().type).to.equal(LOGIN_FAILURE_CREDENTIALS);
  });
});

describe('ACTIONS: loginSuccess', () => {
  it('should have type LOGIN_SUCCESS', () => {
    expect(loginSuccess({
      username: 'foo'
    }).type).to.equal(LOGIN_SUCCESS);
  });

  it('should throw an AssertionError without param { username }', () => {
    expect(() => loginSuccess()).to.throw(AssertionError);
    expect(() => loginSuccess(true)).to.throw(AssertionError);
    expect(() => loginSuccess(false)).to.throw(AssertionError);
    expect(() => loginSuccess(undefined)).to.throw(AssertionError);
    expect(() => loginSuccess('username')).to.throw(AssertionError);
    expect(() => loginSuccess({})).to.throw(AssertionError);
  });
});

describe('ACTIONS: logout', () => {
  it('should have type LOGOUT', () => {
    expect(logout().type).to.equal(LOGOUT);
  });
});

describe('ACTIONS: updateUser', () => {
  const value = updateUser({});

  it('should have type UPDATE_USER', () => {
    expect(value.type).to.equal(UPDATE_USER);
  });

  if('should have an object payload', () => {
    expect(value.payload).to.be.an('object');
  });

  it('should throw an AssertionError if called without object param', () => {
    expect(() => updateUser()).to.throw(AssertionError);
    expect(() => updateUser(true)).to.throw(AssertionError);
    expect(() => updateUser(false)).to.throw(AssertionError);
    expect(() => updateUser(undefined)).to.throw(AssertionError);
    expect(() => updateUser('username')).to.throw(AssertionError);
  });
});
