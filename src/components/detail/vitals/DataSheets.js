import React from 'react';
import DataBox from './DataBox';
import DataItem from './DataItem';

function DataSheets(props) {
  return (
    <div className="datasheets-inner">
      <div className="data-image">
        <DataBox props={props.nation} />
      </div>
      <ul className="data-container">
        <DataItem item={props.nation['leader-title']} value={props.nation.leader} />
        <DataItem item="Governing" value={props.nation.name} />
        <DataItem item="Party" value={props.nation.party} />
        <DataItem item={props.nation['deputy-title'] || 'Deputy'} value={props.nation['deputy-leader']} />
        <DataItem item="Term Start" value={props.nation['term-start']} />
        <DataItem item="Term End" value={props.nation['term-end']} />
        <DataItem item="Birthdate" value={props.nation['birth-date']} />
        <DataItem item="Age" value={props.nation.age} />
        <DataItem value={<a href={props.nation.webpage}>{props.nation.leader}</a>} item="Homepage" />
        <DataItem value={<a href={props.nation.wikipedia}>Wikipedia</a>} item="Wikipedia" />
      </ul>
    </div>
  );
}

export default DataSheets;
