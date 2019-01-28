import React, { Component } from 'react';
import Biography from './Biography';
import CountryData from '.././vitals/CountryData';
import data from '../.././data/data.json';
import DataSheets from '.././vitals/DataSheets';
import News from '.././news/News';
import Others from './others/Others';
import Ad from '.././ads/Ad';
import Schedule from '.././schedule/Schedule';

const list = [];
for (let i = 0; i < data.data.length; i++) {
  // Assign data.data[i] to 'country' key.
  list[data.data[i].country] = data.data[i];
}
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nation: list[props.location.pathname.replace(/[/]/, '')],
      nat: props.location.pathname.replace(/[/]/, '')
    };
    this.topnavColor = this.topnavColor.bind(this);
  }

  componentDidMount() {
    this.topnavColor();
  }

  topnavColor() {
    document
      .getElementsByClassName('top-title')[0]
      .setAttribute(
        'style',
        `border-image: linear-gradient(to right, ${this.state.nation['flag-colors']});border-image-slice: 1;`
      );
  }

  render() {
    return (
      <div className="contentBox">
        <div className="content">
          <div className="inner-content">
            <div id="top-content" className="top-content">
              <div className="top-nav">
                <div className="top-nav-leader">
                  <div className="top-banner fade-in-bottom">
                    <div className="top-icon">
                      <img
                        className="top-leader"
                        alt={this.state.nation.leader}
                        src={require(`../.././images/thumbs/${this.state.nation.thumb}`)}
                      />
                    </div>
                    <div className="top-title">{this.state.nation.leader}</div>
                  </div>
                  <div className="top-flag">
                    <img
                      className="fade-in-bottom"
                      alt={this.state.nation.name}
                      src={require(`../.././images/flags/${this.state.nation.flag}`)}
                    />
                  </div>
                </div>
                <div className="content-box-links fade-in-bottom">
                  <a href="#news">News</a>
                  <a href="#bio">Bio</a>
                  <a href="#country-data">Resources</a>
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
                  newsToggle={this.state.newsToggle}
                  {...this.props}
                />
              </div>
            </div>

            <div id="bio" className="biography">
              <Biography biography={this.state.nation.biography} extended={this.state.nation['biography-election']} />
            </div>

            <div id="country-data">
              <CountryData nation={this.state.nation} />
            </div>

            <div id="others">
              <Others props={this.props.params} id={0} setNation={this.props.setNation} />
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
