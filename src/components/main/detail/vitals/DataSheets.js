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
        <li className="detail__table-title">{`${props.nation['leader-title']} of ${props.nation.name}`}</li>
        <DataItem item="Office" value={props.nation['leader-title']} />
        <DataItem item="Governing" value={props.nation.name} />
        <DataItem item="Party" value={props.nation.party} />
        <DataItem item="Deputy Office" value={props.nation['deputy-title']} />
        <DataItem item="Deputy" value={props.nation['deputy-leader']} />
        <DataItem item="Term Start" value={props.nation['term-start']} />
        <DataItem item="Term End" value={props.nation['term-end']} />
        <DataItem item="Birthdate" value={props.nation['birth-date']} />
        <DataItem item="Age" value={props.nation.age} />
        <DataItem value={<a href={props.nation.webpage}>Homepage</a>} item="Homepage" />
        <DataItem value={<a href={props.nation.wikipedia}>Wikipedia</a>} item="Wikipedia" />
      </ul>
    </div>
  );
}

export default DataSheets;
