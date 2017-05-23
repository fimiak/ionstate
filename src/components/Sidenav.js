import React, {Component} from 'react';
import NavLink from './NavLink';
import Footer from './Footer';


class Sidenav extends Component {
  render() {
    return (
      <div className="contentBox">
        <div className="top-nav">
          <div className="site-banner">
            <h1 className="banner-text">Retracker</h1>
          </div>
          <div className="top-banner">
            <div className="top-icon"><img className="top-leader" alt="" src=""></img></div>
            <div className="top-title">{this.props.params.country}</div>
            <div className='top-flag'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flag_of_the_United_States_%283-2_aspect_ratio%29.svg/320px-Flag_of_the_United_States_%283-2_aspect_ratio%29.svg.png" alt="flag" />
            </div>
          </div>
          <div className="content-box-links">
            <NavLink to={"/sidenav/news/"+this.props.params.country}>News</NavLink>
            <NavLink to={"/sidenav/datasheets/"+this.props.params.country}>Data Sheet </NavLink>
            <NavLink to={"/sidenav/maps/"+this.props.params.country}>Maps</NavLink>
            <NavLink to={"/sidenav/schedule/"+this.props.params.country}>Schedule</NavLink>
            <NavLink to={"/sidenav/more/"+this.props.params.country}>More</NavLink>
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
