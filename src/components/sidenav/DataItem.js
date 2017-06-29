import React, { Component } from 'react';

class DataItem extends Component {
    render() {
        return (
            <div className="data-point">
                <span>{this.props.item}</span>
                <span>{this.props.value}</span>
            </div>
        )
    }
}


export default DataItem;