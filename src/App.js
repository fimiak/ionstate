import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import { createStore, applyMiddleware } from 'redux';
import NavWrap from './components/sidenav/NavWrap';
import closeIcon from './icons/x.svg';
import menuIcon from './icons/menu.svg';
import './App.css';
//import { load } from './actions';

class App extends Component {

  constructor() {
    super();
    this.state = {
      news: [],
      menu: false,
      menuState: 'hidden'
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }

  closeMenu() {
      this.setState({
        menu: false,
        menuState: 'hidden'
    });
  }

  showMenu() {
    const showHide = (this.state.menu === false) ? 'show' : 'hidden';
    this.setState(prevState => ({
        menu: !prevState.menu,
        menuState: showHide
      })
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="logo-wrap" onClick={this.showMenu}>
            <a className="title-link" href="/"><h4 className="title">Rtk | Retracker</h4></a>
            <button className="button-menu" >{(this.state.menu === false) ? <img className="open-menu" src={menuIcon} alt="open" /> : <img className="close-menu" src={closeIcon} alt="close" /> }</button>
          </div>
          <NavWrap menu={this.state.menu} menuState={this.state.menuState} />
        </div>
        <div className="App-intro" onClick={this.closeMenu}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;