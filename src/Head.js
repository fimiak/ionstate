import React, { Component } from 'react';
import data from './data/data.json';
import searchIcon from './icons/search.svg';
import listIcon from './icons/list.svg';
import typeIcon from './icons/type.svg';
import './App.css';

class Head extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      search: !prevState.search
    }));
  }

  render() {
    const openSearch = this.state.search;
    return (
      <div className="App">
        <div className="App-header" >
          <div className="logo-wrap">
            <div className="navbar">
              <div className="navbar-group">
                <button className="button-menu">
                  <a href="/list">
                    <img className="open-menu" src={listIcon} alt="list" />
                  </a>List
                </button>
                <button className="button-menu">
                  <a href="/list">
                    <img className="open-menu" src={typeIcon} alt="list" />
                  </a>
                </button>
              </div>
              <input ref={(input) => { this.searchInput = input; }} className={(openSearch ? 'navbar-search' : 'navbar-search navbar-search-hidden')} placeholder="Search" />
              <button className="button-menu" onClick={() => this.handleClick()}>
                <img className="open-menu search-menu" src={searchIcon} alt="search" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Head;
