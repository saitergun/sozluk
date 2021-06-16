import { createElement, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/css/index.css';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import store from './store';

import App from './App';

ReactDOM.render(
  createElement(
    StrictMode, null,
    createElement(
      StoreProvider, { store },
      createElement(
        Router, null,
        createElement(
          App,
        ),
      ),
    ),
  ),
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
