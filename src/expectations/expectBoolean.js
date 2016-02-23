import { expect } from 'chai';

/**
 * Expect a boolean, return true if passes.
 * @param  {boolean} boolean - value to expect
 * @return {boolean} `boolean` is a 'boolean'
 */
export default function expectString(boolean) {
  expect(boolean).to.be.a('boolean');
  return true;
}
