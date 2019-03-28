import React from 'react';
import NavLink from './../NavLink';
import whitehouse from '../.././images/whitehouse.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="inner-footer">
        <span>Data publicly sourced from Wikipedia and the NYTimes.</span>
        <span>
          Copyright &copy; IONSTATE 2019. <br />
          <NavLink to="/contact">Contact Us.</NavLink>
        </span>
      </div>
      <img className="footer-image" src={whitehouse} alt="" />
    </div>
  );
}

export default Footer;
