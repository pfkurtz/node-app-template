import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import * as reducers from '../reducers';

const finalCreateStore = compose(
  //applyMiddleware(...)
)(createStore);

const reducer = combineReducers(reducers);

/**
 * Initial state of the Redux store.
 *
 * @TODO populate from localStorage
 * (different from `persistState`, because we don't want the whole history)
 *
 * @type {Object}
 */
const initialState = {};

/**
 * Redux store.
 * @type {Object}
 */
const store = finalCreateStore(reducer, initialState);
export default store;

/**
 * For ease of access from components, etc.
 * @type {function}
 */
export const dispatch = store.dispatch;
