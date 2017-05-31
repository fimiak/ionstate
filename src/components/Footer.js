import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="">
          <div className="inner-footer">
              <div className="footer-column">
                <a href="https://facebook.github.io/react/">ReactJS</a>
                <a href="https://github.com/fimiak/retracker">My Github</a>
                <a href="https://newsapi.org/">News API</a>
              </div>
              <div className="footer-column">
                <h3>API Links</h3>
                <a href="https://developer.nytimes.com/">NYTimes API</a>
                <a href="https://developers.google.com/maps/">Google Maps</a>
              </div>
              <div className="footer-column footer-last">
                <div className="footer-input">
                  <input className="input-email" placeholder="Email"></input>
                  <button className="button-submit">Submit</button>
                </div>
                <p>The Global Tracker is intended to be used for academic purposes. All data is sourced from open source APIs. Copyright 2017.</p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
