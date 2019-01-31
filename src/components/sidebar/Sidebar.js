import React from 'react';
//import NavLink from '.././NavLink';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar-inner">
      <ul className="sidebar-list">
        <li>
          <NavLink exact to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeclassname="active">
            Leader List
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: '/usa', state: 'flushDeal' }} activeclassname="active">
            Details
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
