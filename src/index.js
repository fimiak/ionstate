import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Contact from './components/main/contact/Contact';
import HomeContainer from './components/main/home/HomeContainer';
import ListContainer from './components/main/menu/list/ListContainer';

//import NotFound from './components/NotFound';
import Detail from './components/main/detail/Detail';
import Footer from './components/footer/Footer';
import SidebarContainer from './components/sidebar/SidebarContainer';
import Menu from './components/main/menu/Menu';
//import { browserHistory } from 'react-router';
import store from './store';

const PrimaryLayout = () => (
  <div className="container">
    <aside className="sidebar">
      <Route path="/" component={SidebarContainer} />
    </aside>
    <header className="header">
      <Route path="/" component={Header} />
    </header>
    <section className="main">
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/list" exact component={ListContainer} />
        <Route path="/:id" exact component={Detail} />
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
