import React, {Component} from 'react';
import NavLink from './NavLink';
import Footer from './Footer';
import data from '.././data/data';

let sel = [];

class Sidenav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data,
      loading: true
    };
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
      default:
        sel = data.data[0];
        break;
    }
    return (
      <div className="contentBox">
        <div className="top-nav">
          <div className="site-banner">
            <h2 className="banner-text">ReTrk | Tracking Global Figures</h2>
          </div>
          <div className="top-banner">
            <div className="top-icon"><img className="top-leader" alt="" src={sel.image}></img></div>
            <div className="top-title">{sel.leader}</div>
            <div className='top-flag'>
              <img src={sel.flag} alt={sel.name} />
            </div>
          </div>
          <div className="content-box-links">
            <NavLink to={"/"+this.props.params.country+"/news"}>News</NavLink>
            <NavLink to={"/"+this.props.params.country+"/datasheets"}>Data Sheet </NavLink>
            <NavLink to={"/"+this.props.params.country+"/maps"}>Maps</NavLink>
            <NavLink to={"/"+this.props.params.country+"/schedule"}>Schedule</NavLink>
            <NavLink to={"/"+this.props.params.country+"/more"}>More</NavLink>
          </div>
        </div>
        <div className="content">
          <div className="inner-content">
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

