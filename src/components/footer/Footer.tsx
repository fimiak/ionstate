import React from 'react';
import whitehouse from '../.././images/whitehouse.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="inner-footer">
        <p>Data publicly sourced. IONSTATE 2019.</p>
      </div>
      <img className="home-image" src={whitehouse} alt="" />
    </div>
  );
}

export default Footer;
