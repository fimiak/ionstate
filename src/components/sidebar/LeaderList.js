import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LeaderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      page1: []
    };

    this.listItems = this.listItems.bind(this);
  }

  componentWillMount() {
    this.listItems();
  }

  componentWillReceiveProps() {
    this.listItems();
  }

  listItems(i = 10) {
    const listItems = this.props.country.map(country => (
      <li key={country.id}>
        <NavLink
          to={'/' + country.country}
          activeClassName="navlink-active"
          onClick={() => this.props.setNation(country.country)}>
          <img src={require(`../.././images/thumbs/${country.thumb}`)} alt="" />
          <div className="copy" onClick={this.props.scrollTop}>
            {country.leader}
            <span>{country.name}</span>
          </div>
        </NavLink>
      </li>
    ));

    this.setState({
      page1: listItems.slice(0, i)
    });
  }

  fullList() {
    this.setState({
      active: true
    });
    this.listItems(20);
  }

  render() {
    return (
      <ul id={this.props.id} className={`nav-sidenav leader-list ${this.props.class || ''}`}>
        {this.props.page === 1 && <div>{this.state.page1}</div>}
        <button
          className={this.state.active ? 'sidebar-button sidebar-open' : 'sidebar-button'}
          onClick={() => this.fullList()}>
          Expand list
        </button>
      </ul>
    );
  }
}

export default LeaderList;
