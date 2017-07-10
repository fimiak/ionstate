import React, {Component} from 'react';
import data from '.././data/data';
import DataSheets from './sidenav/DataSheets';
import Footer from './Footer';
import Maps from './sidenav/Maps';
import More from './sidenav/More';
import News from './sidenav/News';
import Others from './sidenav/Others';
import Schedule from './sidenav/Schedule';

let selected = [];
let topnavColor = () => document.getElementsByClassName('top-nav')[0].setAttribute('style', 'border-image: linear-gradient(to right, ' + selected['flag-colors'] + ');border-image-slice: 1;' );

class Sidenav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data,
      loading: true
    };
  }

  componentDidMount() {
    const appWindow = document.getElementsByClassName('App-intro')[0];
    
    topnavColor();
    appWindow.addEventListener('scroll', function() { 
        if (appWindow.scrollTop >= 24) {
          document.getElementById('top-content').setAttribute('style', 'position: fixed; height: 40px; top: 43px; z-index: 2; max-width: 1200px');
          document.getElementById('datasheets').setAttribute('style', 'margin-top: 42px');
          document.getElementsByClassName('logo-wrap')[0].setAttribute('style', 'line-height: 32px;');
          document.getElementsByClassName('top-icon')[0].setAttribute('style', 'height: 40px;');
          document.getElementsByClassName('top-leader')[0].setAttribute('style', 'height: 40px');
          document.getElementsByClassName('top-flag')[0].setAttribute('style', 'height: 40px');
          document.getElementsByClassName('content-box-links')[0].setAttribute('style', 'line-height: 40px;');
      } else {
          document.getElementById('top-content').setAttribute('style', 'position: relative; top: auto; z-index: 0; max-width: none');
          document.getElementById('datasheets').setAttribute('style', 'margin-top: 0');
          document.getElementsByClassName('logo-wrap')[0].setAttribute('style', 'line-height: 48px;');
          document.getElementsByClassName('top-icon')[0].setAttribute('style', 'height: auto; max-height: 60px');
          document.getElementsByClassName('top-leader')[0].setAttribute('style', 'height: 100%');
          document.getElementsByClassName('top-flag')[0].setAttribute('style', 'height: 60px');
          document.getElementsByClassName('content-box-links')[0].setAttribute('style', 'line-height: 60px;');
        }
      }
    );
  }

  componentDidUpdate() {
    topnavColor();
  }

  render() {
    let nationList = { 
          usa: data.data[0],
          uk: data.data[1],
          mexico: data.data[2],
          france: data.data[3],
          germany: data.data[4],
          canada: data.data[5],
          russia: data.data[6],
          china: data.data[7],
          japan: data.data[8],
          brazil: data.data[9],
          india: data.data[10]
          };
    let nation = this.props.params.country;
    selected = nationList[nation];
    return (
      <div className="contentBox">
        <div className="content">
          <div className="inner-content">
            <div id="top-content" className="top-content">
              <div className="top-nav">
                <div className="top-banner">
                  <div className="top-icon"><img className="top-leader" alt="{selected.leader}" src={selected.image}></img></div>
                  <div className="top-title">{selected.leader}</div>
                </div>
                <div className="content-box-links">
                  <a href="#international">International</a>
                  <a href="#domestic">Domestic</a>
                  <a href="#maps">Maps</a>
                  <a href="#schedule">Schedule</a>
                  <a href="#more">More</a>
                </div>
                <div className="top-flag">
                  <img src={selected.flag} alt={selected.name} />
                </div>
              </div>
            </div>
            <div className="top-split">
              <div id="datasheets">
                <DataSheets props={this.props.params} />
              </div>
              <div id="international">
                <div className="international-news">
                  <img src={require('.././images/' + selected.banner)} alt={selected.leader} />
                </div>
                <h4>International News</h4>
                <News props={this.props.params} />
              </div>
            </div>
            <div id="domestic">
              <h3>Domestic News</h3>
              <News props={this.props.params} />
              <h4>News by <a href="https://www.nytimes.com/" alt="The New York Times">The New York Times API</a></h4>
            </div>
            <div id="schedule">
              <Schedule props={this.props.params} />
            </div>
            <div name="maps" id="maps">
              <Maps props={this.props.params} />
            </div>
            <div id="more">
              <More props={this.props.params} />
            </div>
            <div id="others">
              <Others props={this.props.params} />
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

export default Sidenav;
