import React, { Component } from 'react';
import data from '.././data/data.json';
import Featured from './home/featured/Featured';
import Map from './Map/Map';
import Ad from './ads/Ad';
// import Rank from './home/Ranking/Rank';
// import Week from './home/featured/Week';
import ElectionCalWrap from './elections/ElectionCalWrap';
import summit from '.././images/summit.jpg';

const selection = data.data[Math.floor(Math.random() * 27)];
const date = new Date();

class Home extends Component {
  componentDidMount() {
    const appWindow = document.getElementsByClassName('App-intro')[0];
    const logoWrap = document.getElementsByClassName('logo-wrap')[0];
    const navWrap = document.getElementsByClassName('nav-wrap')[0];
    const buttonMenu = document.getElementsByClassName('button-menu')[0];

    if (appWindow !== undefined) {
      appWindow.addEventListener('scroll', () => {
        if (appWindow.scrollTop >= 24) {
          logoWrap.setAttribute('style', 'line-height: 32px;');
          navWrap.setAttribute('style', 'top: 42px;');
          buttonMenu.setAttribute('style', 'width: 42px');
        } else {
          logoWrap.setAttribute('style', 'line-height: 48px;');
          navWrap.setAttribute('style', 'top: 58px;');
          buttonMenu.setAttribute('style', 'width: 58px');
        }
      });
    }
  }

  render() {
    return (
      <div className="home">

        <div className="home-hero">
          <a href="https://g7.gc.ca/en/" alt="G7">
            <img src={summit} alt="G7 2017" />
          </a>
          <div className="home-overlay">
            Upcoming - The G7 Summit - Charlevoix, Quebec - June 8-9 2018
          </div>
        </div>

        <div className="inner-election">
          <div className="item-header">Upcoming Elections</div>
          <ElectionCalWrap />
        </div>

        <div className="inner-map">
          <div className="item-header">Upcoming Summits</div>
          <Map />
        </div>

        <div className="inner-featured">
          <div className="item-header">Featured Leader</div>
          <Featured selected={selection} />
        </div>

        <div className="inner-ad">
          <Ad />
        </div>

      </div>
    );
  }
}

export default Home;
