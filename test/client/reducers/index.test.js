import { expect, AssertionError } from 'chai';
import app, { initialProperties } from '../../../client/reducers';

describe('REDUCER: app', () => {
  const appState = app();

  it('should return an Object', () => {
    expect(appState).to.be.instanceOf(Object);
  });

});
