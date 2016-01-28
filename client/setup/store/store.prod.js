import { createStore, applyMiddleware, compose } from 'redux';
import app from '../../reducers';

const finalCreateStore = compose(
  //applyMiddleware(...)
)(createStore);

export default function setupStore(initialState) {
  return finalCreateStore(app, initialState);
}
