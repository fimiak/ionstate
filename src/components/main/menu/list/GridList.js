import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class GridList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.listItems();
  }

  componentWillReceiveProps() {
    this.listItems();
  }

  listItems = () => {
    const listItems = this.props.data.map(data => (
      <li key={data.order} className="menu__grid-item">
        <NavLink to={data.country} onClick={() => this.props.setNation(data.country)}>
          <img className="menu__grid-image" src={require(`../../../../images/thumbs/${data.thumb}`)} alt="" />
          <div className="menu__grid-overlay" />
          <div className="menu__grid-text">
            <span>
              {data.leader} <br /> {data.name}
            </span>
          </div>
        </NavLink>
      </li>
    ));

    this.setState({
      list: listItems.slice(0, 15)
    });
  };

  render() {
    return (
      <div className="menu__grid-list">
        <ul className="menu__grid-list-ul">{this.state.list}</ul>
      </div>
    );
  }
}

export default GridList;
