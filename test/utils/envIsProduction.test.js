import { expect} from 'chai';
import { DEV, PROD } from '../../src/constants/env';

import envIsProduction from '../../src/utils/envIsProduction';

describe("UTIL: envIsProduction", () => {
  const currentNodeEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = currentNodeEnv;
  });

  it('should return false when NODE_ENV is development', () => {
    process.env.NODE_ENV = DEV;
    expect(envIsProduction()).to.be.false;
  });

  it(`should return true when NODE_ENV is ${PROD}`, () => {
    process.env.NODE_ENV = PROD;
    expect(envIsProduction()).to.be.true;
  });
});
