import React, {Component} from 'react';

class Schedule extends Component {
  render() {
    return (
        <div className="inner-schedule">
          <div className="scheduleHeader">
            <div className="prevMonth">
              &#8592; July
            </div>
            <div className="monthBox">
              August
            </div>
            <div className="nextMonth">
              September &#8594;
            </div>
          </div>
          <div className="scheduleBox">

            <div className="dayBox">
              <div className="dateBox">
                1
              </div>
              <div className="eventBox">
              </div>
            </div>

            <div className="dayBox">
              <div className="dateBox">
                2
              </div>
              <div className="eventBox">
              </div>
            </div>
            <div className="dayBox">
              <div className="dateBox">
                3
              </div>
              <div className="eventBox">
              </div>
            </div>
            <div className="dayBox">
              <div className="dateBox">
                4
              </div>
              <div className="eventBox">
              </div>
            </div>
            <div className="dayBox">
              <div className="dateBox">
                5
              </div>
              <div className="eventBox">
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default Schedule;
