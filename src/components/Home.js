import React, {Component} from 'react';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="inner-home">
          <h3>Welcome to Retracker | Daily Tracking of Global Figures</h3>
          <p>Retracker is a daily tracking service of a selection of world leaders & their activities on a daily basis. Information is gathered from the New York Times News Archive API, public releases, news articles, and social media.</p>
          <ul>
            <li><b>List of Priorities</b></li>
            <li>0 - Data on the right will change based on state</li>
            <li>0 - Changing left image does not change right screen -- unless home/about is highlighted</li>
            <li>0 - Have each news article be linked to a particular figure</li>
            <li>X - Add more people, India, Brazil, EU, etc</li>
            <li>X - Add content to Maps</li>
            <li>X - Add content to Schedules</li>
            <li>X - Work on logo</li>
            <li>X - More features</li>
            <li>X - More news resources</li>
            <li>X - Node Server to store news articles?</li>
          </ul>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home;
