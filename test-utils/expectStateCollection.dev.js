import { expect } from 'chai';

/**
 * Reusable assertion for a 2nd-level reducer state.
 * @param  {object} state { ids[], dict{} }
 * @return {boolean} Returns true if no AssertionError.
 */
export default function(state) {
  expect(state).to.be.instanceOf(Object);
  expect(state.ids).to.be.instanceOf(Array);
  expect(state.dict).to.be.instanceOf(Object);
  return true;
}
