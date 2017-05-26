import React, { Component } from 'react';
//import { createStore } from 'redux'; // Not using currently
import NavLink from './components/NavLink';
import logo from './world.svg';
import data from './data/data';
import Sidenav from './components/Sidenav';
import './App.css';

let usa = data.data[0];
let uk = data.data[1];
let mexico = data.data[2];
let france = data.data[3];
let germany = data.data[4];
let canada = data.data[5];
let russia = data.data[6];

class App extends Component {

  constructor() {
    super();
    this.state = {
      news: [],
      data: data,
      selection: 'usa',
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
                <li><NavLink to="/usa/datasheets" onClick={() => this.setNation('usa')}><img src="https://qph.ec.quoracdn.net/main-thumb-t-28717-50-qylrwevlxgcnoddancubpsnfajpuqoba.jpeg" alt="Donald Trump" /><div className="copy" id="copy">{usa.leader}</div></NavLink></li>
                <li><NavLink to="/germany/datasheets" onClick={() => this.setNation('germany')}><img src="https://d2m2lkhawsaq1u.cloudfront.net/uploads/trial/size50by50/Angela_Merkel_(August_2012)_cropped_1393309849.jpg" alt="Angela Merkel" /><div className="copy">{germany.leader}</div></NavLink></li>
                <li><NavLink to="/france/datasheets" onClick={() => this.setNation('france')}><img src="https://qph.ec.quoracdn.net/main-thumb-2395782-50-injemmlgfuvhqtrreyfvjrtqsrgkcomp.jpeg" alt="Emmanuel Macron" /><div className="copy">{france.leader}</div></NavLink></li>
                <li><NavLink to="/russia/datasheets" onClick={() => this.setNation('russia')}><img src="https://i2.wp.com/i.forbesimg.com/media/lists/people/vladimir-putin_50x50.jpg" alt="Vladimir Putin" /><div className="copy">{russia.leader}</div></NavLink></li>
                <li><NavLink to="/canada/datasheets" onClick={() => this.setNation('canada')}><img src="https://qph.ec.quoracdn.net/main-thumb-2395782-50-injemmlgfuvhqtrreyfvjrtqsrgkcomp.jpeg" alt="Justin Trudeau" /><div className="copy">{canada.leader}</div></NavLink></li>
                <li><NavLink to="/mexico/datasheets" onClick={() => this.setNation('mexico')}><img src="http://tmj.mx/wp-content/uploads/2017/01/Captura-de-pantalla-2017-01-26-a-las-1.18.33-p.m.-50x50.png" alt="Pena Nieto" /><div className="copy">{mexico.leader}</div></NavLink></li>
                <li><NavLink to="/uk/datasheets" onClick={() => this.setNation('uk')}><img src="https://www.thejc.com/image/policy:1.429392:1481817425/20160713172905!Theresa_May_UK_Home_Office_(cropped).jpg?f=1x1&w=50&$p$f$w=8a40945" alt="Theresa May" /><div className="copy">{uk.leader}</div></NavLink></li>
              </ul>
              <NavLink to="/" className="about" activeClassName="active">Info</NavLink>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>
        <div className="App-intro">
          <Sidenav selection={this.state.selection} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;