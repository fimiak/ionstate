import React, {Component} from 'react/react.js';
import data from '.././data/data';
import Footer from './Footer';
import Featured from './home/featured/Featured';
import Map from './Map/Map';
import Rank from './home/Ranking/Rank';
import Week from './home/featured/Week';

/********************************************************
 ********************************************************
 ********************************************************
** Make the home page modern and colorful.
** Add 100+ events to calendar.
** Add banners and more data for leaders.
** Break up data.json into a sheet for each person.
** Node Server to store news articles, polls.
********************************************************
********************************************************
********************************************************/

const selection = data.data[Math.floor(Math.random() * 27)];
const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = months[date.getMonth()];

class Home extends Component {

  componentDidMount() {
    const appWindow = document.getElementsByClassName('App-intro')[0];
    const logoWrap = document.getElementsByClassName('logo-wrap')[0];
    const navWrap = document.getElementsByClassName('nav-wrap')[0];
    const buttonMenu = document.getElementsByClassName('button-menu')[0];
    
    appWindow.addEventListener('scroll', function() { 
        if (appWindow.scrollTop >= 24) {
          logoWrap.setAttribute('style', 'line-height: 32px;');
          navWrap.setAttribute('style', 'top: 42px;');
          buttonMenu.setAttribute('style', 'width: 42px');          
      } else {
          logoWrap.setAttribute('style', 'line-height: 48px;');
          navWrap.setAttribute('style', 'top: 58px;');
          buttonMenu.setAttribute('style', 'width: 58px');
        }
      }
    );
  }


  render() {
    return (
      <div className="home">
        <div className="inner-home">
          <div className="home-action">
            <h1>Tracking global leaders</h1>
            <h3>Presidentprime is a public access site supporting features for discovering information about a selection of top presidents and prime ministers.</h3>
          </div>
        </div>
        <div className="inner-map">
          <div className="header">Map Tracker <span>{month + " " + date.getDate() + ", " + date.getFullYear()}</span></div>
          <Map />
        </div>
        <div className="inner-rank">
          <div className="header">Latest News</div>
          <Rank data={data.data} />
        </div>
        <div className="inner-week">
          <div className="header">Upcoming Events</div>
          <Week />
        </div>

        <div className="inner-featured">
          <div className="header">Featured</div>
          <Featured selected={selection} />
        </div>

        <Footer />
      </div>
    )
  }
}

export default Home;
