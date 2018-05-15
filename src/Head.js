import React, { Component } from 'react';
import NavWrap from './components/sidenav/NavWrap';
//import { fetchedNews } from './components/requests/NewsLoader';
import closeIcon from './icons/x.svg';
import data from './data/data.json';
import menuIcon from './icons/menu.svg';
//import testdata from './data/testdata.json';
import './App.css';

const list = [];
for (let i = 0; i < data.data.length; i += 1) { // Assign data.data[i] to 'country' key.
  list[data.data[i].country] = data.data[i];
}

class Head extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        menu: false,
        menuState: 'hidden',
        nation: 'uk',
      };
    this.closeMenu = this.closeMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.setNation = this.setNation.bind(this);
  }

  setNation(arg) {
    this.setState(() => ({
      nation: list[arg],
    }));
  }

  closeMenu() {
    this.setState({
      menu: false,
      menuState: 'hidden',
    });
  }

  showMenu() {
    const showHide = (this.state.menu === false) ? 'show' : 'hidden';
    this.setState(prevState => ({
      menu: !prevState.menu,
      menuState: showHide,
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" >
          <div className="logo-wrap">
            <div className="navbar">
              <input className="navbar-search" placeholder="Search" />
              <button className="button-menu" onClick={this.showMenu}>
                {(this.state.menu === false)
                  ? <img className="open-menu" src={menuIcon} alt="open menu" />
                  : <img className="close-menu" src={closeIcon} alt="close menu" />}
              </button>
            </div>
          </div>
          <NavWrap
            menu={this.state.menu}
            menuState={this.state.menuState}
            closeMenu={this.closeMenu}
            nation={this.state.nation}
            setNation={this.setNation}
          />
        </div>
      </div>
    );
  }
}
          
export default Head;
