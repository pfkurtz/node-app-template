import { LOGIN, LOGOUT } from '../constants/actions';

export function login() {
  return {
    type: LOGIN
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
