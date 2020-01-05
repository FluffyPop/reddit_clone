import reduxThunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { user } from './user';
import { modals } from './modals';

// Root reducer
const reducer = combineReducers({
  user,
  modals
});
// Activate redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Redux middlewares
const middlewares = [reduxThunk];
// Redux store
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
