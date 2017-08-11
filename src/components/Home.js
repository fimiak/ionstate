import React, {Component} from 'react';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="inner-home">
          <h3>Welcome to Prime Watch | Daily Tracking of Global Figures</h3>
          <p>Prime Watch is a daily tracking service of a selection of world leaders & their activities on a daily basis. Information is gathered from the New York Times News Archive API, public releases, news articles, and social media.</p>
          <ul>
            <li>Add more individuals.</li>
            <li>Add content to Maps</li>
            <li>Add content to Schedules</li>
            <li>More features / polls</li>
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
