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
        <Route path="/:country/news" component={News} />
        <Route path="/:country/datasheets" component={DataSheets} selection="usa" />
        <Route path="/:country/about" component={About} />
        <Route path="/:country/maps" component={Maps} />
        <Route path="/:country/schedule" component={Schedule} />
        <Route path="/:country/more" component={More} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;