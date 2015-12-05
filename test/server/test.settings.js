import { expect } from 'chai';
import settings from '../../common/settings';

describe("Local settings", () => {
    it("should be an object", () => {
        expect(settings).to.be.an('object');
    });
});
