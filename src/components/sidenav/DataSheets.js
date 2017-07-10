import React, {Component} from 'react';
import data from '../../data/data';
import DataBox from './DataBox';
import DataItem from './DataItem';

let selected = [];

class DataSheets extends Component {
  render() {
    let nationList = { 
          usa: data.data[0],
          uk: data.data[1],
          mexico: data.data[2],
          france: data.data[3],
          germany: data.data[4],
          canada: data.data[5],
          russia: data.data[6],
          china: data.data[7],
          japan: data.data[8],
          brazil: data.data[9],
          india: data.data[10]
          };
    let nation = this.props.props.country;
    selected = nationList[nation];
    return (
      <div className="data-sheets">
        <div className="data-image">
          <DataBox props={selected} />
        </div>
        <div className="data-container">
          <DataItem item={selected['leader-title']} value={selected.leader} />
          <DataItem item='Governing' value={selected.name} />
          <DataItem item='Party' value={selected['party']} />
          <DataItem item={selected['deputy-title']} value={selected['deputy-leader']} />
          <DataItem item='Term Start' value={selected['term-start']} />
          <DataItem item='Term End' value={selected['term-end']} />
          <DataItem item='Birthdate' value={selected['birth-date']} />
          <DataItem item='Previous Leader' value={selected['previous-leader']} />
          <DataItem item='Age' value={selected.age} />
          <DataItem item='Previous Party' value={selected['previous-leader-party']} />
          <DataItem item='Official Webpage' value={<a href={selected.webpage}>{selected.leader}</a>} />
          <DataItem item='Wikipedia' value={<a href={selected.wikipedia}>Go to Link</a>} />
        </div>
      </div>
    )
  }
}

export default DataSheets;