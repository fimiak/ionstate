import React, {Component} from 'react';
import Footer from './Footer';

/********************************************************
 ********************************************************
 ********************************************************
** Make the home page modern and colorful.
** Add daily news to home -> lead into leader pages.
** Add content to Maps/Schedules category.
** Create a recent polling category.
** Break up data.json into a sheet for each person.
** New data sheet includes schedule info.
** Node Server to store news articles, polls.
********************************************************
********************************************************
********************************************************/


class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="inner-home">
          <h1>Prime Watch</h1>
          <h5>Daily Tracking of Global Figures</h5>
          <p>Prime Watch is a daily tracking service of a selection of world leaders & their activities on a daily basis. Information is gathered from the New York Times News Archive API, public releases, news articles, and social media.</p>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home;
