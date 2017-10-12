import React from 'react/react.js';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import App from './App';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Main from './components/Main';
//import { Provider } from 'react-redux';

const routes = (
    <Router history={browserHistory}>
      <Route component={App}>
        <IndexRedirect to="/" />
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/:country" component={Main} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
);

export default routes;