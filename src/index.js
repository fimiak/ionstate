import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Head from './Head';
import Contact from './components/Contact';
import Home from './components/Home';
import List from './components/List';
//import NotFound from './components/NotFound';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/Footer';

const PrimaryLayout = () => (
  <div className="container">
    <sidebar className="sidebar">
      <Route path="/" component={Sidebar} />
    </sidebar>
    <header className="header">
      <Route path="/" component={Head} />
    </header>
    <main className="main">
      <Route path="/" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/list" exact component={List} />
    </main>
    <footer className="footer">
      <Route path="/" component={Footer} />
    </footer>
  </div>
);

//       <Route path="/:id" component={Main} />

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);


// 20 needs a : 