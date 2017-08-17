import React, { Component } from 'react';
import schedule from '../../data/schedule';

class ScheduleItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="dayBox">
                <div className="dateBox">
                {info}
                </div>
                <div className="eventBox">
                {info}
                    <div className="placeBox">
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheduleItem;