import React from 'react';
import ElectionCal from './ElectionCal';

class ElectionCalWrap extends React.Component {

  render() {
    return (
      <ElectionCal {...this.props} />
    )
  }
}

export default ElectionCalWrap;
