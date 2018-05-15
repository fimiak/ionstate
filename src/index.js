import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Head from './Head';
import Contact from './components/Contact';
import Home from './components/Home';
import List from './components/List';
// import NotFound from './components/NotFound';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/Footer';

const PrimaryLayout = () => (
  <div className="container">
    <aside className="sidebar">
      <Route path="/" component={Sidebar} />
    </aside>
    <header className="header">
      <Route path="/" component={Head} />
    </header>
    <section className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/list" exact component={List} />
        <Route path="/:id" component={Main} />
      </Switch>
    </section>
    <footer className="footer">
      <Route path="/" component={Footer} />
    </footer>
  </div>
);

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
