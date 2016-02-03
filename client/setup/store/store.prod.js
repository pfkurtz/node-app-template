import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as reducers from '../../reducers';

const finalCreateStore = compose(
  //applyMiddleware(...)
)(createStore);

const reducer = combineReducers(reducers);

export default function setupStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
