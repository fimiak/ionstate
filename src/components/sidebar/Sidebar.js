import React, { Component } from 'react';
import LeaderList from './LeaderList';
import searchIcon from './../../icons/search.svg';
import gridIcon from './../../icons/grid.svg';
import homeIcon from './../../icons/home.svg';
import sendIcon from './../../icons/send.svg';

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
            <a>Leader</a>
          </li>
          <li>
            <a>Topic</a>
          </li>
          <li>
            <a>Source</a>
          </li>
        </ul>
        <div className="sidebar-menu">
          <div className="sidebar-content">
            <p>Topics concerning world leaders</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
