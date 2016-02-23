import { expect, AssertionError } from 'chai';
import expectUserCredentials from '../../src/expectations/expectUserCredentials';

describe("EXPECTATION: expectUserCredentials", () => {
  const username = 'garion';
  const password = 'redheadeddryad';

  const goodValue = { username, password };
  const badValues = [
    undefined,
    true,
    'username',
    {},
    { username },
    { username: 21, password },
    { password },
    { username, password: false }
  ];

  it(`should return true when passed ${JSON.stringify(goodValue)}`, () => {
    expect(expectUserCredentials(goodValue)).to.be.true;
  });

  badValues.forEach(value => {
    it(`should throw AssertionError for ${JSON.stringify(value)}`, () => {
      expect(() => expectUserCredentials(value)).to.throw(AssertionError);
    });
  });
});
