import React from 'react';
import ElectionCalList from './ElectionCalList';

class ElectionCal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      year: 2018
    };
  }

  loadList = () => {
    this.state.loaded
      ? this.setState({
          loaded: false
        })
      : this.setState({
          loaded: true
        });
  };

  changeYear = year => {
    this.setState({
      year: year,
      loaded: false
    });
  };

  render() {
    return (
      <div className="election-cal">
        <ElectionCalList dates={this.props} loaded={this.state.loaded} year={this.state.year} />
      </div>
    );
  }
}

export default ElectionCal;
