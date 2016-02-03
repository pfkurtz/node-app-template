import { expect } from 'chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
//import render from 'react-shallow-renderer';

import App from '../../../client/components/App/App.dev';
import DevTools from '../../../client/components/App/DevTools';

describe('COMPONENT: App.dev', () => {
  it('woo', () => {
    const renderer = createRenderer();
    renderer.render(<App store={{}} />);
    const app = renderer.getRenderOutput();
    expect(app.props.children[1].type).to.equal(DevTools);
  });
});
