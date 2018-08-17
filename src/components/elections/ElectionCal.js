import React from 'react';
import ElectionCalList from './ElectionCalList';

class ElectionCal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
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

  render() {
    return (
      <div className="election-cal">
        <ElectionCalList loaded={this.state.loaded} {...this.props} />
      </div>
    );
  }
}

export default ElectionCal;
