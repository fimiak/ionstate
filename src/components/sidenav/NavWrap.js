import React, { Component } from 'react';
import NavLink from '../NavLink';
import PageMenu from './PageMenu';
import data from '../../data/data';
import clearIcon from '../../icons/x-circle.svg';
import forwardIcon from '../../icons/arrow-right.svg';
import alignLeft from '../../icons/align-left.svg';
import barIcon from '../../icons/bar-chart.svg';
import usersIcon from '../../icons/users.svg';
import trendIcon from '../../icons/trending-up.svg';

let country = [];
for (let i = 0; i < data.data.length; i++) {
    country[i] = data.data[i];
}

class NavWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data,
            selection: data.data[0],
            menu: this.props.menu,
            menuState: this.props.menuState,
            page: 1,
            orderBy: 'gdp'
        };

        this.showMenu = this.showMenu.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        document.getElementById('page1').setAttribute('style', 'display: flex;');
        document.getElementById('page2').setAttribute('style', 'display: none;');
        document.getElementById('page3').setAttribute('style', 'display: none;');
    }

    setNation(nation) {
        this.setState({
            selection: nation
        })
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

    changePage() {
        if (this.state.page === 1 ) {
            document.getElementById('page1').setAttribute('style', 'display: none;');
            document.getElementById('page2').setAttribute('style', 'display: flex;');
            document.getElementsByClassName('show')[0].setAttribute('style', 'height: 150px');
            this.setState(prevState => ({
                page: 2
                })
            );
        } else if (this.state.page === 2) {
            document.getElementById('page2').setAttribute('style', 'display: none;');
            document.getElementById('page3').setAttribute('style', 'display: flex;');
            document.getElementsByClassName('show')[0].setAttribute('style', 'height: 150px');
            this.setState(prevState => ({
                page: 3
                })
            );
        } else {
            document.getElementById('page3').setAttribute('style', 'display: none;');
            document.getElementById('page1').setAttribute('style', 'display: flex;');
            document.getElementsByClassName('show')[0].setAttribute('style', 'height: 150px');
            this.setState(prevState => ({
                page: 1
                })
            );
        }
    }

    showAll() {
        document.getElementById('page1').setAttribute('style', 'display: flex');
        document.getElementById('page2').setAttribute('style', 'display: flex');
        document.getElementById('page3').setAttribute('style', 'display: flex');
        document.getElementsByClassName('show')[0].setAttribute('style', 'height: auto');
    }

    render() {
        return (
          <div id="nav-wrap" className={"nav-wrap " + this.props.menuState}>
            <div className="inner-header">
              <div className="nav-sidenav" onClick={this.props.closeMenu}>
                <ul id="page1" onClick={this.scrollTop}>
                    <PageMenu country={country} page={1} />
                </ul>
                <ul id="page2" onClick={this.scrollTop}>
                    <PageMenu country={country} page={2} />
                </ul>
                <ul id="page3" onClick={this.scrollTop}>
                    <PageMenu country={country} page={3} />
                </ul>
              </div>
              <div className="nav-links">
                <ul>
                  <li>
                      <NavLink activeClassName="active">
                      <img className="img-size" src={barIcon} alt="order gdp" />Order By GDP</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active">
                      <img className="img-size" src={usersIcon} alt="order population" />Order By Population</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active">
                      <img className="img-size" src={trendIcon} alt="order growth" />Order By Growth</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" onClick={this.showAll}>
                      <img className="img-size" src={clearIcon} alt="About" />Show All</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" onClick={this.changePage}>
                      <img className="img-size" src={forwardIcon} alt="Next Page" />Next Page</NavLink>
                  </li>
                  <li>
                      <NavLink>
                      <img className="img-size" src={alignLeft} alt="Page Number" />Page {this.state.page}</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}

export default NavWrap;