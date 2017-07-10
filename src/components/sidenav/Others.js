import React, {Component} from 'react';
import forwardIcon from '../../icons/arrow-right.svg';
import backIcon from '../../icons/arrow-left.svg';

class Others extends Component {

    ComponentDidMount() {

    }

    render() {
        return (
            <div className="others">
                <div>
                    <a className="others-back" href="/usa">
                        <img src={backIcon} alt="back" />
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1350px-Flag_of_India.svg.png" alt="back" />
                    </a>
                </div>
                <div>
                    <a className="others-forward" href="/uk">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1350px-Flag_of_India.svg.png" alt="forward" />
                        <img src={forwardIcon} alt="forward" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Others