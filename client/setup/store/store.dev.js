import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';

import app from '../../reducers';
import DevTools from '../../components/App/DevTools';

const finalCreateStore = compose(
  //applyMiddleware(...),//thunk/promise
  DevTools.instrument(),
  persistState(getSessionDebugKey())
)(createStore);

function getSessionDebugKey() {
  const debugQuerystring = /[?&]debug_session=([^&]+)\b/;
  const matches = window.location.href.match(debugQuerystring);
  return (matches && matches.length > 0) ? matches[1] : null;
}

export default function setupStore(initialState) {
  const store = finalCreateStore(app, initialState);

  if (module.hot) {
    module.hot.accept('../../reducers', () =>
      store.replaceReducer(require('../../reducers'))
    );
  }

  return store;
}
