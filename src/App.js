import React, { Component } from 'react/react.js';
import NavWrap from './components/sidenav/NavWrap';
import { fetchedNews } from './components/requests/NewsLoader';
import closeIcon from './icons/x.svg';
import data from './data/data';
import menuIcon from './icons/menu.svg';
import testdata from './data/testdata';
import './App.css';

let list = [];
for (let i = 0; i < data.data.length; i++) { // Assign data.data[i] to 'country' key.
list[data.data[i]['country']] = data.data[i];
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      news: [],
      menu: false,
      menuState: 'hidden',
      nation: list['uk']
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.setNation = this.setNation.bind(this);
  }

  componentDidMount() {
    this.setState(prevState => ({
      nation: list[this.props.params.country]
    }))
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

  setNation(arg) {
    this.setState(prevState => ({
      nation: list[arg]
      })
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" >
          <div className="logo-wrap">
            <a className="title-link" href="/"><h4 className="title"><img className="globeIcon" src="globe.ico" alt="" /> | PRESIDENTPRIME</h4></a>
            <div className="navbar" onClick={this.showMenu}>
              <button className="button-menu">{(this.state.menu === false) ? <img className="open-menu" src={menuIcon} alt="open" /> : <img className="close-menu" src={closeIcon} alt="close" />}</button>
            </div>
          </div>
          <NavWrap menu={this.state.menu} menuState={this.state.menuState} closeMenu={this.closeMenu} nation={this.state.nation} setNation={this.setNation} />
        </div>
        <div className="App-intro">
          {React.cloneElement(this.props.children, { nation: this.state.nation, news: fetchedNews, setNation: this.setNation, showMenu: this.showMenu, testdata: testdata })}
        </div>
      </div>
    );
  }
}

export default App;