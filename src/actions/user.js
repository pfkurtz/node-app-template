import { expect } from 'chai'
import { PROD } from '../constants/env'

import expectString from '../expectations/expectString'

import {
  CHECK_FOR_SIGNED_JWT,
  LOGIN_REQUEST,
  LOGIN_FAILURE_ERROR,
  LOGIN_FAILURE_CREDENTIALS,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_USER_STATUS,
  UPDATE_USER
} from '../constants/actions'

export function checkForSignedJWT(authToken) {
  if (process.env.NODE_ENV !== PROD) {
    if (authToken) {
      expect(authToken).to.be.an('object')
      expect(authToken).to.have.property('username')
    } else {
      expect(authToken).to.be.null
    }
  }

  return {
    type: CHECK_FOR_SIGNED_JWT,
    payload: authToken
  }
}

export function loginRequest(credentials) {
  if (process.env.NODE_ENV !== PROD) {
    expect(credentials).to.be.an('object')
    expect(credentials).to.have.property('username')
    expect(credentials.username).to.be.a('string')
    expect(credentials).to.have.property('password')
    expect(credentials.password).to.be.a('string')
  }

  return {
    type: LOGIN_REQUEST,
    payload: credentials
  }
}

export function loginSuccess(user) {
  if (process.env.NODE_ENV !== PROD) {
    expect(user).to.be.an('object')
    expect(user).to.have.property('username')
    expect(user.username).to.be.a('string')
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
  }
}

export function updateUser(userInfo) {
  if (process.env.NODE_ENV !== PROD) {
    expect(userInfo).to.be.an('object')
  }

  return {
    type: UPDATE_USER,
    payload: userInfo
  }
}

export function setUserStatus(status) {
  if (process.env.NODE_ENV !== 'production') expectString(status)
  return {
    type: SET_USER_STATUS,
    payload: status
  }
}
