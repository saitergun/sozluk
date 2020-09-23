import { combineReducers } from 'redux';

import appReducer from './appReducer';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  app: appReducer,
  data: dataReducer,
});

export default rootReducer;
