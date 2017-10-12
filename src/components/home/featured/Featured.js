import React, { Component } from 'react/react.js';
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
                <div className="featuredEvents">
                    <div className="featuredDetails">
                        <div className="featuredDetailsBox">
                            <div className="featuredTitle">
                                <img src={require('../../.././images/bio/' + this.props.selected['image'])} alt={this.props.selected['leader']} />
                                <div>
                                    <h3>{this.props.selected['leader-title']} <br/> {this.props.selected['leader']}</h3>
                                </div>

                            </div>
                            <div className="featuredStats">
                                <img className="featured-flag" src={require('../../.././images/flags/' + this.props.selected.flag)} alt="" />
                                <h3>{this.props.selected.name}</h3>
                                <ul>
                                    <li>Party</li>
                                    <li>{this.props.selected['party']}</li>
                                    <li>Age</li>
                                    <li>{this.props.selected['age']}</li>
                                    <li>Entered Office</li>
                                    <li>{this.props.selected['term-start']}</li>
                                </ul>
                                <NavLink to={this.props.selected.country} onClick={() => this.props.setNation(this.props.selected['country'])}><button> Explore Profile</button></NavLink>
                            </div>
                        </div>
                        <div className="featuredNews">
                            <ul>
                                <h4>{this.props.selected.leader} in The New York Times</h4>
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
            </div>
        )
    }
}

export default Featured;