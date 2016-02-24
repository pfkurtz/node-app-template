import { render } from 'react-dom';

import store from '../store';
import Root from './Root.js';

/**
 * Render the root `Root` component.
 * @param {DOMElement} domNode - root DOM node
 * @return {[type]} [description]
 */
export default function ui(domNode) {
  render(<Root store={store} />, domNode);
}
