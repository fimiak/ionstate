//import React from 'react';
import { render } from 'react-dom';
//import { createStore } from 'redux';
import routes from './router';

/**
function todoApp() {
  return true;
}

let store = createStore(todoApp);
**/
render(
    routes,
  document.getElementById('root')
);
