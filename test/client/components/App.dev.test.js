import chai, { expect } from 'chai';
import proxyquire from 'proxyquire';
import React, { Component } from 'react';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import { createRenderer } from 'react-addons-test-utils';

chai.use(sinonChai);

// child component stubs
// class DevTools extends Component {
//   render() {
//     return <div />;
//   }
// }

// const DevTools = React.createClass({
//   render() {
//     return <div />;
//   }
// });

const DevTools = () => (<div>
 hello world
</div>);

// import App from '../../../client/components/App/App.dev';

const App = proxyquire('../../../client/components/App/App.dev', {
  './DevTools': {
    __esModule: true,
    '@noCallThru': true,
    default: DevTools
  }
}).default;

describe('COMPONENT: App.dev', () => {
  const renderer = createRenderer();

  /* @TODO really spec this shit out */
  it('should have a last child of type DevTools', () => {
    renderer.render(<App dispatch={() => {}} count={0}
      userRecord={{ user: { username: 'pat' } }} />);

    const app = renderer.getRenderOutput();

    expect(app.props.children[app.props.children.length-1].type)
      .to.equal(DevTools);
  });

  // Start by writing a bunch of should statements

  it('should render Login if passed a user', () => {

  });

  it('should ', () => {

  });

  it('should ', () => {

  });

  it('should ', () => {

  });

  it('should ', () => {

  });

  it('should ', () => {

  });

  it('should ', () => {

  });
});
