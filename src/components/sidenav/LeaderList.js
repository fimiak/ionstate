import React, { Component } from 'react';
import NavLink from '../NavLink';

class LeaderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page1: [],
    };
    this.listItems = this.listItems.bind(this);
  }

  componentWillMount() {
    this.listItems();
  }


  componentWillReceiveProps() {
    this.listItems();
  }

  listItems() {
    const listItems = this.props.country.map(country => (
      <li key={country.order}>
        <NavLink
          to={country.country}
          onClick={() => this.props.setNation(country.country)}
        >
          <img src={require(`../.././images/thumbs/${country.thumb}`)} alt="" />
          <div className="copy" onClick={this.props.scrollTop}>
            {country.leader}
            <span>{country.name}</span>
          </div>
        </NavLink>
      </li>
    ));

    this.setState({
      page1: listItems.slice(0, 6),
    });
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={`leader-list ${(this.props.class || '')}`}
      >
        { this.props.page === 1 && <ul>{this.state.page1}</ul> }
      </div>
    );
  }
}

export default LeaderList;
