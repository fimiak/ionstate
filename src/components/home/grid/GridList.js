import React, { Component } from 'react';
import NavLink from '../../NavLink';

class GridList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
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
      <li key={data.order} className="grid-item">
        <NavLink to={data.country} onClick={() => this.props.setNation(data.country)}>
          <img className="grid-image" src={require(`../../.././images/thumbs/${data.thumb}`)} alt="" />
          <div className="copy grid-copy">
            <span> {data.leader} <br /> {data.name}</span>
          </div>
        </NavLink>
      </li>
    ));

    this.setState({
      list: listItems.slice(0),
    });
  }

  render() {
    return (
      <div >
        <div className="grid-list">
          <ul className="grid-list-ul">
            {this.state.list}
          </ul>
        </div>
      </div>
    );
  }
}

export default GridList;
