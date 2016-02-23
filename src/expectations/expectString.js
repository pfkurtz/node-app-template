import { expect } from 'chai';

/**
 * Expect a string, return true if passes.
 * @param  {[type]} string - value to expect
 * @return {boolean} `string` is a 'string'
 */
export default function expectString(string) {
  expect(string).to.be.a('string');
  return true;
}
