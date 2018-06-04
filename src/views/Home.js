import React from 'react';
import data from '.././data/data.json';
import Featured from './home/featured/Featured';
import Map from './Map/Map';
import Ad from './ads/Ad';
// import Rank from './home/Ranking/Rank';
import ElectionCalWrap from './elections/ElectionCalWrap';
import summit from '.././images/summit.jpg';

const selection = data.data[Math.floor(Math.random() * 27)];

function Home() {
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

export default Home;
