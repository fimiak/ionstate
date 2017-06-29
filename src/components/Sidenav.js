import React, {Component} from 'react';
import Footer from './Footer';
import data from '.././data/data';
import DataSheets from './sidenav/DataSheets';
import Maps from './sidenav/Maps';
import More from './sidenav/More';
import News from './sidenav/News';
import Schedule from './sidenav/Schedule';

let sel = [];

class Sidenav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data,
      loading: true
    };
  }

  componentDidMount() {
    let appWindow = document.getElementsByClassName('App-intro')[0];
    appWindow.addEventListener('scroll', function() { 
        if (appWindow.scrollTop >= 455) {
          document.getElementById('top-content').setAttribute('style', 'position: fixed; top: 61px; border-top: 0; z-index: 2; max-width: 1200px');
          document.getElementById('news').setAttribute('style', 'margin-top: 60px');
      } else {
          document.getElementById('top-content').setAttribute('style', 'position: relative; top: auto; border-top: 1px solid #eee; z-index: 0; max-width: auto');
          document.getElementById('news').setAttribute('style', 'margin-top: 0');
        }
      }
    );
  }

  render() {
    switch (this.props.params.country) {
      case 'usa':
        sel = data.data[0];
        break;
      case 'uk':
        sel = data.data[1];
        break;
      case 'mexico':
        sel = data.data[2];
        break;
      case 'france':
        sel = data.data[3];
        break;
      case 'germany':
        sel = data.data[4];
        break;
      case 'canada':
        sel = data.data[5];
        break;
      case 'russia':
        sel = data.data[6];
        break;
      case 'china':
        sel = data.data[7];
        break;
      case 'japan':
        sel = data.data[8];
        break;
      default:
        sel = data.data[0];
        break;
    }

    return (
      <div className="contentBox">
        
        <div className="content">
          <div className="inner-content">
            <div id="datasheets">
              <DataSheets props={this.props.params} />
            </div>
            <div id="top-content" className="top-content">
              <div className="top-nav">
                <div className="top-banner">
                  <div className="top-title">{sel.leader}</div>
                  <div className="top-icon"><img className="top-leader" alt="" src={sel.image}></img></div>
                </div>
                <div className="content-box-links">
                  <a href="#datasheets">Datasheet</a>
                  <a href="#news">News</a>
                  <a href="#maps">Maps</a>
                  <a href="#schedule">Schedule</a>
                  <a href="#more">More</a>
                </div>
                <div className='top-flag'>
                  <img src={sel.flag} alt={sel.name} />
                </div>
              </div>
            </div>
            <div id="news">
              <News props={this.props.params} />
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

