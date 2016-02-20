import { expect } from 'chai';
import staticPromise from '../../src/utils/staticPromise';

describe("UTIL: staticPromise", () => {
  it('should return a promise', () => {
    expect(staticPromise()).to.be.a('promise');
  });

  const testString = 'Durnik';
  const testArray = [testString, 'Silk'];

  it('should resolve to the first paramter it\'s passed (string)', () => {
    staticPromise(testString)
      .then(result => {
        expect(result).to.equal(testString);
      });
  });

  it('should resolve to the first paramter it\'s passed (array)', () => {
    staticPromise(testArray)
      .then(result => {
        expect(result).to.equal(testArray);
      });
  });
});
