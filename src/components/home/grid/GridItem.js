import * as React from 'react';

function GridItem() {
  return (
    <div className="grid-item">
      <img src="" alt="" />
      <div>
        <p>{this.props.who || 'There'}</p>
      </div>
    </div>
  );
}

export default GridItem;
