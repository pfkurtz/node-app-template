import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';

import * as reducers from '../reducers';
import * as sagas from '../sagas';

const finalCreateStore = compose(applyMiddleware(
  createSagaMiddleware(...saga),
  syncHistory(browserHistory)
))(createStore);

const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
});

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
