import React from 'react';
import whitehouse from '.././images/whitehouse.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="footer-links">
          <div className="footer-column">
            <h3>More Tools</h3>
            <a href="https://www.cia.gov/library/publications/the-world-factbook/">CIA World Factbook</a>
            <a href="https://developer.nytimes.com/">NY Times API</a>
            <a href="https://developers.google.com/maps/">Google Maps</a>
          </div>
          <div className="footer-column footer-middle">
            <h3>More Links</h3>
            <a href="/">Home Page</a>
            <a href="/contact">Contact Us</a>
            <a href="http://www.wikipedia.org">Wikipedia</a>
          </div>
        </div>
        <div className="footer-column footer-last">
          <h3>Join the Newsletter</h3>
          <div className="footer-input">
            <input className="input-email" placeholder="Email Address" />
            <button className="button-submit">Submit</button>
          </div>
          <p>
            All data from public sources & APIs.<br />
            IONSTATE 2018
          </p>
        </div>
      </div>
      <img className="home-image" src={whitehouse} alt="" />
    </div>
  );
}

export default Footer;
