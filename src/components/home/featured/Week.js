import React, { Component } from 'react';
import Weekday from './Weekday';
import schedule from './../../../data/schedule';

class Week extends Component {
    render() {
        return(
            <div className="week">
                <Weekday day={schedule.schedule[0]} />
                <Weekday day={schedule.schedule[1]} />
                <Weekday day={schedule.schedule[2]} />
                <Weekday day={schedule.schedule[3]} />
                <Weekday day={schedule.schedule[4]} />
                <Weekday day={schedule.schedule[5]} />
                <Weekday day={schedule.schedule[6]} />
                <Weekday day={schedule.schedule[6]} />
            </div>
        )
    }
}

export default Week;