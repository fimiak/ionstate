import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.data,
      countryList: [],
      randCountry: 0
    };

    this.state.data.map(country => {
      return this.state.countryList.push(country.country);
    }); // Create list for random link assignment
  }

  render() {
    return (
      <div className="sidebar-inner">
        <ul className="sidebar-list">
          <li>
            <NavLink exact to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" activeclassname="active">
              Leader List
            </NavLink>
          </li>
          <li>
            <NavLink to="/usa" activeclassname="active">
              Details Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclassname="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
