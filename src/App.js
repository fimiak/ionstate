import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import { createStore } from 'redux'; // Not using Redux currently
import NavLink from './components/NavLink';
import logo from './world.svg';
import data from './data/data';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      news: [],
      data: data,
      selection: data.data[0],
      loading: true
    };
  }

  setNation = (nation) => {
    this.setState({
      selection: nation
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="inner-header">
            <div className="logo-wrap">
              <a className="title-link" href="/"><h4 className="title">ReTrk</h4></a>
            </div>
            <div className="nav-sidenav">
              <ul>
                <li><NavLink to="/usa/datasheets" onClick={() => this.setNation(data.data[0])}><img src="https://qph.ec.quoracdn.net/main-thumb-t-28717-50-qylrwevlxgcnoddancubpsnfajpuqoba.jpeg" alt="Donald Trump" /><div className="copy" id="copy">{data.data[0].leader}</div></NavLink></li>
                <li><NavLink to="/germany/datasheets" onClick={() => this.setNation(data.data[4])}><img src="https://d2m2lkhawsaq1u.cloudfront.net/uploads/trial/size50by50/Angela_Merkel_(August_2012)_cropped_1393309849.jpg" alt="Angela Merkel" /><div className="copy">{data.data[4].leader}</div></NavLink></li>
                <li><NavLink to="/france/datasheets" onClick={() => this.setNation(data.data[3])}><img src="http://s3.amazonaws.com/memoriabg/wp-content/uploads/2017/02/afp-emmanuel-macron-emmanuel-macron-ni-de-gauche-ni-de-droite-l-homme-multidirectionnel-50x50.jpg" alt="Emmanuel Macron" /><div className="copy">{data.data[3].leader}</div></NavLink></li>
                <li><NavLink to="/russia/datasheets" onClick={() => this.setNation(data.data[6])}><img src="https://i2.wp.com/i.forbesimg.com/media/lists/people/vladimir-putin_50x50.jpg" alt="Vladimir Putin" /><div className="copy">{data.data[6].leader}</div></NavLink></li>
                <li><NavLink to="/canada/datasheets" onClick={() => this.setNation(data.data[5])}><img src="https://qph.ec.quoracdn.net/main-thumb-2395782-50-injemmlgfuvhqtrreyfvjrtqsrgkcomp.jpeg" alt="Justin Trudeau" /><div className="copy">{data.data[5].leader}</div></NavLink></li>
                <li><NavLink to="/mexico/datasheets" onClick={() => this.setNation(data.data[2])}><img src="http://tmj.mx/wp-content/uploads/2017/01/Captura-de-pantalla-2017-01-26-a-las-1.18.33-p.m.-50x50.png" alt="Pena Nieto" /><div className="copy">{data.data[2].leader}</div></NavLink></li>
                <li><NavLink to="/uk/datasheets" onClick={() => this.setNation(data.data[1])}><img src="https://www.thejc.com/image/policy:1.429392:1481817425/20160713172905!Theresa_May_UK_Home_Office_(cropped).jpg?f=1x1&w=50&$p$f$w=8a40945" alt="Theresa May" /><div className="copy">{data.data[1].leader}</div></NavLink></li>
              </ul>
              <NavLink to="/" className="about" activeClassName="active">Info</NavLink>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;