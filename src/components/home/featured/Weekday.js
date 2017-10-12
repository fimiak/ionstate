import React, { Component } from 'react/react.js';

class Weekday extends Component {
    render() {
        return(
            <div className="week-box">
                <div className="week-details">
                    <a alt="">
                        <img src={this.props.day.image ||'http://img.9am.ro/images/cache/articles/9/4/4/294427/p_294427_160x102-00-85.jpg'} alt="" />
                        <div className="week-title">
                            <div className="week-day">
                                {this.props.day.month}&nbsp;{this.props.day.date}
                            </div>
                            <div className="week-content">{this.props.day.title}</div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Weekday;