import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// components
import App from './App';
import About from './components/About';
import DataSheets from './components/sidenav/DataSheets';
import Home from './components/Home';
import Maps from './components/sidenav/Maps';
import More from './components/sidenav/More';
import News from './components/sidenav/News';
import NotFound from './components/NotFound';
import Schedule from './components/sidenav/Schedule';
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