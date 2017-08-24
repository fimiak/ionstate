import React, {Component} from 'react';
import data from '.././data/data';
import Footer from './Footer';
import Featured from './featured/Featured';
import Week from './featured/Week';
import whitehouse from '.././images/whitehouse.svg';

/********************************************************
 ********************************************************
 ********************************************************
** Make the home page modern and colorful.
** Add daily news to home -> lead into leader pages.
** Fix filters in PageNav.
** Add content to Maps/Schedules category.
** Add banners and more data for leaders.
** Create a recent polling category.
** Break up data.json into a sheet for each person.
** New data sheet includes schedule info.
** Node Server to store news articles, polls.
********************************************************
********************************************************
********************************************************/

class Home extends Component {
  render() {
    function random() {
      let x = Math.floor(Math.random() * 27);
      return x
    }
    let selection = data.data[random()];
    return (
      <div className="home">
        <div className="inner-home">
          <div className="home-action">
            <h1>Tracking world leaders with Public Data</h1>
            <h3>Public and free tracking of current world leaders. Using data from news outlets, non-profits, and government organizations.</h3>
          </div>
          <img className="home-image" src={whitehouse} alt='The White House' />
          <Week />
        </div>
        <Featured selected={selection} />
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home;
