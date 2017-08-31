import React, { Component } from 'react';

class Weekday extends Component {
    render() {
        return(
            <div className="week-box">
                <div className="week-title">
                    <div className="week-day">
                        {this.props.day}
                    </div>
                    <div className="week-date">
                        <span>August</span>
                        1
                    </div>
                </div>
                <div className="week-details">
                    Details
                </div>
            </div>
        )
    }
}

export default Weekday;