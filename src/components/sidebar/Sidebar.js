import React, { Component } from 'react';
import PropTypes from 'prop-types';
import data from '../.././data/data.json';
import LeaderList from '../.././components/sidenav/LeaderList';

const list = [];
for (let i = 0; i < data.data.length; i += 1) { // Assign data.data[i] to 'country' key.
  list[data.data[i].country] = data.data[i];
}

const orderBy = data.data.slice(0);
const orderedList = orderBy.sort((a, b) => b.gdp - a.gdp);
class Sidebar extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="sidebar-inner">
        <a className="sidebar-header" href="/">Ionstate</a>
        <p>Latest Activity <a className="sidebar-full" href="/list" alt="Full List">View full list</a></p>
        <LeaderList
          id="page1"
          country={orderedList}
          page={1}
          setNation={this.props.setNation}
          class="page-show"
        />
        <div className="sidebar-topics">
          <p>Follow Topic <br/> (Coming Soon)</p>
          <ul className="sidebar-body">
            <li><a href="/">Defense</a></li>
            <li><a href="/">Domestic</a></li>
            <li><a href="/">Elections</a></li>
            <li><a href="/">Headlines</a></li>
            <li><a href="/">International</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  setNation: '',
};

Sidebar.propTypes = {
  setNation: PropTypes.func,
};

export default Sidebar;
