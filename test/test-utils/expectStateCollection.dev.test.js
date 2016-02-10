import { expect, AssertionError } from 'chai';
import expectStateCollection from '../../test-utils/expectStateCollection.dev';

describe('TEST_UTIL: expectStateCollection', () => {
  it('should return `true` if supplied { ids[], dict{} }', () => {
    const param = { ids: [], dict: {} };
    expect(expectStateCollection(param)).to.be.true;
  });

  it('should throw AssertionError otherwise', () => {
    expect(() => expectStateCollection()).to.throw(AssertionError);
    expect(() => expectStateCollection({ ids: [] })).to.throw(AssertionError);
    expect(() => expectStateCollection({ ids: [], dict: 'foo '})).to.throw(AssertionError);
    expect(() => expectStateCollection(42)).to.throw(AssertionError);
    expect(() => expectStateCollection(true)).to.throw(AssertionError);
  });
})
