import React from 'react';
import ElectionCalList from './ElectionCalList';

class ElectionCal extends React.Component {
  render() {
    return (
      <div>
        <ElectionCalList {...this.props} />
      </div>
    );
  }
}

export default ElectionCal;
