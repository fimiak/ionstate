import React, { Component } from 'react';
import data from '../../data/data.json';
import NavLink from '../NavLink';
import LeaderList from './LeaderList';

const orderBy = data.data.slice(0);
let orderedList = orderBy.sort((a, b) => b.gdp - a.gdp);

function order() {
  for (let i = 0; i < orderedList.length; i += 1) {
    orderedList[i].order = i;
  }
}

class NavWrap extends Component {
  constructor(props) {
    super(props);

    this.state = {

      menu: this.props.menu,

    };

    order(); // Add key id/order to newly ordered lists

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    const showHide = (this.state.menu === false) ? 'show' : 'hidden';
    this.setState(prevState => ({
      menu: !prevState.menu,
      menuState: showHide,
    }));
  }

  render() {
    return (
      <div id="nav-wrap" className={`nav-wrap ${this.props.menuState}`}>
        <div className="inner-header">
          <div
            className="nav-sidenav"
            onClick={this.props.closeMenu}
            onKeyPress={this.props.closeMenu}
            role="button"
            tabIndex="0"
          >
            <LeaderList
              id="page1"
              country={orderedList}
              page={1}
              setNation={this.props.setNation}
              class="page-show"
            />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <NavLink to="/list">See All</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavWrap;
