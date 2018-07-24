import React from 'react';
import ElectionCal from './ElectionCal';
import data from '../../data/electiondates';

class ElectionCalWrap extends React.Component {

  getDates = () => {
    console.log('a');
  }

  render() {
    return (
      <ElectionCal dates={data.electiondates}/>
    )
  }
}

export default ElectionCalWrap;
