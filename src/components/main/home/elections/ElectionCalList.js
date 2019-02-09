import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

class ElectionCalList extends React.Component {
  constructor(props) {
    super(props);
    this.listItems = this.listItems.bind(this);
  }

  componentDidMount() {
    this.listItems();
  }

  listItems = size => {
    let list = this.props.data.data.map((data, index) => {
      let election = data.elections.map((election, i) => {
        let time = moment(new Date(election * 1000).toISOString());
        return (
          <li className="election__list-item" key={Math.floor(Math.random() * 10000)}>
            <NavLink to={data.country} alt="">
              <img className="election__list-flag" src={require(`../../../.././images/flags/${data.flag}`)} alt="" />
              <span>{time.format('MMM Do, YYYY')}</span>
            </NavLink>
          </li>
        );
      });
      return election[0]; // One election per country
    });
    return list.slice(0, 10);
  };

  render() {
    return (
      <div className="election__container">
        <h1 className="item-header">Upcoming Elections</h1>
        <ul className="election__list">{this.listItems()}</ul>
      </div>
    );
  }
}

export default ElectionCalList;
