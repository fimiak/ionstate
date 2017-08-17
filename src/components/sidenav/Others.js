import React, {Component} from 'react';
import forwardIcon from '../../icons/arrow-right.svg';
import backIcon from '../../icons/arrow-left.svg';
import NavLink from '../NavLink';
import data from '../.././data/data';

class Others extends Component {
    constructor(props) {
        super(props);
        this.scrollTop = this.scrollTop.bind(this);
    }

    scrollTop() {
        document.getElementsByClassName('App-intro')[0].scrollTop = 0;
    }

    render() {
        let id = this.props.selected;
        let previous = data.data[id-1] || data.data[data.data.length-1]; // Accounting for USA being id 0.
        let nextId = (id+1 > data.data.length-1) ? id = 0 : id+1;
        let next = data.data[nextId];
        return (
            <div className="others">
                <div>
                    <NavLink className="others-back" to={"/" + previous.country} onClick={ this.scrollTop} >
                        <img className="othersArrow" src={backIcon} alt="back" />
                        <img src={require('../.././images/flags/' + previous.flag)} alt={previous.name} />
                    </NavLink>
                    <span>{previous.name}</span>

                </div>
                <h2>
                    DISCOVER MORE
                </h2>
                <div>
                    <NavLink className="others-forward" to={"/" + next.country} onClick={ this.scrollTop }>
                        <img src={require('../.././images/flags/' + next.flag)} alt={next.name} />
                        <img className="othersArrow" src={forwardIcon} alt="forward" />
                    </NavLink>
                    <span>{next.name}</span>
                </div>
            </div>
        )
    }
}

export default Others