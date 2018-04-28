import React, { Component } from 'react';
import data from '.././data/data.json';
import GridList from './home/grid/GridList';
import NavLink from './NavLink';
// SVGs
import barIcon from '../icons/bar-chart.svg';
import list from '../icons/list.svg';
import trendIcon from '../icons/trending-up.svg';
import typeIcon from '../icons/type.svg';


const orderBy = data.data.slice(0);
const orderedList = orderBy.sort((a, b) => {
  const x = a.name.toLowerCase();
  const y = b.name.toLowerCase();
  return x < y ? -1 : x > y ? 1 : 0;
});

function order() {
  for (let i = 0; i < orderedList.length; i += 1) {
    orderedList[i].order = i;
  }
}

class List extends Component {
  constructor(props) {
    super(props);

    order(); // Add key id/order to newly ordered lists

    this.orderByName = this.orderByName.bind(this);
    this.orderByGrowth = this.orderByGrowth.bind(this);
    this.orderByCountry = this.orderByCountry.bind(this);
  }

  orderByGdp = () => {
    orderedList.sort((a, b) => b.gdp - a.gdp);
    order();
    this.setState(() => ({
      orderBy: 'gdp',
    }));
  }

  orderByGrowth() {
    orderedList.sort((a, b) => b.gdpgrowth - a.gdpgrowth);
    order();
    this.setState(() => ({
      orderBy: 'growth',
    }));
  }

  orderByName() {
    orderedList.sort((a, b) => {
      const x = a.search.toLowerCase();
      const y = b.search.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    order();
    this.setState(() => ({
      orderBy: 'name',
    }));
  }

  orderByCountry() {
    orderedList.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    order();
    this.setState(() => ({
      orderBy: 'country',
    }));
  }

  render() {
    return (
      <div>
        <div className="grid-sort">
          <span>Sort List</span>
          <ul>
            <li>
              <NavLink to="/list" onClick={this.orderByCountry}>
                <img className="img-size" src={list} alt="" />Country Name
              </NavLink>
            </li>
            <li>
              <NavLink to="/list" onClick={this.orderByGdp}>
                <img className="img-size" src={barIcon} alt="" />GDP
              </NavLink>
            </li>
            <li>
              <NavLink to="/list" onClick={this.orderByGrowth}>
                <img className="img-size" src={trendIcon} alt="" />GDP Growth
              </NavLink>
            </li>
            <li>
              <NavLink to="/list" onClick={this.orderByName}>
                <img className="img-size" src={typeIcon} alt="" />Leader Name
              </NavLink>
            </li>
          </ul>
        </div>
        <GridList data={orderedList} />
      </div>
    );
  }
}

export default List;
