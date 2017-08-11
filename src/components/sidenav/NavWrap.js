import React, { Component } from 'react';
import NavLink from '../NavLink';
import data from '../../data/data';
import clearIcon from '../../icons/x-circle.svg';
import forwardIcon from '../../icons/arrow-right.svg';
import alignLeft from '../../icons/align-left.svg';
import barIcon from '../../icons/bar-chart.svg';
import usersIcon from '../../icons/users.svg';
import trendIcon from '../../icons/trending-up.svg';

const usa = data.data[0];
const uk = data.data[1];
const mexico = data.data[2];
const france = data.data[3];
const germany = data.data[4];
const canada = data.data[5];
const russia = data.data[6];
const china = data.data[7];
const japan = data.data[8];
const brazil = data.data[9];
const india = data.data[10];
const australia = data.data[11];
const europeanunion = data.data[12];
const argentina = data.data[13];
const indonesia = data.data[14];
const italy = data.data[15];
const southkorea = data.data[16];
const saudiarabia = data.data[17];
const turkey = data.data[18];
const southafrica = data.data[19];
const unitedarabemirates = data.data[20];
const egypt = data.data[21];
const vietnam = data.data[22];
const iran = data.data[23];
const nigeria = data.data[24];
const pakistan = data.data[25];
const thailand = data.data[26];


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
          <div id="nav-wrap" className={"nav-wrap " + this.props.menuState }>
            <div className="inner-header">
              <div className="nav-sidenav" onClick={this.closeMenu } >
                <ul id="page1" onClick={this.scrollTop}>
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
                <ul id="page2" onClick={this.scrollTop}>
                  <li><NavLink to="/brazil" onClick={() => this.setNation(brazil)}><img src={brazil.thumb} alt={brazil.leader} /><div className="copy">{brazil.leader}</div></NavLink></li>
                  <li><NavLink to="/india" onClick={() => this.setNation(india)}><img src={india.thumb} alt={india.leader} /><div className="copy">{india.leader}</div></NavLink></li>
                  <li><NavLink to="/australia" onClick={() => this.setNation(australia)}><img src={australia.thumb} alt={australia.leader} /><div className="copy">{australia.leader}</div></NavLink></li>
                  <li><NavLink to="/europeanunion" onClick={() => this.setNation(europeanunion)}><img src={europeanunion.thumb} alt={europeanunion.leader} /><div className="copy">{europeanunion.leader}</div></NavLink></li>
                  <li><NavLink to="/argentina" onClick={() => this.setNation(argentina)}><img src={argentina.thumb} alt={argentina.leader} /><div className="copy">{argentina.leader}</div></NavLink></li>
                  <li><NavLink to="/indonesia" onClick={() => this.setNation(indonesia)}><img src={indonesia.thumb} alt={indonesia.leader} /><div className="copy">{indonesia.leader}</div></NavLink></li>
                  <li><NavLink to="/italy" onClick={() => this.setNation(italy)}><img src={italy.thumb} alt={italy.leader} /><div className="copy">{italy.leader}</div></NavLink></li>
                  <li><NavLink to="/southkorea" onClick={() => this.setNation(southkorea)}><img src={southkorea.thumb} alt={southkorea.leader} /><div className="copy">{southkorea.leader}</div></NavLink></li>
                  <li><NavLink to="/saudiarabia" onClick={() => this.setNation(saudiarabia)}><img src={saudiarabia.thumb} alt={saudiarabia.leader} /><div className="copy">{saudiarabia.leader}</div></NavLink></li>
                </ul>
                <ul id="page3" onClick={this.scrollTop}>
                    <li><NavLink to="/turkey" onClick={() => this.setNation(turkey)}><img src={turkey.thumb} alt={turkey.leader} /><div className="copy">{turkey.leader}</div></NavLink></li>
                    <li><NavLink to="/southafrica" onClick={() => this.setNation(southafrica)}><img src={southafrica.thumb} alt={southafrica.leader} /><div className="copy">{southafrica.leader}</div></NavLink></li>
                    <li><NavLink to="/unitedarabemirates" onClick={() => this.setNation(unitedarabemirates)}><img src={unitedarabemirates.thumb} alt={unitedarabemirates.leader} /><div className="copy">{unitedarabemirates.leader}</div></NavLink></li>
                    <li><NavLink to="/egypt" onClick={() => this.setNation(egypt)}><img src={egypt.thumb} alt={egypt.leader} /><div className="copy">{egypt.leader}</div></NavLink></li>
                    <li><NavLink to="/vietnam" onClick={() => this.setNation(vietnam)}><img src={vietnam.thumb} alt={vietnam.leader} /><div className="copy">{vietnam.leader}</div></NavLink></li>
                    <li><NavLink to="/iran" onClick={() => this.setNation(iran)}><img src={iran.thumb} alt={iran.leader} /><div className="copy">{iran.leader}</div></NavLink></li>
                    <li><NavLink to="/nigeria" onClick={() => this.setNation(nigeria)}><img src={nigeria.thumb} alt={nigeria.leader} /><div className="copy">{nigeria.leader}</div></NavLink></li>
                    <li><NavLink to="/pakistan" onClick={() => this.setNation(pakistan)}><img src={pakistan.thumb} alt={pakistan.leader} /><div className="copy">{pakistan.leader}</div></NavLink></li>
                    <li><NavLink to="/thailand" onClick={() => this.setNation(thailand)}><img src={thailand.thumb} alt={thailand.leader} /><div className="copy">{thailand.leader}</div></NavLink></li>
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