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
            <li>Picture on sidebar sets state for president highlighted</li>
            <li>When state is set, highlight picture & set data</li>
            <li>Data on the right will change based on state</li>
            <li>Changing left image does not change right screen -- unless home/about is highlighted</li>
          </ul>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
