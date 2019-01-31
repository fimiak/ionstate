import React, { Component } from 'react';
import GridList from './GridList';
import Title from '../.././home/title/Title';
import barIcon from '../../../../icons/bar-chart.svg';
import listIcon from '../../../../icons/list.svg';
import trendIcon from '../../../../icons/trending-up.svg';

class List extends Component {
  constructor(props) {
    super(props);

    this.orderBy = this.props.data.data.slice(0);
    this.orderedList = this.orderBy.sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });

    this.state = {
      orderBy: 'country'
    };
  }

  orderByGdp = () => {
    this.orderedList.sort((a, b) => b.gdp - a.gdp);
    this.setState(() => ({
      orderBy: 'gdp'
    }));
  };

  orderByName = () => {
    this.orderedList.sort((a, b) => {
      const x = a.search.toLowerCase();
      const y = b.search.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
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

    this.setState(() => ({
      orderBy: 'country'
    }));
  };

  render() {
    return (
      <div className="menu">
        <Title title="World Leader Detail List" />
        <div className="menu__grid-sort">
          <ul>
            <li className={this.state.orderBy === 'country' ? 'active' : ''} onClick={this.orderByCountry}>
              <img src={listIcon} alt="" />
              Country [A-Z]
            </li>
            <li className={this.state.orderBy === 'gdp' ? 'active' : ''} onClick={this.orderByGdp}>
              <img src={trendIcon} alt="" />
              GDP Rank
            </li>
            <li className={this.state.orderBy === 'name' ? 'active' : ''} onClick={this.orderByName}>
              <img src={barIcon} alt="" />
              Leader [A-Z]
            </li>
          </ul>
        </div>
        <GridList data={this.orderedList} />
      </div>
    );
  }
}

export default List;
