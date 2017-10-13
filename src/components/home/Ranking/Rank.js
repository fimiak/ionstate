import React, { Component } from 'react/react.js';
import RankItem from './RankItem';
import testdata from '../../../data/testdata';


class Rank extends Component {
    render() {
        return(
            <div className="rank">
                <RankItem data={this.props.data[0]} docs={testdata.response.docs[0]} />
                <RankItem data={this.props.data[1]} docs={testdata.response.docs[1]} />
                <RankItem data={this.props.data[4]} docs={testdata.response.docs[2]} />
                <RankItem data={this.props.data[6]} docs={testdata.response.docs[4]} />
            </div>
        )
    }
}

export default Rank;