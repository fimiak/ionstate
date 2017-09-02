import React, { Component } from 'react';
import NavLink from '../.././NavLink'
import axios from 'axios';
import testdata from '../../../data/testdata';

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: true,
            search: this.props.selected.search,            
            'article-0': testdata.response.docs[0],
            'article-1': testdata.response.docs[1],
            'article-2': testdata.response.docs[2],
            'article-3': testdata.response.docs[3],
            'article-4': testdata.response.docs[4],
            'article-5': testdata.response.docs[5],
        }
    }

    performSearch = () => {
        let nytimes = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + this.state.search + '&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        axios.get(nytimes)
            .then(response => {
                this.setState({
                    news: response.data.response,
                    'article-0': response.data.response.docs[0],
                    'article-1': response.data.response.docs[1],
                    'article-2': response.data.response.docs[2],
                    'article-3': response.data.response.docs[3],
                    'article-4': response.data.response.docs[4],
                    'article-5': response.data.response.docs[5],
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    componentWillMount() {
        this.performSearch();
    }


    scrollTop() {
        document.getElementsByClassName('App-intro')[0].scrollTop = 0;
    }

    render() {
        return (
            <div className="featuredBox">
                <div className="featured-nation">
                    <h3>Featured Nation</h3>
                </div>
                <div className="featuredEvents">
                    <div className="featuredDetails">
                        <div className="featuredTitle">
                            <img src={require('../../.././images/bio/' + this.props.selected['image'])} alt={this.props.selected['leader']} />
                            <h3>{this.props.selected['leader-title']}</h3>
                            <h3>{this.props.selected['leader']}</h3>
                            <h3>{this.props.selected.name}</h3>
                        </div>
                        <div className="featuredStats">
                            <img className="featured-flag" src={require('../../.././images/flags/' + this.props.selected.flag)} alt="" />
                            <ul>
                                <li>Party</li>
                                <li>{this.props.selected['party']}</li>
                                <li>Age</li>
                                <li>{this.props.selected['age']}</li>
                                <li>Entered Office</li>
                                <li>{this.props.selected['term-start']}</li>
                                <li>End of Term</li>
                                <li>{this.props.selected['term-end']}</li>
                            </ul>
                            <NavLink to={this.props.selected.country} onClick={this.scrollTop}><button>View more of {this.props.selected.leader}</button></NavLink>
                        </div>
                        <ul>
                            <h4>News by NYTimes</h4>
                            <li><a href={this.state['article-0'].web_url}>{this.state['article-0'].headline.main}</a></li>
                            <li><a href={this.state['article-1'].web_url}>{this.state['article-1'].headline.main}</a></li>
                            <li><a href={this.state['article-2'].web_url}>{this.state['article-2'].headline.main}</a></li>
                            <li><a href={this.state['article-3'].web_url}>{this.state['article-3'].headline.main}</a></li>
                            <li><a href={this.state['article-4'].web_url}>{this.state['article-4'].headline.main}</a></li>
                            <li><a href={this.state['article-5'].web_url}>{this.state['article-5'].headline.main}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Featured;