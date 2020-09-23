import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';

import './styles/css/app.css';

import store from './store/index';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

ReactDOM.render(
  <StoreProvider store={store}>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
