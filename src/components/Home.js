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
            <li>Add domestic / international / economic issues.</li>
            <li>Add more people, India, Brazil, EU, etc</li>
            <li>Add content to Maps</li>
            <li>Add content to Schedules</li>
            <li>Work on logo</li>
            <li>More features</li>
            <li>More news resources</li>
            <li>Node Server to store news articles?</li>
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
