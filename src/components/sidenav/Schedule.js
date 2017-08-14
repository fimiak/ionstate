import React, {Component} from 'react';
import ScheduleItems from './ScheduleItems';


class Schedule extends Component {

  render() {
    return (
        <div className="inner-schedule">
          <div className="scheduleHeader">
            <div className="monthBox">
              Schedule
            </div>
          </div>

          <div className="scheduleBox">
              <ScheduleItems selected={this.props.selected} setMap={this.props.setMap} map={this.props.map} />
          </div>
        </div>
    )
  }
}

export default Schedule;
