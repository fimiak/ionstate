import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Head from './Head';
import Contact from './views/Contact';
import Home from './views/Home';
import List from './views/List';
// import NotFound from './views/NotFound';
import Main from './views/Main';
import Sidebar from './views/sidebar/Sidebar';
import Footer from './views/Footer';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

const store = createStore(counter);

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
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
