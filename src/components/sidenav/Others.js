import React, {Component} from 'react';
import forwardIcon from '../../icons/arrow-right.svg';
import backIcon from '../../icons/arrow-left.svg';
import NavLink from '../NavLink';
import data from '../.././data/data';

class Others extends Component {

    ComponentDidMount() {

    }

    render() {
        let id = this.props.selected;
        let previous = data.data[id-1] || data.data[data.data.length-1]; // Accounting for USA being id 0.
        let nextId = (id+1 > data.data.length-1) ? id = 0 : id+1;
        let next = data.data[nextId];
        return (
            <div className="others">
                <div>
                    <NavLink className="others-back" to={"/" + previous.country}>
                        <img className="othersArrow" src={backIcon} alt="back" />
                        <img src={previous.flag} alt={previous.name} />
                    </NavLink>
                </div>
                <h4>
                    Discover more leaders.
                </h4>
                <div>
                    <NavLink className="others-forward" to={"/" + next.country}>
                        <img src={next.flag} alt={next.name} />
                        <img className="othersArrow" src={forwardIcon} alt="forward" />
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Others