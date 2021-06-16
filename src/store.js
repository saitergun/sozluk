import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import app from './state/app/reducer';
import data from './state/data/reducer';

const enhancer = applyMiddleware(
  thunk,
);

const rootReducer = combineReducers({
  app,
  data,
});

const store = createStore(rootReducer, enhancer);

export default store;
