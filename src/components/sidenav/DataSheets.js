import React, {Component} from 'react';
import data from '../../data/data';
import DataBox from './DataBox';
import DataItem from './DataItem';

let sel = [];

class DataSheets extends Component {
  render() {
    switch (this.props.props.country) {
      case 'usa':
        sel = data.data[0];
        break;
      case 'uk':
        sel = data.data[1];
        break;
      case 'mexico':
        sel = data.data[2];
        break;
      case 'france':
        sel = data.data[3];
        break;
      case 'germany':
        sel = data.data[4];
        break;
      case 'canada':
        sel = data.data[5];
        break;
      case 'russia':
        sel = data.data[6];
        break;
      case 'china':
        sel= data.data[7];
        break;
      case 'japan':
        sel= data.data[8];
        break;
      default:
        sel = data.data[0];
        break;
    }
    return (
      <div className="data-sheets">
        <div className="data-image">
          <DataBox props={sel} />
        </div>
        <div className="data-container">
          <DataItem item={sel['leader-title']} value={sel.leader} />
          <DataItem item='Governing' value={sel.name} />
          <DataItem item='Party' value={sel['party']} />
          <DataItem item={sel['deputy-title']} value={sel['deputy-leader']} />
          <DataItem item='Term Start' value={sel['term-start']} />
          <DataItem item='Term End' value={sel['term-end']} />
          <DataItem item="Birthdate" value={sel['birth-date']} />
          <DataItem item='Previous Leader' value={sel['previous-leader']} />
          <DataItem item="Age" value={sel.age} />
          <DataItem item='Previous Party' value={sel['previous-leader-party']} />
          <DataItem item="Official Webpage" value={sel.webpage} />
          <DataItem item="Wikipedia" value={sel.wikipedia} />
        </div>
      </div>
    )
  }
}

export default DataSheets;