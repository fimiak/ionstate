import React, { Component } from 'react';
import schedule from '../../data/schedule.json';

const schedList = schedule.schedule;

class ScheduleItems extends Component {
  /*onSetMap = (place) => {
    this.props.setMap(place);
    document.getElementById('overlay').setAttribute('style', 'opacity: 0;');
  }*/

  render() {
    const listItems = schedList.map(data => (
      <li key={data.id.toString()}>
        <div className="dayBox">
          <div className="dateBox">
            <span className="monthBox">{data.month}</span>
            <span>{data.date}</span>
          </div>
          <div
            className="eventBox"
            onClick={() => {}}
            /*onKeyPress={'a'/*this.onSetMap(data.place)}*/
            role="button"
            tabIndex="0">
            <p>{data.title}</p>
            <span>{data.place}</span>
          </div>
        </div>
      </li>
    ));

    return <ul className="listItems">{listItems}</ul>;
  }
}

export default ScheduleItems;
