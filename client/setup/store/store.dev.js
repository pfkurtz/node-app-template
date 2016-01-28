import { createStore, applyMiddleware, compose } from 'redux';
import app from '../../reducers';
import DevTools from '../../components/App/DevTools';

const finalCreateStore = compose(
  //applyMiddleware(...),
  DevTools.instrument()
)(createStore);

export default function setupStore(initialState) {
  const store = finalCreateStore(app, initialState);

  if (module.hot) {
    module.hot.accept('../../reducers', () =>
      store.replaceReducer(require('../../reducers'))
    );
  }

  return store;
}
