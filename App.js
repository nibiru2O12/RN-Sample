import React from 'react'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './app/index';
import rootReducer from './app/store/reducers/rootReducer';

const store = createStore(rootReducer,applyMiddleware(thunk));

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default ReduxApp;