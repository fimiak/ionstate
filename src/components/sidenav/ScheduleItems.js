import React, { Component } from 'react';
import schedule from '../../data/schedule';

const schedList = schedule.schedule;

class ScheduleItems extends Component {
    constructor(props) {
        super(props);
        this.onSetMap = this.onSetMap.bind(this);
    }

    onSetMap(place) {
        this.props.setMap(place);
        document.getElementById("overlay").setAttribute('style', 'opacity: 0;');
      }

    render() {
        const listItems = schedList.map((data) =>
            <li key={data.id.toString()}>
                <div className="dayBox">
                    <div className="dateBox">
                        <span className="monthBox">{data.month}</span>
                        <span>{data.day}</span>
                    </div>
                    <div className="eventBox" onClick={() => this.onSetMap(data.place)}>
                        <p>{data.title}</p>
                        <span>{data.place}</span>
                    </div>
                </div>
            </li>
        );

        return (
            <ul className="listItems">
                {listItems}
            </ul>
        )
    }
}

export default ScheduleItems;