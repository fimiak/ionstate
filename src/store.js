import { createStore, compose } from 'redux';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import rootReducer from './reducers/index';

import data from './data/data';

// object for default data
const defaultState = {
  data
};

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, defaultState, enhancers);
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
