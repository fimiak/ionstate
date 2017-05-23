import React, {Component} from 'react';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="inner-home">
          <h3>Welcome to Retracker</h3>
          <p>At retracker we track a selection of world leaders & their activities on a daily basis. Information is gathered from public releases, news articles, and social media.</p>
          <ul>
            <li><b>List of Major Priorities</b></li>
            <li>O - Picture on sidebar sets state for president highlighted</li>
            <li>O - When state is set, highlight picture & set data</li>
            <li>X - Data on the right will change based on state</li>
            <li>X - Changing left image does not change right screen -- unless home/about is highlighted</li>
            <li>X - Set animation when a left image is clicked until data is loaded - Promises</li>
          </ul>
        </div>
        <div className="footer">
          <div className="inner-footer">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
