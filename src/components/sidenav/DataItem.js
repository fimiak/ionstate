import React from 'react';

function DataItem() {
  return (
    <div className="data-point">
      <span>{this.props.item}</span>
      <span>{this.props.value}</span>
    </div>
  );
}

export default DataItem;
