import React, { Component } from 'react';
import searchIcon from './../../icons/search.svg';
import gridIcon from './../../icons/grid.svg';
//import homeIcon from './../../icons/home.svg';
//import sendIcon from './../../icons/send.svg';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-inner">
        <button className="sidebar-button" onClick={() => this.handleClick()}>
          <div className="search-menu">
            <img className="open-menu" src={searchIcon} alt="" /> Search
          </div>
        </button>
        <ul className="sidebar-list">
          <li>
            <a href="/">Leader</a>
          </li>
          <li>
            <a href="/">Topic</a>
          </li>
          <li>
            <a href="/">Source</a>
          </li>
        </ul>
        <div className="sidebar-menu">
          <div className="sidebar-content">
            <p>Featured Topics Concerning Current World Leaders</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
