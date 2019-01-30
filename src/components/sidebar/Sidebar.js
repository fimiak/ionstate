import React, { Component } from 'react';
//import NavLink from '.././NavLink';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-inner">
        <ul className="sidebar-list">
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" activeClassName="active">
              Leaders
            </NavLink>
          </li>
          <li>
            <NavLink to="/usa" activeClassName="active">
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
