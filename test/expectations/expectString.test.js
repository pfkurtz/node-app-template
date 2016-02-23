import { expect, AssertionError } from 'chai';
import expectString from '../../src/expectations/expectString';

describe("EXPECTATION: expectString", () => {
  const goodValues = ['a', 'Garion becomes Belgarion'];
  const badValues = [
    goodValues,
    {},
    null,
    true,
    Promise.resolve(() => undefined)
  ];

  goodValues.forEach((value) => {
    it(`should return true if passed a string: "${value}"`, () => {
      expect(expectString(value)).to.be.true;
    });
  });

  badValues.forEach((value) => {
    it(`should throw an AssertionError if passed a non-string: "${value}"`, () => {
      expect(() => expectString(value)).to.throw(AssertionError);
    });
  });

  it('should throw an AssertionError if not passed a parameter', () => {
    expect(() => expectString()).to.throw(AssertionError);
  });

});
