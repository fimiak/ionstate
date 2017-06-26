import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import NavLink from './components/NavLink';
import closeIcon from './icons/x.svg';
// import infoIcon from './icons/info.svg';
import menuIcon from './icons/menu.svg';
import clearIcon from './icons/x-circle.svg';
import forwardIcon from './icons/arrow-right.svg';
import backIcon from './icons/arrow-left.svg';
import barIcon from './icons/bar-chart.svg';
import usersIcon from './icons/users.svg';
import trendIcon from './icons/trending-up.svg';
import data from './data/data';
import './App.css';
//import { load } from './actions';


var album = {
  title: 'a',
  artist: 'M',
  year: 1961
}

var store = createStore(reducer, {}, applyMiddleware(thunk));

var state = store.getState();

function reducer (state, action) {
  switch (action.type) {
    case 'PUBLISH':
      return { ...state, published: true }
    default:
      return;
  }
}

//console.log(store.getState());
store.dispatch({ type: 'PUBLISH' })
//console.log(store.getState());

//store.dispatch(load);


class App extends Component {

  constructor() {
    super();
    this.state = {
      news: [],
      data: data,
      selection: data.data[0],
      loading: true,
      menu: false,
      menuState: 'hidden'
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  setNation = (nation) => {
    this.setState({
      selection: nation
    })
  }

  showMenu() {
    const showHide = (this.state.menu === false) ? 'show' : 'hidden';
    this.setState(prevState => ({
      menu: !prevState.menu,
      menuState: showHide
    }));
  }

  closeMenu() {
    this.setState({
      menu: false,
      menuState: 'hidden'
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="logo-wrap">
            <a className="title-link" href="/"><h4 className="title">Rtk | Retracker</h4></a>
            <button className="button-menu" onClick={this.showMenu}>{(this.state.menu === false) ? <img className="open-menu" src={menuIcon} alt="open" /> : <img className="close-menu" src={closeIcon} alt="close" /> }</button>
          </div>
          <div className={"nav-wrap " + this.state.menuState }>
            <div className="inner-header">
              <div className="nav-sidenav">
                <ul>
                  <li><NavLink to="/usa" onClick={() => this.setNation(data.data[0])}><img src={data.data[0].thumb} alt="Donald Trump" /><div className="copy" id="copy">{data.data[0].leader}</div></NavLink></li>
                  <li><NavLink to="/germany" onClick={() => this.setNation(data.data[4])}><img src={data.data[4].thumb} alt="Angela Merkel" /><div className="copy">{data.data[4].leader}</div></NavLink></li>
                  <li><NavLink to="/france" onClick={() => this.setNation(data.data[3])}><img src={data.data[3].thumb} alt="Emmanuel Macron" /><div className="copy">{data.data[3].leader}</div></NavLink></li>
                  <li><NavLink to="/russia" onClick={() => this.setNation(data.data[6])}><img src={data.data[6].thumb} alt="Vladimir Putin" /><div className="copy">{data.data[6].leader}</div></NavLink></li>
                  <li><NavLink to="/canada" onClick={() => this.setNation(data.data[5])}><img src={data.data[5].thumb} alt="Justin Trudeau" /><div className="copy">{data.data[5].leader}</div></NavLink></li>
                  <li><NavLink to="/mexico" onClick={() => this.setNation(data.data[2])}><img src={data.data[2].thumb} alt="Pena Nieto" /><div className="copy">{data.data[2].leader}</div></NavLink></li>
                  <li><NavLink to="/uk" onClick={() => this.setNation(data.data[1])}><img src={data.data[1].thumb} alt="Theresa May" /><div className="copy">{data.data[1].leader}</div></NavLink></li>
                  <li><NavLink to="/china" onClick={() => this.setNation(data.data[7])}><img src={data.data[7].thumb} alt="Xi Jinping" /><div className="copy">{data.data[7].leader}</div></NavLink></li>
                  <li><NavLink to="/japan" onClick={() => this.setNation(data.data[8])}><img src={data.data[8].thumb} alt="Shinzo Abe" /><div className="copy">{data.data[8].leader}</div></NavLink></li>
                </ul>
              </div>
              <div className="nav-links">
                <ul>
                  <li><NavLink activeClassName="active"><img className="img-size" src={barIcon} alt="gdp" />Filter By GDP</NavLink></li>
                  <li><NavLink activeClassName="active"><img className="img-size" src={usersIcon} alt="population" />Filter By Population</NavLink></li>
                  <li><NavLink activeClassName="active"><img className="img-size" src={trendIcon} alt="growth" />Filter By Growth</NavLink></li>
                  <li><NavLink activeClassName="active"><img className="img-size" src={clearIcon} alt="page number" />Page 1 of 1</NavLink></li>                  
                  <li><NavLink activeClassName="active"><img className="img-size" src={forwardIcon} alt="next" />Next Page</NavLink></li>
                  <li><NavLink activeClassName="active"><img className="img-size" src={backIcon} alt="back" />Previous Page</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="App-intro" onClick={this.closeMenu}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;