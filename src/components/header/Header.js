import React from 'react';
import { NavLink } from 'react-router-dom';
import contactIcon from '../.././icons/send.svg';
import menuIcon from '../.././icons/menu.svg';
import './../../styles/App.css';

function Head() {
  return (
    <div className="header">
      <a href="/">Ionstate</a>
      <div className="header__icons">
        <NavLink to="/contact" className="header__menu-link">
          <img src={contactIcon} alt="contact" />
        </NavLink>
        <NavLink to="/menu" className="header__menu-link">
          <img src={menuIcon} alt="menu" />
        </NavLink>
      </div>
    </div>
  );
}

export default Head;
