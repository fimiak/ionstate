import React, { Component } from 'react';
import data from '../../data/data';
import NavLink from '../NavLink';
import LeaderList from './LeaderList';
import alignLeft from '../../icons/align-left.svg';
import barIcon from '../../icons/bar-chart.svg';
import forwardIcon from '../../icons/arrow-right.svg';
import trendIcon from '../../icons/trending-up.svg';
import typeIcon from '../../icons/type.svg';
import usersIcon from '../../icons/users.svg';

let orderedList = data.data;
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

        order();
        
        this.showMenu = this.showMenu.bind(this);
        this.changePage = this.changePage.bind(this);
        this.showAll = this.showAll.bind(this);
        this.hideAll = this.hideAll.bind(this);
        this.orderByName = this.orderByName.bind(this);
        this.orderByGdp = this.orderByGdp.bind(this);
        this.orderByGrowth = this.orderByGrowth.bind(this);
        this.orderByPop = this.orderByPop.bind(this);
    }

    componentDidMount() {
        document.getElementById('page2').setAttribute('style', 'visibility: hidden;max-height: 0;');
        document.getElementById('page3').setAttribute('style', 'visibility: hidden;max-height: 0;');
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
        this.setState(prevState => ({
            showAll: false
        }))
        if (this.state.page === 1 ) {
            document.getElementById('page1').setAttribute('style', 'visibility: hidden;max-height: 0;');
            document.getElementById('page2').setAttribute('style', 'visibility: visible;');
            document.getElementById('page3').setAttribute('style', 'visibility: hidden;max-height: 0;');
            this.setState(prevState => ({
                page: 2
                })
            );
        } else if (this.state.page === 2) {
            document.getElementById('page1').setAttribute('style', 'visibility: hidden;max-height: 0;');
            document.getElementById('page2').setAttribute('style', 'visibility: hidden;max-height: 0;opacity: 0;');
            document.getElementById('page3').setAttribute('style', 'visibility: visible;');
            this.setState(prevState => ({
                page: 3
                })
            );
        } else {
            document.getElementById('page1').setAttribute('style', 'visibility: visible;');
            document.getElementById('page2').setAttribute('style', 'visibility: hidden;max-height: 0;');
            document.getElementById('page3').setAttribute('style', 'visibility: hidden;max-height: 0;');
            this.setState(prevState => ({
                page: 1
                })
            );
        }
    }

    orderByGdp() {
        let byGdp = data.data.slice(0);
        byGdp.sort(function(a, b) {
            return b.gdp - a.gdp;
        });
        orderedList = byGdp;
        order();
        this.setState(prevState => ({
            orderBy: 'gdp'
        }))
    }

    orderByGrowth() {
        let byGrowth = data.data.slice(0);
        byGrowth.sort(function(a, b) {
            return b.gdpgrowth - a.gdpgrowth;
        });
        orderedList = byGrowth;
        order();
        this.setState(prevState => ({
            orderBy: 'growth'
        }))
    }

    orderByName() {
        let byName = data.data.slice(0);        
        byName.sort(function(a, b) {
            var x = a.search.toLowerCase();
            var y = b.search.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        orderedList = byName;
        order();
        this.setState(prevState => ({
            orderBy: 'name'
        }))
    }

    orderByPop() {
        let byPop = data.data.slice(0);
        byPop.sort(function(a, b) {
            return b.population - a.population;
        });
        orderedList = byPop;
        order();
        this.setState(prevState => ({
            orderBy: 'pop'
        }))
    }

    showAll() {
        this.setState(prevState => ({
            showAll: true
            }));
        document.getElementById('page1').setAttribute('style', 'visibility: visible;');
        document.getElementById('page2').setAttribute('style', 'visibility: visible;');
        document.getElementById('page3').setAttribute('style', 'visibility: visible;');
    }

    hideAll() {
        this.setState(prevState => ({
            showAll: false
            })
        );
        document.getElementById('page1').setAttribute('style', 'visibility: visible;');
        document.getElementById('page2').setAttribute('style', 'visibility: hidden;height: 0;');
        document.getElementById('page3').setAttribute('style', 'visibility: hidden;height: 0;');
        this.setState(prevState => ({
            page: 1
            })
        );
    }

    render() {
        return (
          <div id="nav-wrap" className={"nav-wrap " + this.props.menuState}>
            <div className="inner-header">
              <div className="nav-sidenav" onClick={this.props.closeMenu}>
                <ul id="page1" onClick={this.scrollTop}>
                    <LeaderList country={orderedList} page={1} setNation={this.props.setNation} />
                </ul>
                <ul id="page2" onClick={this.scrollTop}>
                    <LeaderList country={orderedList} page={2} setNation={this.props.setNation} />
                </ul>
                <ul id="page3" onClick={this.scrollTop}>
                    <LeaderList country={orderedList} page={3} setNation={this.props.setNation} />
                </ul>
              </div>
              <div className="nav-links">
                <ul>
                    <li>
                        <NavLink>
                        <img className="img-size" src={alignLeft} alt="Page Number" />Page {this.state.page} of 3</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" onClick={this.changePage}>
                        <img className="img-size" src={forwardIcon} alt="Next Page" />Next Page</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" onClick={this.state.showAll === false ?this.showAll : this.hideAll}>
                      <img className="img-size" src={alignLeft} alt="" />{this.state.showAll === false ? "Show All" : "Hide All"}</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" onClick={this.orderByName}>
                      <img className="img-size" src={typeIcon} alt="" />Order by Name</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" onClick={this.orderByGdp}>
                      <img className="img-size" src={barIcon} alt="" />Order by GDP</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" onClick={this.orderByGrowth}>
                      <img className="img-size" src={trendIcon} alt="" />Order by GDP Growth</NavLink>
                  </li>
                  <li>
                      <NavLink activeClassName="active" onClick={this.orderByPop}>
                      <img className="img-size" src={usersIcon} alt="Order population" />Order by Population</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}

export default NavWrap;