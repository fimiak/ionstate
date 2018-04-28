import React, { Component } from 'react';
import Biography from './sidenav/Biography';
import CountryData from './sidenav/CountryData';
import data from '.././data/data.json';
import DataSheets from './sidenav/DataSheets';
import Footer from './Footer';
import News from './sidenav/News';
import Others from './sidenav/Others';
import Polls from './sidenav/Polls';
import Schedule from './sidenav/Schedule';
import TwitterApi from './api/TwitterApi';

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
    console.log(this.state.nat);
    this.setMap = this.setMap.bind(this);
    this.showNews = this.showNews.bind(this);
    this.hideNews = this.hideNews.bind(this);
    this.topnavColor = this.topnavColor.bind(this);
  }

  componentWillUpdate() {
    const appWindow = document.getElementsByClassName('App-intro')[0];
    const logoWrap = document.getElementsByClassName('logo-wrap')[0];
    const navWrap = document.getElementsByClassName('nav-wrap')[0];
    const buttonMenu = document.getElementsByClassName('button-menu')[0];
    this.topnavColor();

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

  componentDidUpdate() {
    this.topnavColor();
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
            <div className="international-news fade-in-bottom">
              
            </div>
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
                  <img className="fade-in-right" alt={this.state.nation.name} src={require(`.././images/flags/${this.state.nation.flag}`)}  />
                </div>
              </div>
            </div>

            <div className="top-split fade-in-top">
              <div id="datasheets">
                <DataSheets props={this.state.params} nation={this.state.nation} />
              </div>
              <div id="biography">
                <Biography nation={this.state.nation} />
              </div>
            </div>

            <div className="top-split fade-in-top">
              <div id="news" className="news">
                <News
                  props={this.state.params}
                  nation={this.state.nation}
                />
                <a className="news-open" role="button" onClick={this.state.newsToggle ? this.showNews : this.hideNews}>
                  {this.state.newsToggle ? 'More' : 'Hide'} News
                </a>
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

            <div id="country-data">
              <CountryData nation={this.state.nation} />
            </div>

            <div id="twitter">
              <TwitterApi nation={this.state.nation} />
            </div>

            <div id="others">
              <Others
                props={this.props.params}
                id={0}
                setNation={this.props.setNation}
              />
            </div>
          </div>
        </div>
        <Footer />
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
