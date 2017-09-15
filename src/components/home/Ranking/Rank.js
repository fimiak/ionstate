import React, { Component } from 'react';
import RankItem from './RankItem';

class Rank extends Component {
    render() {
        return(
            <div className="rank">
                <RankItem data={this.props.data[0]} />
                <RankItem data={this.props.data[1]} />
                <RankItem data={this.props.data[4]} />
                <RankItem data={this.props.data[6]} />
                <RankItem data={this.props.data[7]} />
            </div>
        )
    }
}

export default Rank;