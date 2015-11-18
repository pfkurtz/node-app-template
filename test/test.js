import {expect} from 'chai';
console.log(expect);
import foo from '../foo';

describe('foo', () => {
    it('should be bar', () => {
        expect(foo()).to.equal('bar');
    });
});
