import React from 'react';
import DataBox from './DataBox';
import DataItem from './DataItem';

function DataSheets(props) {
  return (
    <div className="datasheetsInner">
      <div className="data-image">
        <DataBox props={props.nation} />
      </div>
      <div className="data-container">
        <h3>Biography</h3>
        <DataItem item={props.nation['leader-title']} value={props.nation.leader} />
        <DataItem item="Governing" value={props.nation.name} />
        <DataItem item="Party" value={props.nation.party} />
        <DataItem item={props.nation['deputy-title']} value={props.nation['deputy-leader']} />
        <DataItem item="Term Start" value={props.nation['term-start']} />
        <DataItem item="Term End" value={props.nation['term-end']} />
        <DataItem item="Birthdate" value={props.nation['birth-date']} />
        <DataItem item="Previous Leader" value={props.nation['previous-leader']} />
        <DataItem item="Age" value={props.nation.age} />
        <DataItem item="Previous Party" value={props.nation['previous-leader-party']} />
        <DataItem
          item="Official Webpage"
          value={<a href={props.nation.webpage}>{props.nation.leader}</a>}
        />
        <DataItem item="Wikipedia" value={<a href={props.nation.wikipedia}>Wikipedia</a>} />
      </div>
    </div>
  );
}

export default DataSheets;
