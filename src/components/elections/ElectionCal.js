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
    (this.state.loaded) ? 
    this.setState({
      loaded: false
    })
    :
    this.setState({
      loaded: true
    })
  }

  changeYear = (year) => {
    this.setState({
      year: year,
      loaded: false
    })
  }

  render() {
    return (
      <div className="election-cal">
        <div className="election-cal-years">
          <a onClick={() => this.changeYear(2018)}>2018</a>
          <a onClick={() => this.changeYear(2019)}>2019</a>
          <a onClick={() => this.changeYear(2020)}>2020</a>
          <a onClick={() => this.changeYear(2021)}>2021</a>
        </div>
        <ElectionCalList dates={this.props} loaded={this.state.loaded} year={this.state.year} />
      </div>
    );
  }
}

export default ElectionCal;
