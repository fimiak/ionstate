import React, { Component } from 'react';
import Biography from './Biography';
import CountryData from './vitals/CountryData';
import data from '.././data/data.json';
import DataSheets from './vitals/DataSheets';
import News from './news/News';
import Others from './suggestions/Others';
import Ad from './ads/Ad';
// import Polls from './Polls';
import Schedule from './schedule/Schedule';

const list = [];
for (let i = 0; i < data.data.length; i++) { // Assign data.data[i] to 'country' key.
  list[data.data[i].country] = data.data[i];
}
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nation: list[props.location.pathname.replace(/[/]/, '')],
      nat: props.location.pathname.replace(/[/]/, ''),
      newsToggle: true,
    };
    this.setMap = this.setMap.bind(this);
    this.showNews = this.showNews.bind(this);
    this.hideNews = this.hideNews.bind(this);
    this.topnavColor = this.topnavColor.bind(this);
  }

  setMap(place) {
    this.setState({
      map: place,
    });
  }

  showNews() {
    document.getElementsByClassName('inner-news')[0].setAttribute('style', 'height: 1106px;');
    this.setState({
      newsToggle: false,
    });
  }

  hideNews() {
    document.getElementsByClassName('inner-news')[0].setAttribute('style', 'height: 530px;');
    this.setState({
      newsToggle: true,
    });
  }

  topnavColor() {
    document.getElementsByClassName('top-title')[0].setAttribute(
      'style',
      `border-image: linear-gradient(to right, ${this.state.nation['flag-colors']});border-image-slice: 1;`,
    );
  }

  // <img src={require('.././images/' + this.props.nation.banner)} alt={this.props.nation.leader} />
  render() {
    return (
      <div className="contentBox">
        <div className="content">
          <div className="inner-content" >
            <div id="top-content" className="top-content">
              <div className="top-nav">
                <div className="top-banner fade-in-right">
                  <div className="top-icon">
                    <img className="top-leader" alt={this.state.nation.leader} src={require(`.././images/thumbs/${this.state.nation.thumb}`)} />
                  </div>
                  <div className="top-title">{this.state.nation.leader}</div>
                </div>
                <div className="content-box-links fade-in-right">
                  <a href="/">Home</a>
                  <a href="#schedule">Schedule</a>
                  <a href="#news">News</a>
                  <a href="#country-data">Data</a>
                </div>
                <div className="top-flag">
                  <img className="fade-in-right" alt={this.state.nation.name} src={require(`.././images/flags/${this.state.nation.flag}`)} />
                </div>
              </div>
            </div>

            <div className="top-split fade-in-top datasheets" id="datasheets">
              <DataSheets props={this.state.params} nation={this.state.nation} />
            </div>

            <div className="top-split fade-in-top">
              <div id="news" className="news">
                <News
                  props={this.state.params}
                  nation={this.state.nation}
                />
                <button className="news-open" onClick={this.state.newsToggle ? this.showNews : this.hideNews}>
                  {this.state.newsToggle ? 'More' : 'Hide'} News
                </button>
              </div>
            </div>

            <div id="schedule" className="schedule">
              <Schedule
                map={this.state.map}
                nation={this.state.nation}
                setMap={this.setMap}
                props={this.props.params}
              />
            </div>

            <div className="biography">
              <Biography biography={this.state.nation.biography} extended={this.state.nation['biography-election']} />
            </div>

            <div id="country-data">
              <CountryData nation={this.state.nation} />
            </div>

            <div id="others">
              <Others
                props={this.props.params}
                id={0}
                setNation={this.props.setNation}
              />
            </div>

            <div className="inner-ad">
              <Ad />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Main;

/*
            <div id="polls">
              <Polls props={this.props.params} />
            </div>
*/
