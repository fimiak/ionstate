import React, { Component } from 'react/react.js';
import data from '../../data/data';
import NavLink from '../NavLink';
import LeaderList from './LeaderList';
import alignLeft from '../../icons/align-left.svg';
import barIcon from '../../icons/bar-chart.svg';
import list from '../../icons/list.svg';
import forwardIcon from '../../icons/arrow-right.svg';
import trendIcon from '../../icons/trending-up.svg';
import typeIcon from '../../icons/type.svg';
import usersIcon from '../../icons/users.svg';

let orderBy = data.data.slice(0);
let orderedList = orderBy.sort(function(a, b) {
    return b.gdp - a.gdp;
});
function order() {
    for(let i = 0; i < orderedList.length; i++) {
        orderedList[i].order = i
    }
}

class NavWrap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data,
            selection: this.props.nation,
            menu: this.props.menu,
            menuState: this.props.menuState,
            orderBy: 'gdp',
            page: 1,
            showAll: false
        };

        order(); // Add key id/order to newly ordered lists
        
        this.showMenu = this.showMenu.bind(this);
        this.changePage = this.changePage.bind(this);
        this.showAll = this.showAll.bind(this);
        this.hideAll = this.hideAll.bind(this);
        this.orderByName = this.orderByName.bind(this);
        this.orderByGdp = this.orderByGdp.bind(this);
        this.orderByGrowth = this.orderByGrowth.bind(this);
        this.orderByPop = this.orderByPop.bind(this);
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
            document.getElementById('page1').classList.remove('page-show');
            document.getElementById('page2').classList.add('page-show');
            document.getElementById('page3').classList.remove('page-show');            
            this.setState(prevState => ({
                page: 2,
                showAll: false                
                })
            );
        } else if (this.state.page === 2) {
            document.getElementById('page2').classList.remove('page-show');
            document.getElementById('page3').classList.add('page-show');
            this.setState(prevState => ({
                page: 3,
                showAll: false                
                })
            );
        } else {
            document.getElementById('page3').classList.remove('page-show');
            document.getElementById('page1').classList.add('page-show');
            this.setState(prevState => ({
                page: 1,
                showAll: false                
                })
            );
        }
    }

    orderByGdp() {
        orderedList.sort(function(a, b) {
            return b.gdp - a.gdp;
        });
        order();
        this.setState(prevState => ({
            orderBy: 'gdp'
        }))
    }

    orderByGrowth() {
        orderedList.sort(function(a, b) {
            return b.gdpgrowth - a.gdpgrowth;
        });
        order();
        document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[4].classList.add('nav-links-active');
        this.setState(prevState => ({
            orderBy: 'growth'
        }))
    }

    orderByName() {
        orderedList.sort(function(a, b) {
            var x = a.search.toLowerCase();
            var y = b.search.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        order();
        this.setState(prevState => ({
            orderBy: 'name'
        }))
    }

    orderByPop() {
        orderedList.sort(function(a, b) {
            return b.population - a.population;
        });
        order();
        document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[6].classList.add('nav-links-active');
        this.setState(prevState => ({
            orderBy: 'pop'
        }))
    }

    showAll() {
        this.setState(prevState => ({
            showAll: true,
            page: 1
            }));
        document.getElementById('page1').classList.add('page-show');
        document.getElementById('page2').classList.add('page-show');
        document.getElementById('page3').classList.add('page-show');
    }

    hideAll() {
        this.setState(prevState => ({
            showAll: false,
            page: 1
            })
        );
        document.getElementById('page1').classList.add('page-show');
        document.getElementById('page2').classList.remove('page-show');
        document.getElementById('page3').classList.remove('page-show');
    }


    componentDidUpdate() {
        if (this.state.orderBy === 'gdp') {
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[3].classList.add('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[4].classList.remove('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[5].classList.remove('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[6].classList.remove('nav-links-active');
        } else if (this.state.orderBy === 'growth') {
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[3].classList.remove('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[4].classList.add('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[5].classList.remove('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[6].classList.remove('nav-links-active');
        } else if (this.state.orderBy === 'name') {
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[3].classList.remove('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[4].classList.remove('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[5].classList.add('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[6].classList.remove('nav-links-active');
        } else if (this.state.orderBy === 'pop') {
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[3].classList.remove('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[4].classList.remove('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[5].classList.remove('nav-links-active');
            document.getElementsByClassName('nav-links')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[6].classList.add('nav-links-active');
        } else {
            console.log('else');
        }
    }

    render() {
        return (
          <div id="nav-wrap" className={"nav-wrap " + this.props.menuState}>
            <div className="inner-header">
              <div className="nav-sidenav" onClick={this.props.closeMenu}>
                <LeaderList id="page1" country={orderedList} page={1} setNation={this.props.setNation} scrollTop={this.scrollTop} class="page-show" />
                <LeaderList id="page2" scrollTop={this.scrollTop} country={orderedList} page={2} setNation={this.props.setNation} />
                <LeaderList id="page3" scrollTop={this.scrollTop} country={orderedList} page={3} setNation={this.props.setNation} />
              </div>
              <div className="nav-links">
                <ul>
                    <li>
                        <NavLink>
                        <img className="img-size" src={alignLeft} alt="" />Page {this.state.page} of 3</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" onClick={this.changePage}>
                        <img className="img-size" src={forwardIcon} alt="Next Page" />Next Page</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" onClick={this.state.showAll === false ?this.showAll : this.hideAll}>
                      <img className="img-size" src={list} alt="" />{this.state.showAll === false ? "Show All" : "Hide All"}</NavLink>
                    </li>

                  <li>
                      <NavLink activeClassName="active" onClick={this.orderByGdp}>
                      <img className="img-size" src={barIcon} alt="" />Sort by GDP</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" onClick={this.orderByGrowth}>
                      <img className="img-size" src={trendIcon} alt="" />Sort by GDP Growth</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" onClick={this.orderByName}>
                      <img className="img-size" src={typeIcon} alt="" />Sort by Leaders A-Z</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" onClick={this.orderByPop}>
                      <img className="img-size" src={usersIcon} alt="" />Sort by Population</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}

export default NavWrap;