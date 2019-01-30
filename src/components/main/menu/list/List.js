import React, { Component } from 'react';
import GridList from './GridList';
import NavLink from '../../.././NavLink';
// SVGs
import barIcon from '../../../../icons/bar-chart.svg';
import list from '../../../../icons/list.svg';
import trendIcon from '../../../../icons/trending-up.svg';
import typeIcon from '../../../../icons/type.svg';

class List extends Component {
  constructor(props) {
    super(props);
    this.orderBy = this.props.data.data.slice(0);
    this.orderedList = this.orderBy.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });

    this.order = () => {
      for (let i = 0; i < this.orderedList.length; i += 1) {
        this.orderedList[i].order = i;
      }

      this.order(); // Add key id/order to newly ordered lists
    };
  }

  orderByGdp = () => {
    this.orderedList.sort((a, b) => b.gdp - a.gdp);
    this.order();
    this.setState(() => ({
      orderBy: 'gdp'
    }));
  };

  orderByGrowth = () => {
    this.orderedList.sort((a, b) => b.gdpgrowth - a.gdpgrowth);
    this.order();
    this.setState(() => ({
      orderBy: 'growth'
    }));
  };

  orderByName = () => {
    this.orderedList.sort((a, b) => {
      const x = a.search.toLowerCase();
      const y = b.search.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    this.order();
    this.setState(() => ({
      orderBy: 'name'
    }));
  };

  orderByCountry = () => {
    this.orderedList.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    this.order();
    this.setState(() => ({
      orderBy: 'country'
    }));
  };

  render() {
    return (
      <div className="menu">
        <div className="menu__grid-sort">
          <ul>
            <li>
              <NavLink to="/list" onClick={this.orderByCountry}>
                <img className="img-size" src={list} alt="" />
                Country
              </NavLink>
            </li>
            <li>
              <NavLink to="/list" onClick={this.orderByGdp}>
                <img className="img-size" src={barIcon} alt="" />
                GDP
              </NavLink>
            </li>
            <li>
              <NavLink to="/list" onClick={this.orderByGrowth}>
                <img className="img-size" src={trendIcon} alt="" />
                GDP Growth
              </NavLink>
            </li>
            <li>
              <button onClick={this.orderByName}>
                <img className="img-size" src={typeIcon} alt="" />
                A-Z List
              </button>
            </li>
          </ul>
        </div>
        <GridList data={this.orderedList} />
      </div>
    );
  }
}

export default List;
