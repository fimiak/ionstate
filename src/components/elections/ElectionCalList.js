import React from 'react';
import ElectionCalListItems from './ElectionCalListItems';

class ElectionCalList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "dates": this.props.dates,
      "list": undefined,
      "quick": undefined
    }
  }

  listItems = () => {
    const listItems = this.props.dates.dates[0][this.props.year].map(date => (
      <li>
        {date.election}
        <span className="election-cal-date">{date.date}</span>
      </li>
    ));

    const quickListItems = listItems.slice(0, 4);

    this.setState(
      { 
        list: listItems,
        quick: quickListItems
      }
    )
  }

  componentWillMount() {
    this.listItems();
  }

  componentWillReceiveProps() {
    this.listItems();
  }


  render() {
    return (
      <ElectionCalListItems loaded={this.props.loaded} list={this.state.list} quick={this.state.quick} />
    );
  }
}

export default ElectionCalList;
