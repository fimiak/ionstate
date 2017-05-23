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
      <Route component={Sidenav}>
        <Route path="sidenav/news/:country" component={News} />
        <Route path="sidenav/datasheets/:country" component={DataSheets} />
        <Route path="sidenav/about/:country" component={About} />
        <Route path="sidenav/maps/:country" component={Maps} />
        <Route path="sidenav/schedule/:country" component={Schedule} />
        <Route path="sidenav/more/:country" component={More} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;