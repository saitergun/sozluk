import { combineReducers } from 'redux';

import app from './app';
import data from './data';

const rootReducer = combineReducers({
  app,
  data,
});

export default rootReducer;
