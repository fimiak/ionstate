import React, {Component} from 'react';
import NewsStory from './NewsStory';
import axios from 'axios';

class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: true,
            'article-0': '',
            'article-1': '',
            'article-2': '',
            'article-3': '',
            'article-4': '',
            'article-5': '',
            'article-6': ''
        };
    }

    componentWillMount() {
      this.performSearch();
    }

    performSearch = () => {
        let trump = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump, donald&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        let may = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=may, theresa&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        let macron = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=macron, emmanuel&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        let merkel = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=merkel, angela&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        let nieto = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=nieto, pena&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        let putin = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=putin, vladimir&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        let trudeau = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=trudeau, justin&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        let jinping = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=jinping, xi&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        let pick = '';
        switch (this.props.props.country) {
            case 'usa':
                pick = trump;
                break;
            case 'germany':
                pick = merkel;
                break;
            case 'uk':
                pick = may;
                break;
            case 'russia':
                pick = putin;
                break;
            case 'france':
                pick = macron;
                break;
            case 'canada':
                pick = trudeau;
                break;
            case 'mexico':
                pick = nieto;
                break;
            case 'china':
                pick = jinping;
                break;
            default:
                pick = trump;
                break;
        }
        axios.get(pick)
            .then(response => {
                this.setState({
                    news: response.data.response,
                    'article-0': response.data.response.docs[0],
                    'article-1': response.data.response.docs[1],
                    'article-2': response.data.response.docs[2],
                    'article-3': response.data.response.docs[3],
                    'article-4': response.data.response.docs[4],
                    'article-5': response.data.response.docs[5],
                    'article-6': response.data.response.docs[6],
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

  render() {
    return (
        <div>
            <div className="inner-news">
                <NewsStory news={this.state['article-0']} />
                <NewsStory news={this.state['article-1']} />
                <NewsStory news={this.state['article-2']} />
                <NewsStory news={this.state['article-3']} />
                <NewsStory news={this.state['article-4']} />
                <NewsStory news={this.state['article-5']} />
                <NewsStory news={this.state['article-6']} />
                <h4>News by <a href="https://www.nytimes.com/" alt="The New York Times">The New York Times API</a></h4>
            </div>
      </div>
    )
  }
}

/*
  render() {
    return (
        <div>
            <div className="inner-news">
                <NewsStory news={this.state['article-0']} />
                <NewsStory news={this.state['article-1']} />
                <NewsStory news={this.state['article-2']} />
                <NewsStory news={this.state['article-3']} />
                <NewsStory news={this.state['article-4']} />
                <NewsStory news={this.state['article-5']} />
                <NewsStory news={this.state['article-6']} />
                <h4>News by <a href="https://www.nytimes.com/" alt="The New York Times">The New York Times API</a></h4>
            </div>
      </div>
    )
  }
*/

export default News;
