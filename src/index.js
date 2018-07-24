import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Head from './components/Head';
import Contact from './components/Contact';
import Home from './components/home/Home';
import HomeContainer from './components/home/HomeContainer';
import List from './components/list/List';
import ListContainer from './components/list/ListContainer';

// import NotFound from './components/NotFound';
import Main from './components/Main';
import MapContainer from './components/maps/Map';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/Footer';
import SidebarContainer from './components/sidebar/SidebarContainer';
import { browserHistory } from 'react-router';
import store from './store';

const PrimaryLayout = () => (
  <div className="container">
    <aside className="sidebar">
      <Route path="/" component={SidebarContainer} />
    </aside>
    <header className="header">
      <Route path="/" component={Head} />
    </header>
    <section className="main">
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/list" exact component={ListContainer} />
        <Route path="/map" exact component={MapContainer} />
        <Route path="/:id" component={Main} />
      </Switch>
    </section>
    <footer className="footer">
      <Route path="/" component={Footer} />
    </footer>
  </div>
);

const MyApp = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <MyApp />
  </Provider>,
  document.getElementById('root')
);
