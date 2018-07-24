import React, { Component } from 'react';
import forwardIcon from '../../icons/arrow-right.svg';
import backIcon from '../../icons/arrow-left.svg';
import NavLink from '../NavLink';
import data from '../.././data/data.json';

class Others extends Component {
  constructor(props) {
    super(props);
    this.scrollTop = this.scrollTop.bind(this);
  }

  scrollTop() {
    this.props.setNation(this.props.params.country);
  }

  render() {
    let id = Math.floor(data.data.length * Math.random());
    const previous = data.data[id];
    // Accounting for USA being id 0.
    const nextId = id + 1 > data.data.length - 1 ? (id = 0) : id + 1;
    const next = data.data[nextId];
    return (
      <div className="others">
        <div>
          <NavLink className="others-back" to={`/${previous.country}`} onClick={this.scrollTop}>
            <img className="othersArrow" src={backIcon} alt="back" />
            <span>{previous.name}</span>
            <img className="othersFlag" src={require(`../.././images/flags/${previous.flag}`)} alt={previous.name} />
          </NavLink>
        </div>

        <div>
          <NavLink className="others-forward" to={`/${next.country}`} onClick={this.scrollTop}>
            <img className="othersFlag" src={require(`../.././images/flags/${next.flag}`)} alt={next.name} />
            <span>{next.name}</span>
            <img className="othersArrow" src={forwardIcon} alt="forward" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Others;
