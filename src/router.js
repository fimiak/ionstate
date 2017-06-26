import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import App from './App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Sidenav from './components/Sidenav';

const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <IndexRedirect to="/" />
      <Route path="/" component={Home} />
      <Route path="/:country" component={Sidenav} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;