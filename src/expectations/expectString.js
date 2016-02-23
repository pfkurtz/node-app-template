import { expect } from 'chai';

/**
 * [expectString description]
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */
export default function expectString(string) {
  expect(string).to.be.a('string');
  return true;
}
