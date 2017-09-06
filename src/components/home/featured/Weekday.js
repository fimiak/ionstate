import React, { Component } from 'react';

class Weekday extends Component {
    render() {
        return(
            <div className="week-box">
                <div className="week-title">
                    <div className="week-day">
                        {this.props.day.day}
                    </div>
                    <div className="week-date">
                        <span>{this.props.day.date}</span>
                    </div>
                </div>
                <div className="week-details">
                    <a href="/" alt="">
                        <img src={this.props.day.image ||'http://img.9am.ro/images/cache/articles/9/4/4/294427/p_294427_160x102-00-85.jpg'} alt="" />
                        <span>{this.props.day.title}</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Weekday;