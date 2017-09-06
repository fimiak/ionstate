import React, {Component} from 'react';
import CountryData from './sidenav/CountryData';
import data from '.././data/data';
import DataSheets from './sidenav/DataSheets';
import Footer from './Footer';
import Maps from './sidenav/Maps';
import News from './sidenav/News';
import Others from './sidenav/Others';
import Polls from './sidenav/Polls';
import Schedule from './sidenav/Schedule';
import whitehouse from '.././images/whitehouse.svg';

let list = [];
for (let i = 0; i < data.data.length; i++) { // Assign data.data[i] to 'country' key.
list[data.data[i]['country']] = data.data[i];
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      loading: true,
      map: 'Washington, DC',
      newsToggle: true
    };

    this.setMap = this.setMap.bind(this);
    this.showNews = this.showNews.bind(this);
    this.hideNews = this.hideNews.bind(this);
    this.topnavColor = this.topnavColor.bind(this);
  }

  componentDidMount() {
    const appWindow = document.getElementsByClassName('App-intro')[0];
    const logoWrap = document.getElementsByClassName('logo-wrap')[0];
    const navWrap = document.getElementsByClassName('nav-wrap')[0];

    appWindow.addEventListener('scroll', function() { 
        if (appWindow.scrollTop >= 24) {
          logoWrap.setAttribute('style', 'line-height: 32px;');
          navWrap.setAttribute('style', 'top: 43px;');
      } else {
          logoWrap.setAttribute('style', 'line-height: 48px;');
          navWrap.setAttribute('style', 'top: 59px;');
        }
      }
    );
    this.animateMain();
    this.topnavColor();    
  }

  componentWillReceiveProps() {
    this.topnavColor();    
  }

  animateMain() {
    const topBanner = document.getElementsByClassName('international-news')[0];
    const topLeader = document.getElementsByClassName('top-leader')[0];
    const topTitle = document.getElementsByClassName('top-title')[0];
    const topFlag = document.getElementsByClassName('top-flag')[0];
    const contentBoxLinks = document.getElementsByClassName('content-box-links')[0];
    const topSplit = document.getElementsByClassName('top-split')[0];
    topBanner.setAttribute('style', "animation: unset;opacity: 0;");
    topLeader.setAttribute('style', "animation: unset;opacity: 0");
    topTitle.setAttribute('style', "animation: unset;opacity: 0;");
    topFlag.getElementsByTagName('img')[0].setAttribute('style', "animation: unset; opacity: 0;");
    contentBoxLinks.setAttribute('style', "animation: unset;opacity: 0;");
    topSplit.setAttribute('style', "animation: unset;opacity: 0;");
    setTimeout(function() {
      topBanner.setAttribute('style', "animation: fade-in-bottom ease .4s forwards;animation-delay: 0s;");
      topLeader.setAttribute('style', "animation: fade-in-right ease 0.4s forwards;animation-delay: 0.4s;");
      topTitle.setAttribute('style', "animation: fade-in-right ease 0.4s forwards;animation-delay: 0.6s;transform: scaleX(0);transform-origin: left;");
      topFlag.getElementsByTagName('img')[0].setAttribute('style', "animation: fade-in-right ease 0.4s forwards;animation-delay: 0.8s;");
      contentBoxLinks.setAttribute('style', "animation: fade-in-right ease 0.4s forwards;animation-delay: 0.6s;");
      topSplit.setAttribute('style', "animation: fade-in-top ease 0.4s forwards;animation-delay: 1s;");
    }, 200)   
  }

  setMap(place) {
    this.setState({
      map: place
    });
  }

  showNews() {
    document.getElementsByClassName('inner-news')[0].setAttribute('style', 'height: 1106px;');
    this.setState({
      newsToggle: false
    });
  }

  hideNews() {
    document.getElementsByClassName('inner-news')[0].setAttribute('style', 'height: 530px;');
    this.setState({
      newsToggle: true
    });
  }

  topnavColor() {
     document.getElementsByClassName('top-title')[0].setAttribute('style', 'border-image: linear-gradient(to right, ' + this.props.nation['flag-colors'] + ');border-image-slice: 1;');
  };
  
  render() {
    return (
      <div className="contentBox">
        <div className="content">
          <div className="inner-content" >
            <div className="international-news">
              <img src={require('.././images/' + this.props.nation.banner)} alt={this.props.nation.leader} />
            </div>
            <div id="top-content" className="top-content">
              <div className="top-nav">
                <div className="top-banner">
                  <div className="top-icon"><img className="top-leader" alt={this.props.nation.leader} src={require('.././images/thumbs/' + this.props.nation.thumb)}></img></div>
                  <div className="top-title">{this.props.nation.leader}</div>
                </div>
                <div className="content-box-links">
                  <a href="#news">News</a>
                  <a href="#schedule">Schedule</a>
                  <a href="#country-data">Data</a>
                  <a href="#polls">Polls</a>
                </div>
                <div className="top-flag">
                  <img src={require('.././images/flags/' + this.props.nation.flag)} alt={this.props.nation.name} />
                </div>
              </div>
            </div>
            <div className="top-split">
              <div id="datasheets">
                <DataSheets props={this.props.params} nation={this.props.nation} />
              </div>
              <div id="news" className="news">
                <h1>Latest News</h1>
                <News props={this.props.params} nation={this.props.nation} />
                <div className="news-open" onClick={this.state.newsToggle ? this.showNews : this.hideNews}>{this.state.newsToggle ? "More" : "Hide"} News</div>
              </div>
            </div>
            <div id="schedule" className="schedule">
              <Schedule map={this.state.map} nation={this.props.nation} setMap={this.setMap} />
              <Maps props={this.props.params} map={this.state.map} nation={this.props.nation} />
            </div>
            <div id="country-data">
              <CountryData nation={this.props.nation} />
            </div>
            <div id="polls">
              <Polls props={this.props.params} />
            </div>
            <div id="others">
              <Others props={this.props.params} id={this.props.nation.id} setNation={this.props.setNation} />
            </div>
          </div>
        </div>
        <img className="home-image" src={whitehouse} alt='The White House' />
        <Footer />
      </div>
    )
  }
}

export default Main;