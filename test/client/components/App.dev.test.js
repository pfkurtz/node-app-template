import { expect } from 'chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
//import render from 'react-shallow-renderer';

import App from '../../../client/components/App/App.dev';
// @TODO this should be a spy
import DevTools from '../../../client/components/App/DevTools';

describe('COMPONENT: App.dev', () => {
  const renderer = createRenderer();

  /* @TODO really spec this shit out */
  it('woo', () => {
    renderer.render(<App dispatch={() => {}} count={0}
      userRecord={{ user: {} }} />);
    const app = renderer.getRenderOutput();

    expect(app.props.children[app.props.children.length-1].type)
      .to.equal(DevTools);
  });
});
