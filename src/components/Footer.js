import React from 'react';
import whitehouse from '.././images/whitehouse.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="inner-footer">
        <p>
          All data from public sources & APIs.
          <br />
          IONSTATE 2019
        </p>
      </div>
      <img className="home-image" src={whitehouse} alt=" " />
    </div>
  );
}

export default Footer;
