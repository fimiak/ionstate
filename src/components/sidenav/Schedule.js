import React, {Component} from 'react';

class Schedule extends Component {
  render() {
    return (
      <div>
        <div className="inner-schedule">
          <div className="scheduleHeader">
            <div className="prevMonth">
              &#9664; July
            </div>
            <div className="monthBox">
              August
            </div>
            <div className="nextMonth">
              September &#9654;
            </div>
          </div>
          <div className="scheduleBox">

            <div className="dayBox">
              <div className="dateBox">
                30
              </div>
              <div className="eventBox">
                <ul>
                  <li>
                    First event.
                  </li>
                </ul>
              </div>
            </div>

            <div className="dayBox">
              <div className="dateBox">
                31
              </div>
              <div className="eventBox">
                <ul>
                  <li>
                    Second event.
                  </li>
                </ul>
              </div>
            </div>

            <div className="dayBox">
              <div className="dateBox">
                31
              </div>
              <div className="eventBox">
                <ul>
                  <li>
                    Third event.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Schedule;
