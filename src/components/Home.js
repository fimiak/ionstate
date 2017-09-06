import React, {Component} from 'react';
import data from '.././data/data';
import Footer from './Footer';
import Featured from './home/featured/Featured';
import Week from './home/featured/Week';
import whitehouse from '.././images/whitehouse.svg';

/********************************************************
 ********************************************************
 ********************************************************
** Make the home page modern and colorful.
** Add 100+ events to calendar.
** Add content to Maps/Schedules category.
** Add banners and more data for leaders.
** Break up data.json into a sheet for each person.
** Node Server to store news articles, polls.
********************************************************
********************************************************
********************************************************/

class Home extends Component {
  render() {
    function random() {
      return Math.floor(Math.random() * 27);
    }
    let selection = data.data[random()];
    return (
      <div className="home">
        <div className="inner-home">
          <div className="home-action">
            <h1>Track global leaders</h1>
            <h3>Using public data and calendar dates. Data gathered from major news outlets, non-profits, and government organizations.</h3>
          </div>
        </div>

        <div className="inner-week">
          <div className="week-header">Upcoming Events</div>
          <Week />
        </div>

        <Featured selected={selection} />

        <img className="home-image" src={whitehouse} alt='The White House' />
        <Footer />
      </div>
    )
  }
}

export default Home;
