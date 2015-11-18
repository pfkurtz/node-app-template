import {expect} from 'chai';
import foo from '../foo';

describe('foo', () => {
    it('should be bar', () => {
        expect(foo()).to.equal('bar');
    });
});
