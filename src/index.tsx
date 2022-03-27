import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main/_index.scss'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import rootReducer from './redux/reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers()

const store = createStore(rootReducer, enhancers);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


