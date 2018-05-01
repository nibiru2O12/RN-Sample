import React from 'react'
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './app/index';
import rootReducer from './app/store/reducers/rootReducer';

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,composeEnhacer(applyMiddleware(thunk)));

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default ReduxApp;