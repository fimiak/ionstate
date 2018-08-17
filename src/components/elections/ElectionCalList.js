import React from 'react';

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

  listItems() {
    const list = this.props.dates.map((date, index) => {
      return (
        <li key={index}>
          {date.country}
          <span>{date.date_of_election.slice(0, 10)}</span>
        </li>
      );
    });
    return list;
  }

  render() {
    return <ul className="election-cal-list">{this.listItems()}</ul>;
  }
}

export default ElectionCalList;
