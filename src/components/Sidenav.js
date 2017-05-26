import React, {Component} from 'react';
import NavLink from './NavLink';
import Footer from './Footer';
import Datasheets from './sidenav/DataSheets';
import data from '.././data/data';

let sel = [];

class Sidenav extends Component {

  constructor() {
    super();
    this.state = {
      news: [],
      data: data,
      loading: true
    };
  }

  render() {
    switch (this.props.selection) {
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
      default:
        sel = data.data[0];
        break;
    }
    return (
      <div className="contentBox">
        <div className="top-nav">
          <div className="site-banner">
            <h2 className="banner-text">{sel.name}</h2>
          </div>
          <div className="top-banner">
            <div className="top-icon"><img className="top-leader" alt="" src={sel.image}></img></div>
            <div className="top-title">{sel.leader}</div>
            <div className='top-flag'>
              <img src={sel.flag} alt={sel.name} />
            </div>
          </div>
          <div className="content-box-links">
            <NavLink to={"/"+this.props.selection+"/news"}>News</NavLink>
            <NavLink to={"/"+this.props.selection+"/datasheets"}>Data Sheet </NavLink>
            <NavLink to={"/"+this.props.selection+"/maps"}>Maps</NavLink>
            <NavLink to={"/"+this.props.selection+"/schedule"}>Schedule</NavLink>
            <NavLink to={"/"+this.props.selection+"/more"}>More</NavLink>
          </div>
        </div>
        <div className="content">
          <div className="inner-content">
            <Datasheets selection={this.props.selection} />
            {this.props.children}
          </div>
        </div>
        <div className="footer">
          <div className="inner-footer">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Sidenav;

