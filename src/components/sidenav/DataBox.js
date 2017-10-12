import React, { Component } from 'react/react.js';

class DataBox extends Component {
    
    render() {
        return (
            <div className="img-highlight">
                <div className="img-highlight-leader">
                    <img className="img-highlight-image" src={require('../.././images/bio/' + this.props.props['image'])} alt={this.props.props.leader} />
                </div>
                <div className="img-highlight-text">
                    <p>{this.props.props.leader}</p>
                    <p>{this.props.props.name}</p>
                </div>
            </div>
        )
    }
}

export default DataBox;