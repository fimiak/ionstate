/* @flow */

import * as React from 'react';
import axios from 'axios';
import RankItem from './RankItem';

type Props = {
    data: Object,
    news: {
        response: {
            data: any;
        }
    },
    testdata: {
        response: {
            data: any,
            docs: any
        }
    }
};

type State = {
    loading: boolean,
    news: {
        response: {
            data: any,
            docs: any
        }
    }
};

class Rank extends React.Component<Props, State> {

    state = {
        loading: true,            
        news: this.props.testdata
    };

    performSearch = () => {
        let nytimes = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=may, theresa&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        axios.get(nytimes)
            .then(response => {
                this.setState({
                    loading: false,
                    news: response.data
                });
            })
            .catch(error => {
                console.log('Error fetching data', error);
            });
        }

    componentWillMount() {
        //this.performSearch();
    }

    render() {
        return(
            <div className="rank">
                <RankItem data={this.props.data[0]} docs={this.props.testdata.response.docs} />
                <RankItem data={this.props.data[1]} docs={this.state.news.response.docs} />
                <RankItem data={this.props.data[4]} docs={this.state.news.response.docs} />
                <RankItem data={this.props.data[6]} docs={this.state.news.response.docs} />
            </div>
        )
    }
}

export default Rank;