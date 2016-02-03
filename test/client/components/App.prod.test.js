import { expect } from 'chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
//import render from 'react-shallow-renderer';

import App from '../../../client/components/App/App.prod';


describe('COMPONENT: App.prod', () => {
  it('woo', () => {
    const renderer = createRenderer();
    renderer.render(<App foo='bar' onClick={() => true} />);
    const app = renderer.getRenderOutput();

    expect(app.props.onClick()).to.be.true;
    expect(app.props.foo).to.equal('bar');
  });
});
