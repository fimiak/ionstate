import React from 'react';

function DataItem(props) {
  return (
    <li className="data-point">
      <span>{props.item}</span>
      <span>{props.value || 'N/A'}</span>
    </li>
  );
}

export default DataItem;
