import React, { Component } from 'react';
import Featured from '.././home/featured/Featured';
import Map from '.././maps/Map';
import Ad from '.././ads/Ad';
// import Rank from './home/Ranking/Rank';
import ElectionCalWrap from '.././elections/ElectionCalWrap';
import summit from '../.././images/summit.jpg';
import data from '../../reducers/data';
// <button onClick={this.props.addLike.bind(null, i)}>&hearts; {data.likes}</button>

class Home extends Component {
  render() {
    let selection = Math.floor(Math.random() * 27);
    switch (selection) {
      case 0:
        selection = 1;
        break;
      case 27:
        selection = 26;
        break;
      default:
        break;
    }
    let i = 10;
    return (
      <div className="home">
        <div className="home-hero">
          <a className="home-hero-link" href="https://g7.gc.ca/en/" alt="G7">
            <img className="home-hero-img" src={summit} alt="G7 2018" />
          </a>
          <div className="home-overlay">The G7 Summit 2018 - June 8 - 9 - Charlevoix, Quebec</div>
        </div>

        <div className="inner-featured">
          <div className="item-header">Latest News</div>
          <Featured selected={this.props.data.data[selection - 1]} {...this.props} />
          <Featured selected={this.props.data.data[selection]} {...this.props} />
          <Featured selected={this.props.data.data[selection + 1]} {...this.props} />
        </div>

        <div className="inner-election">
          <div className="item-header">Upcoming Elections</div>
          <ElectionCalWrap {...this.props} />
        </div>

        <div className="inner-ad">
          <Ad />
        </div>
      </div>
    );
  }
}

export default Home;
