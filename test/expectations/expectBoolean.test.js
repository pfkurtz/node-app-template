import { expect, AssertionError } from 'chai';
import expectBoolean from '../../src/expectations/expectBoolean';

describe("EXPECTATION: expectBoolean", () => {
  const goodValues = [true, false];
  const badValues = [
    'true',
    { foo: 'bar' },
    null,
    undefined,
    new Promise(() => undefined)
  ];

  goodValues.forEach((value) => {
    it(`should return true if passed a string: "${value}"`, () => {
      expect(expectBoolean(value)).to.be.true;
    });
  });

  badValues.forEach((value) => {
    it(`should throw an AssertionError if passed a non-string: "${value}"`, () => {
      expect(() => expectBoolean(value)).to.throw(AssertionError);
    });
  });

  it('should throw an AssertionError if not passed a parameter', () => {
    expect(() => expectBoolean()).to.throw(AssertionError);
  });

});
