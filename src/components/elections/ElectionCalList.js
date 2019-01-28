import React from 'react';
import moment from 'moment';

class ElectionCalList extends React.Component {
  constructor(props) {
    super(props);

    this.listItems = this.listItems.bind(this);
  }

  componentDidMount() {
    this.listItems();
  }

  componentWillReceiveProps() {
    this.listItems();
  }

  listItems(bool) {
    const list = this.props.nations.map((nation, index) => {
      let time = moment(nation.elections);
      return time < Date.now() ? (
        <li key={index}>
          {nation.name}
          <span>{time ? time.format('MMM DD, YYYY') : null}</span>
        </li>
      ) : null;
    });

    const future = this.props.nations.map((nation, index) => {
      let time = moment(nation.elections);
      return time > Date.now() ? (
        <li key={index}>
          {nation.name}
          <span>{time ? time.format('MM/DD/YY') : null}</span>
        </li>
      ) : null;
    });
    return bool ? list : future;
  }

  render() {
    return (
      <div className="election-cal-container">
        <ul className="election-cal-list">
          <p className="item-header election-item">Recent</p>
          {this.listItems(true)}
          <p className="item-header election-item">Upcoming</p>
          {this.listItems(false)}
        </ul>
      </div>
    );
  }
}

export default ElectionCalList;
