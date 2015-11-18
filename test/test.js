import {expect} from 'chai';
import foo from '../common/foo';

describe('foo', () => {
    it('should return "bar", a string passed in, or throw an Error', () => {
        const string = "string";
        const bool = true;

        expect(foo()).to.equal('bar');
        expect(foo(string)).to.equal(string);
        expect(foo(bool)).to.throw(Error);
    });
});
