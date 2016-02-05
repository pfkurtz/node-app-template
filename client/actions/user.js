import { expect } from 'chai';
import { PROD } from '../../common/constants/env';

import {
  LOGIN_REQUEST,
  LOGIN_FAILURE_ERROR,
  LOGIN_FAILURE_CREDENTIALS,
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER
} from '../constants/actions';

export function loginRequest(credentials) {
  if (process.env.NODE_ENV !== PROD) {
    expect(credentials).to.be.an('object');
    expect(credentials).to.have.property('username');
    expect(credentials.username).to.be.a('string');
    expect(credentials).to.have.property('password');
    expect(credentials.password).to.be.a('string');
  }

  return {
    type: LOGIN_REQUEST,
    payload: credentials
  };
}

export function loginSuccess(user) {
  if (process.env.NODE_ENV !== PROD) {
    expect(user).to.be.an('object');
    expect(user).to.have.property('username');
    expect(user.username).to.be.a('string');
  }

  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}

export function loginFailureError() {
  return {
    type: LOGIN_FAILURE_ERROR
  }
}

export function loginFailureCredentials() {
 return {
   type: LOGIN_FAILURE_CREDENTIALS
 }
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function updateUser(userInfo) {
  if (process.env.NODE_ENV !== PROD) {
    expect(userInfo).to.be.an('object');
  }

  return {
    type: UPDATE_USER,
    payload: userInfo
  }
}
