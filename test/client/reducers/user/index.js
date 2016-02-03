import { expect, AssertionError } from 'chai';

import user from '../../../../client/reducers/user';

describe('REDUCER: user', () => {
  it('should return null without params', () => {
    expect(user()).to.be.null;
  });

  it('should return the user in the state param', () => {
    const USER = {
      username: 'patkirts'
    };

    const reducedUser = user();

    expect(reducedUser).to.equal(USER);
  });
});
