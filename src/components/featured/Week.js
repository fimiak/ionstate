import React, { Component } from 'react';
import Weekday from './Weekday';

class Week extends Component {
    render() {
        return(
            <div className="week">
                <div className="week-box week-header">The Week Ahead</div>
                <Weekday />
                <Weekday />
                <Weekday />
                <Weekday />
                <Weekday />
                <Weekday />
                <Weekday />
            </div>
        )
    }
}

export default Week;