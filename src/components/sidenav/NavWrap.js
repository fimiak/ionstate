import React, { Component } from 'react';
import NavLink from '../NavLink';
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
            page: 1
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
            this.setState(prevState => ({
                page: 2
                })
            );
        } else if (this.state.page === 2) {
            document.getElementById('page2').setAttribute('style', 'display: none;');
            document.getElementById('page3').setAttribute('style', 'display: flex;');
            this.setState(prevState => ({
                page: 3
                })
            );
        } else {
            document.getElementById('page3').setAttribute('style', 'display: none;');
            document.getElementById('page1').setAttribute('style', 'display: flex;');
            this.setState(prevState => ({
                page: 1
                })
            );
        }
    }

    render() {
        
        return (
          <div id="nav-wrap" className={"nav-wrap " + this.props.menuState}>
            <div className="inner-header" >
              <div className="nav-sidenav" onClick={this.props.closeMenu}>
                <ul id="page1" onClick={this.scrollTop}>
                  <li><NavLink to="'/' + {country[0]}" onClick={() => this.setNation(country[0])}>
                    <img src={country[0].thumb} alt={country[0].leader} />
                    <div className="copy" id="copy">{country[0].leader}</div></NavLink></li>
                  <li><NavLink to="/uk" onClick={() => this.setNation(country[1])}>
                    <img src={country[1].thumb} alt={country[1].leader} />
                    <div className="copy">{country[1].leader}</div></NavLink>
                  </li>
                  <li><NavLink to="/mexico" onClick={() => this.setNation(country[2])}>
                    <img src={country[2].thumb} alt={country[2].leader} />
                    <div className="copy">{country[2].leader}</div></NavLink>
                  </li>
                  <li><NavLink to="/france" onClick={() => this.setNation(country[3])}>
                    <img src={country[3].thumb} alt={country[3].leader} />
                    <div className="copy">{country[3].leader}</div></NavLink>
                  </li>
                  <li><NavLink to="/germany" onClick={() => this.setNation(country[4])}>
                    <img src={country[4].thumb} alt={country[4].leader} />
                    <div className="copy">{country[4].leader}</div></NavLink></li>
                  <li><NavLink to="/canada" onClick={() => this.setNation(country[5])}>
                    <img src={country[5].thumb} alt={country[5].leader} />
                    <div className="copy">{country[5].leader}</div></NavLink></li>
                  <li><NavLink to="/russia" onClick={() => this.setNation(country[6])}>
                    <img src={country[6].thumb} alt={country[6].leader} />
                    <div className="copy">{country[6].leader}</div></NavLink></li>
                  <li><NavLink to="/china" onClick={() => this.setNation(country[7])}>
                    <img src={country[7].thumb} alt={country[7].leader} />
                    <div className="copy">{country[7].leader}</div></NavLink></li>
                  <li><NavLink to="/japan" onClick={() => this.setNation(country[8])}>
                    <img src={country[8].thumb} alt={country[8].leader} />
                    <div className="copy">{country[8].leader}</div></NavLink>
                  </li>
                </ul>
                <ul id="page2" onClick={this.scrollTop}>
                  <li><NavLink to="/brazil" onClick={() => this.setNation(country[9])}><img src={country[9].thumb} alt={country[9].leader} /><div className="copy">{country[9].leader}</div></NavLink></li>
                  <li><NavLink to="/india" onClick={() => this.setNation(country[10])}><img src={country[10].thumb} alt={country[10].leader} /><div className="copy">{country[10].leader}</div></NavLink></li>
                  <li><NavLink to="/australia" onClick={() => this.setNation(country[11])}><img src={country[11].thumb} alt={country[11].leader} /><div className="copy">{country[11].leader}</div></NavLink></li>
                  <li><NavLink to="/europeanunion" onClick={() => this.setNation(country[12])}><img src={country[12].thumb} alt={country[12].leader} /><div className="copy">{country[12].leader}</div></NavLink></li>
                  <li><NavLink to="/argentina" onClick={() => this.setNation(country[13])}><img src={country[13].thumb} alt={country[13].leader} /><div className="copy">{country[13].leader}</div></NavLink></li>
                  <li><NavLink to="/indonesia" onClick={() => this.setNation(country[14])}><img src={country[14].thumb} alt={country[14].leader} /><div className="copy">{country[14].leader}</div></NavLink></li>
                  <li><NavLink to="/italy" onClick={() => this.setNation(country[15])}><img src={country[15].thumb} alt={country[15].leader} /><div className="copy">{country[15].leader}</div></NavLink></li>
                  <li><NavLink to="/southkorea" onClick={() => this.setNation(country[16])}><img src={country[16].thumb} alt={country[16].leader} /><div className="copy">{country[16].leader}</div></NavLink></li>
                  <li><NavLink to="/saudiarabia" onClick={() => this.setNation(country[17])}><img src={country[17].thumb} alt={country[17].leader} /><div className="copy">{country[17].leader}</div></NavLink></li>
                </ul>
                <ul id="page3" onClick={this.scrollTop}>
                    <li><NavLink to="/turkey" onClick={() => this.setNation(country[18])}><img src={country[18].thumb} alt={country[18].leader} /><div className="copy">{country[18].leader}</div></NavLink></li>
                    <li><NavLink to="/southafrica" onClick={() => this.setNation(country[19])}><img src={country[19].thumb} alt={country[19].leader} /><div className="copy">{country[19].leader}</div></NavLink></li>
                    <li><NavLink to="/unitedarabemirates" onClick={() => this.setNation(country[20])}><img src={country[20].thumb} alt={country[20].leader} /><div className="copy">{country[20].leader}</div></NavLink></li>
                    <li><NavLink to="/egypt" onClick={() => this.setNation(country[21])}><img src={country[21].thumb} alt={country[21].leader} /><div className="copy">{country[21].leader}</div></NavLink></li>
                    <li><NavLink to="/vietnam" onClick={() => this.setNation(country[22])}><img src={country[22].thumb} alt={country[22].leader} /><div className="copy">{country[22].leader}</div></NavLink></li>
                    <li><NavLink to="/iran" onClick={() => this.setNation(country[23])}><img src={country[23].thumb} alt={country[23].leader} /><div className="copy">{country[23].leader}</div></NavLink></li>
                    <li><NavLink to="/nigeria" onClick={() => this.setNation(country[24])}><img src={country[24].thumb} alt={country[24].leader} /><div className="copy">{country[24].leader}</div></NavLink></li>
                    <li><NavLink to="/pakistan" onClick={() => this.setNation(country[25])}><img src={country[25].thumb} alt={country[25].leader} /><div className="copy">{country[25].leader}</div></NavLink></li>
                    <li><NavLink to="/thailand" onClick={() => this.setNation(country[26])}><img src={country[26].thumb} alt={country[26].leader} /><div className="copy">{country[26].leader}</div></NavLink></li>
                </ul>
              </div>
              <div className="nav-links">
                <ul>
                  <li><NavLink activeClassName="active"><img className="img-size" src={barIcon} alt="gdp" />Filter By GDP</NavLink></li>
                  <li><NavLink activeClassName="active"><img className="img-size" src={usersIcon} alt="population" />Filter By Population</NavLink></li>
                  <li><NavLink activeClassName="active"><img className="img-size" src={trendIcon} alt="growth" />Filter By Growth</NavLink></li>
                  <li><NavLink to='/' activeClassName="active"><img className="img-size" src={clearIcon} alt="about" />About</NavLink></li>                  
                  <li><NavLink activeClassName="active" onClick={this.changePage}><img className="img-size" src={forwardIcon} alt="next" />Next Page</NavLink></li>
                  <li><NavLink><img className="img-size" src={alignLeft} alt="page" />Page {this.state.page}</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}

export default NavWrap;