import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import { persistState } from 'redux-devtools';
import createSagaMiddleware from 'redux-saga';

import * as reducers from '../reducers';
import DevTools from '../components/App/DevTools';

import userSaga from '../sagas/user';

const finalCreateStore = compose(
  applyMiddleware(createSagaMiddleware(userSaga)),
  DevTools.instrument(),
  persistState(getSessionDebugKey()),
  
  // for Chrome Redux DevTools extension
  // need to comment out `DevTools.instrument()` above
  // and remove DevTools component from App.dev
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

function getSessionDebugKey() {
  const debugQuerystring = /[?&]debug_session=([^&]+)\b/;
  const matches = window.location.href.match(debugQuerystring);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const reducer = combineReducers(reducers);

export default function setupStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
