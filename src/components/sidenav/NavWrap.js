import React, { Component } from 'react';
import NavLink from '../NavLink';
import data from '../../data/data';
import clearIcon from '../../icons/x-circle.svg';
import forwardIcon from '../../icons/arrow-right.svg';
import backIcon from '../../icons/arrow-left.svg';
import barIcon from '../../icons/bar-chart.svg';
import usersIcon from '../../icons/users.svg';
import trendIcon from '../../icons/trending-up.svg';

let usa = data.data[0];
let uk = data.data[1];
let mexico = data.data[2];
let france = data.data[3];
let germany = data.data[4];
let canada = data.data[5];
let russia = data.data[6];
let china = data.data[7];
let japan = data.data[8];
let brazil = data.data[9];
let india = data.data[10];

class NavWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data,
            selection: data.data[0],
            menu: this.props.menu,
            menuState: this.props.menuState,
            page: 1
        };

        this.closeMenu = this.closeMenu.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    setNation = (nation) => {
        this.setState({
        selection: nation
        })
    }

    closeMenu() {
        this.setState({
        menu: false,
        menuState: 'hidden'
        });
    }

    showMenu() {
        const showHide = (this.state.menu === false) ? 'show' : 'hidden';
        this.setState(prevState => ({
            menu: !prevState.menu,
            menuState: showHide
        })
      );
    }

    scrollTop() {
        document.getElementsByClassName('App-intro')[0].scrollTop = 0;
    }

    setPage = (page) => {
        this.setState({
            page: page
        })
    }

    render() {
        console.log(this.state.page);
        return (
          <div id="nav-wrap" className={"nav-wrap " + this.props.menuState }>
            <div className="inner-header">
              <div className="nav-sidenav" onClick={this.closeMenu}>
                <ul id="page-one" onClick={this.scrollTop}>
                  <li><NavLink to="/usa" onClick={() => this.setNation(usa)}><img src={usa.thumb} alt={usa.leader} /><div className="copy" id="copy">{usa.leader}</div></NavLink></li>
                  <li><NavLink to="/germany" onClick={() => this.setNation(germany)}><img src={germany.thumb} alt={germany.leader} /><div className="copy">{germany.leader}</div></NavLink></li>
                  <li><NavLink to="/france" onClick={() => this.setNation(france)}><img src={france.thumb} alt={france.leader} /><div className="copy">{france.leader}</div></NavLink></li>
                  <li><NavLink to="/russia" onClick={() => this.setNation(russia)}><img src={russia.thumb} alt={russia.leader} /><div className="copy">{russia.leader}</div></NavLink></li>
                  <li><NavLink to="/canada" onClick={() => this.setNation(canada)}><img src={canada.thumb} alt={canada.leader} /><div className="copy">{canada.leader}</div></NavLink></li>
                  <li><NavLink to="/mexico" onClick={() => this.setNation(mexico)}><img src={mexico.thumb} alt={mexico.leader} /><div className="copy">{mexico.leader}</div></NavLink></li>
                  <li><NavLink to="/uk" onClick={() => this.setNation(uk)}><img src={uk.thumb} alt={uk.leader} /><div className="copy">{uk.leader}</div></NavLink></li>
                  <li><NavLink to="/china" onClick={() => this.setNation(china)}><img src={china.thumb} alt={china.leader} /><div className="copy">{china.leader}</div></NavLink></li>
                  <li><NavLink to="/japan" onClick={() => this.setNation(japan)}><img src={japan.thumb} alt={japan.leader} /><div className="copy">{japan.leader}</div></NavLink></li>
                </ul>
                <ul id="page-two">
                  <li><NavLink to="/brazil" onClick={() => this.setNation(brazil)}><img src={brazil.thumb} alt={brazil.leader} /><div className="copy">{brazil.leader}</div></NavLink></li>
                  <li><NavLink to="/india" onClick={() => this.setNation(india)}><img src={india.thumb} alt={india.leader} /><div className="copy">{india.leader}</div></NavLink></li>
                </ul>
              </div>
              <div className="nav-links">
                <ul>
                  <li><NavLink activeClassName="active"><img className="img-size" src={barIcon} alt="gdp" />Filter By GDP</NavLink></li>
                  <li><NavLink activeClassName="active"><img className="img-size" src={usersIcon} alt="population" />Filter By Population</NavLink></li>
                  <li><NavLink activeClassName="active"><img className="img-size" src={trendIcon} alt="growth" />Filter By Growth</NavLink></li>
                  <li><NavLink to='/' activeClassName="active"><img className="img-size" src={clearIcon} alt="about" />About</NavLink></li>                  
                  <li><NavLink activeClassName="active" onClick={() => this.setPage(2)}><img className="img-size" src={forwardIcon} alt="next" />Next Page</NavLink></li>
                  <li><NavLink activeClassName="active" onClick={() => this.setPage(1)}><img className="img-size" src={backIcon} alt="back" />Previous Page</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}

export default NavWrap;