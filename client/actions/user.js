import { LOGIN, LOGOUT } from '../constants/actions';

export function login(user) {
  return {
    type: LOGIN,
    payload: user
  };
}

export function loginSuccess() {

}

export function loginFailureError() {

}

export function loginFailureCredentials() {

}

export function logout() {
  return {
    type: LOGOUT
  };
}
