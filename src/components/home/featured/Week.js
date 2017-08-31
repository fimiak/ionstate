import React, { Component } from 'react';
import Weekday from './Weekday';

class Week extends Component {
    render() {
        return(
            <div className="week">
                <div className="week-box week-header">The Week Ahead</div>
                <Weekday day="Sunday" />
                <Weekday day="Monday" />
                <Weekday day="Tuesday" />
                <Weekday day="Wednesday" />
                <Weekday day="Thursday" />
                <Weekday day="Friday" />
                <Weekday day="Saturday" />
            </div>
        )
    }
}

export default Week;