import { expect } from 'chai';
import proxyquire from 'proxyquire';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

// Child Component stubs
const DevTools = () => <div />;
const Header = () => <div />;

const App = proxyquire('../../../src/client/components/App/App.dev', {
  './DevTools': {
    __esModule: true,
    '@noCallThru': true,
    default: DevTools
  },
  '../layout/Header': {
    __esModule: true,
    '@noCallThru': true,
    default: Header
  }
}).default;

describe('COMPONENT: App.dev', () => {
  const renderer = createRenderer();

  renderer.render(
    <App count={0} location={{ path: '/' }}
      userRecord={{}} />
  );

  const appWithoutUser = renderer.getRenderOutput();
  const children = appWithoutUser.props.children;

  it('should render Header as first child', () => {
    expect(children[0].type).to.equal(Header);
  });

  it('should have a last child of type DevTools', () => {
    expect(children[children.length-1].type)
      .to.equal(DevTools);
  });

});
