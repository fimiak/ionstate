import React, { Component } from 'react';
import data from './data/data.json';
import searchIcon from './icons/search.svg';
import './App.css';

class Head extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        focus: false,
        search: false,
      };
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    (this.state.focus) ? this.searchInput.blur() : this.searchInput.focus();
    (this.state.focus) ? this.searchInput.blur() : this.searchInput.focus();
    this.setState(prevState => ({
      focus: !prevState.focus,
      search: !prevState.search,
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" >
          <div className="logo-wrap">
            <div className="navbar">
              <input ref={(input) => { this.searchInput = input; }} className="navbar-search" placeholder="Search" onClick={this.showMenu} />
              <button className="button-menu" onClick={this.showMenu}>
                <img className={(this.state.search) ? 'open-menu close-menu' : 'open-menu'} src={searchIcon} alt="search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;
