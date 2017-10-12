import React from 'react/react.js';
import { Link } from 'react-router';


const NavLink = props => (
  <Link {...props} activeClassName="active" />
);

export default NavLink;
