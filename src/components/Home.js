import React, {Component} from 'react';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="inner-home">
          <h3>Welcome to Retrk | Daily Tracking of Global Figures</h3>
          <p>Retrk is a daily tracking service of a selection of world leaders & their activities on a daily basis. Information is gathered from the New York Times News Archive API, public releases, news articles, and social media.</p>
          <ul>
            <li><b>List of Major Priorities</b></li>
            <li>0 - Picture on sidebar sets state for president highlighted</li>
            <li>0 - When state is set, highlight picture & set data</li>
            <li>0 - Data on the right will change based on state</li>
            <li>0 - Changing left image does not change right screen -- unless home/about is highlighted</li>
            <li>0 - Have each news article be linked to a particular figure</li>
            <li>X - Add more people, China, India, Brazil, EU, etc</li>
            <li>X - Add content to Maps</li>
            <li>X - Add content to Schedules</li>
            <li>X - Work on logo</li>
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
