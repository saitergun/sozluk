import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';

const middlewares = [
  thunk,
];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const StoreProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default store;
