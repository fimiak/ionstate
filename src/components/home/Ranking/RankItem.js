import React, { Component } from 'react';

class RankItem extends Component {
    render() {
        return(
            <div className="rank-item">
                <div className="rank-item-image">
                    <a href={this.props.data.country} alt="" >
                        <img src={require('../../.././images/bio/' + this.props.data.thumb)} alt="" />
                    </a>
                </div>
                <div className="rank-item-data">
                    <div className="rank-item-head">
                        <div className="rank-head-name">
                            {this.props.data.leader}
                        </div>
                        <div className="rank-head-articles">
                            Articles: {this.props.data.age}
                        </div>
                    </div>
                    <div className="rank-item-articles">
                        {this.props.data.age}
                    </div>
                </div>
            </div>
        )
    }
}

export default RankItem;