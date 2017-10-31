import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import List from './components/List';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Main from './components/Main';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <p>Hi</p>,
    main: () => <h2>Home</h2>
  }
]

/*
const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/list" component={List} />
      <Route path="/:country" component={Main} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);
*/
export default routes;
