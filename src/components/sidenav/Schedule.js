import React, {Component} from 'react/react.js';
import LeaderMap from './../Map/LeaderMap';
import ScheduleItems from './ScheduleItems';

class Schedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      map: this.props.nation.country
    }
  }

  render() {
    return (
        <div className="schedule-div">
          <h4>Travel</h4>
          <div className="mapsBox">
            <div className="inner-schedule">
                <div className="scheduleBox">
                    <ScheduleItems nation={this.props.nation} setMap={this.props.setMap} map={this.props.map} />
                </div>
            </div>
            <LeaderMap props={this.props.params} map={this.state.map} nation={this.props.nation} />
          </div>
        </div>
    )
  }
}

export default Schedule;
