import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class GridList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 15,
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
      <li key={data.id} className="menu__grid-item">
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
      list: listItems
    });
  };

  loadMore = () => {
    document.getElementsByClassName('menu__grid-list-button')[0].style = 'display: none;';
    this.setState({
      display: this.state.list.length - 1
    });
  };

  render() {
    return (
      <div className="menu__grid-list">
        <ul className="menu__grid-list-ul">{this.state.list.slice(0, this.state.display)}</ul>
        <button className="menu__grid-list-button" onClick={this.loadMore}>
          Load All
        </button>
      </div>
    );
  }
}

export default GridList;
