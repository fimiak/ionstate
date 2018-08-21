import React, { Component } from 'react';
import Featured from '.././home/featured/Featured';
import Ad from '.././ads/Ad';
// import Rank from './home/Ranking/Rank';
import ElectionCalWrap from '.././elections/ElectionCalWrap';
import Summits from '.././summits/Summits';
import summitImg from '../.././images/summit.jpg';

// <button onClick={this.props.addLike.bind(null, i)}>&hearts; {data.likes}</button>

class Home extends Component {
  state = { dates: [{ id: 0, date_of_election: '', country: 'Not Available' }] };

  componentDidMount() {
    fetch('https://fast-journey-76120.herokuapp.com/elections/list')
      .then(res => res.json())
      .then(dates => this.setState({ dates }));
  }

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
    return (
      <div className="home">
        <div className="home-hero">
          <a className="home-hero-link" href="https://g7.gc.ca/en/" alt="G7">
            <img className="home-hero-img" src={summitImg} alt="G7 2018" />
          </a>
          <div className="home-overlay">
            G20 Summit / Buenos Aires <br /> November - December 2018
          </div>
        </div>
        <div className="summits">
          <Summits />
        </div>

        <div className="inner-featured">
          <div className="item-header">Latest News</div>
          <Featured selected={this.props.data.data[selection - 1]} {...this.props} />
          <Featured selected={this.props.data.data[selection]} {...this.props} />
          <Featured selected={this.props.data.data[selection + 1]} {...this.props} />
        </div>

        <div className="inner-election">
          <div className="item-header">Upcoming Elections</div>
          <ElectionCalWrap {...this.props} {...this.state} />
        </div>

        <div className="inner-ad">
          <Ad />
        </div>
      </div>
    );
  }
}

export default Home;
