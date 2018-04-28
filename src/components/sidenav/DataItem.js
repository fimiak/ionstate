import React from 'react';

function DataItem(props) {
  return (
    <div className="data-point">
      <span>{props.item}</span>
      <span>{props.value}</span>
    </div>
  );
}

export default DataItem;
