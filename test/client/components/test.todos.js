import { expect } from 'chai';
import { todosApp } from '../../../client/components/todos';

describe('todosApp', () => {
    it('should return a non-empty array', () => {
        const initState = todosApp();
        expect(initState).to.be.instanceOf(Array);
        expect(initState).to.not.be.empty;
    });
});