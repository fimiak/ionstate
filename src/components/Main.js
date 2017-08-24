import React, {Component} from 'react';
import CountryData from './sidenav/CountryData';
import data from '.././data/data';
import DataSheets from './sidenav/DataSheets';
import Footer from './Footer';
import Maps from './sidenav/Maps';
import More from './sidenav/More';
import News from './sidenav/News';
import Others from './sidenav/Others';
import Schedule from './sidenav/Schedule';

let selected = [];
let topnavColor = () => document.getElementsByClassName('top-title')[0].setAttribute('style', 'border-image: linear-gradient(to right, ' + selected['flag-colors'] + ');border-image-slice: 1;' );

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      loading: true,
      map: 'Seattle, WA',
      country: this.props.params.country
    };

    this.setMap = this.setMap.bind(this);
    this.hideNews = this.hideNews.bind(this);
  }

  setMap(place) {
    this.setState({
      map: place
    });
  }

  componentDidMount() {
    const appWindow = document.getElementsByClassName('App-intro')[0];
    const topContent = document.getElementById('top-content');
    const logoWrap = document.getElementsByClassName('logo-wrap')[0];
    const navWrap = document.getElementsByClassName('nav-wrap')[0];

    topnavColor();

    appWindow.addEventListener('scroll', function() { 
        if (appWindow.scrollTop >= 24) {
          topContent.setAttribute('style', 'max-width: 1200px;');
          logoWrap.setAttribute('style', 'line-height: 32px;');
          navWrap.setAttribute('style', 'top: 43px;');
      } else {
          topContent.setAttribute('style', 'max-width: none;');
          logoWrap.setAttribute('style', 'line-height: 48px;');
          navWrap.setAttribute('style', 'top: 59px;');
        }
      }
    );
  }

  componentDidUpdate() {
    topnavColor();
    this.hideNews();    
  }

  showNews() {
    document.getElementsByClassName('inner-news')[0].setAttribute('style', 'height: auto;');
    document.getElementsByClassName('news-open')[0].setAttribute('style', 'display: none;');
  }

  hideNews() {
    document.getElementsByClassName('inner-news')[0].setAttribute('style', 'height: 530px;');
    document.getElementsByClassName('news-open')[0].setAttribute('style', 'display: block;');
  }

  render() {
    let nation = this.props.params.country;
    let list = {};
    for (let i = 0; i < data.data.length; i++) { // Assign data.data[i] to 'country' key.
      list[data.data[i]['country']] = data.data[i];
    } 
    selected = list[nation]; // The country that has been selected via URL param.
    return (
      <div className="contentBox">
        <div className="content">
          <div className="inner-content">
            <div className="international-news">
              <img src={require('.././images/' + selected.banner)} alt={selected.leader} />
            </div>
            <div id="top-content" className="top-content">
              <div className="top-nav">
                <div className="top-banner">
                  <div className="top-icon"><img className="top-leader" alt={selected.leader} src={require('.././images/thumbs/' + selected.thumb)} alt={selected.name}></img></div>
                  <div className="top-title">{selected.leader}</div>
                </div>
                <div className="content-box-links">
                  <a href="#news">News</a>
                  <a href="#schedule">Schedule</a>
                  <a href="#country-data">Data</a>
                  <a href="#polls">Polls</a>
                </div>
                <div className="top-flag">
                  <img src={require('.././images/flags/' + selected.flag)} alt={selected.name} />
                </div>
              </div>
            </div>
            <div className="top-split">
              <div id="datasheets">
                <DataSheets props={this.props.params} nationList={list} selected={selected} />
              </div>
              <div id="news" className="news">
                <h1>Latest News</h1>
                <News props={this.props.params} selected={selected} />
                <div className="news-open" onClick={this.showNews}>More News</div>
              </div>
            </div>
            <div id="schedule" className="schedule">
              <Schedule props={this.props.params} map={this.state.map} selected={selected} setMap={this.setMap} />
              <Maps props={this.props.params} map={this.state.map} selected={selected} />
            </div>
            <div id="country-data">
              <CountryData selected={selected} />
            </div>
            <div id="polls">
              <More props={this.props.params} />
            </div>
            <div id="others">
              <Others props={this.props.params} selected={selected.id} />
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default Main;