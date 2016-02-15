import { expect } from 'chai';
import proxyquire from 'proxyquire';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

// Child Component stubs
const Counter = () => <div />;
const DevTools = () => <div />;
const Login = () => <div />;
const Logout = () => <div />;

const App = proxyquire('../../../client/components/App/App.dev', {
  '../Counter': {
    __esModule: true,
    '@noCallThru': true,
    default: Counter
  },
  './DevTools': {
    __esModule: true,
    '@noCallThru': true,
    default: DevTools
  },
  '../user/auth/Login': {
    __esModule: true,
    '@noCallThru': true,
    default: Login
  },
  '../user/auth/Logout': {
    __esModule: true,
    '@noCallThru': true,
    default: Logout
  }
}).default;

describe('COMPONENT: App.dev without user', () => {
  const renderer = createRenderer();

  renderer.render(
    <App count={0}
      userRecord={{}} />
  );

  const appWithoutUser = renderer.getRenderOutput();
  const children = appWithoutUser.props.children;

  it('should render Login as first child', () => {
    expect(children[0].type).to.equal(Login);
  });

  it('should render Counter second to last', () => {
    expect(children[children.length-2].type)
      .to.equal(Counter);
  });

  /* @TODO really spec this shit out */
  it('should have a last child of type DevTools', () => {
    expect(children[children.length-1].type)
      .to.equal(DevTools);
  });

});

describe('COMPONENT: App.dev with user', () => {
  const renderer = createRenderer();

  renderer.render(<App count={0}
    userRecord={{ user: {} }} />);

  const appWithUser = renderer.getRenderOutput();
  const children = appWithUser.props.children;

  it('should render Logout as first child', () => {
    expect(children[0].type).to.equal(Logout);
  });

  it('should render Counter second to last', () => {
    expect(children[children.length-2].type)
      .to.equal(Counter);
  });

  /* @TODO really spec this shit out */
  it('should have a last child of type DevTools', () => {
    expect(children[children.length-1].type)
      .to.equal(DevTools);
  });

});
