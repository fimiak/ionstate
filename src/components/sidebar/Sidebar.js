import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeaderList from './LeaderList';

class Sidebar extends Component {
  componentDidMount() {}

  render() {
    const list = [];
    for (let i = 0; i < this.props.data.data.length; i += 1) {
      // Assign data.data[i] to 'country' key.
      list[this.props.data.data[i].country] = this.props.data.data[i];
    }
    /**
    list.map((data.data) => {

    })
    */
    const orderBy = this.props.data.data.slice(0);
    const orderedList = orderBy.sort((a, b) => b.gdp - a.gdp);

    return (
      <div className="sidebar-inner">
        <a className="sidebar-header" href="/">
          Ionstate
        </a>
        <div className="sidebar-content">
          <p>
            Latest Activity{' '}
            <a className="sidebar-full" href="/list" alt="Full List">
              View full list
            </a>
          </p>
          <LeaderList id="page1" country={orderedList} page={1} setNation={this.props.setNation} class="page-show" />
        </div>
      </div>
    );
  }
}

/*
Sidebar.defaultProps = {
  setNation: ''
};

Sidebar.propTypes = {
  setNation: PropTypes.func
};
*/
export default Sidebar;
