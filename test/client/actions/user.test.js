import { expect, AssertionError } from 'chai';

import { LOGIN, LOGOUT } from '../../../client/constants/actions';
import { login, logout } from '../../../client/actions/user';

describe('ACTIONS: login', () => {
  it('should have type LOGOUT', () => {
    expect(login().type).to.equal(LOGIN);
  });
});

describe('ACTIONS: logout', () => {
  it('should have type LOGOUT', () => {
    expect(logout().type).to.equal(LOGOUT);
  });
});
