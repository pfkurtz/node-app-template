// import chai, { expect } from 'chai';
// import React from 'react';
// import { createRenderer, Simulate } from 'react-addons-test-utils';
// import proxyquire from 'proxyquire';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
//
// chai.use(sinonChai);

/*let cb, Logout, sandbox;

const renderer = createRenderer();
const username = 'egwene';

describe('COMPONENT: Logout', () => {

  before(() => {
    sandbox = sinon.sandbox.create();

    cb = sinon.spy();

    Logout = proxyquire('../../../../../client/components/user/auth/Logout', {
      './helpers/handleLogout': {
        __esModule: true,
        '@noCallThru': true,
        default: cb
      }
    });
  });

  after(() => {
    sandbox.restore();
  });

  renderer.render(
    <Logout username={username} onClick={cb} />
  );
  const logout = renderer.getRenderOutput();

  it(`should be a button`, () => {
    expect(logout.type).to.equal('button');
  });

  it('should call onClick when clicked', () => {
    logout.props.onClick();
    expect(cb).to.have.been.called;
  });

});*/
