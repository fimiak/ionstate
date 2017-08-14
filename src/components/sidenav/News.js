import React, {Component} from 'react';
import NewsStory from './NewsStory';
import axios from 'axios';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: true,
            selected: this.props.selected,
            search: this.props.selected.search,
            'article-0': '',
            'article-1': '',
            'article-2': '',
            'article-3': '',
            'article-4': '',
            'article-5': '',
            'article-6': '',
            'article-7': '',
            'article-8': '',
            'article-9': ''
        };
    }

    componentWillMount() {
      this.performSearch();
    }

    performSearch = () => {
        let nytimes = '-http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + this.state.search + '&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48';
        
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
                    'article-6': response.data.response.docs[6],
                    'article-7': response.data.response.docs[7],
                    'article-8': response.data.response.docs[8],
                    'article-9': response.data.response.docs[9],
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
                <NewsStory news={this.state['article-7']} />
                <NewsStory news={this.state['article-8']} />
                <NewsStory news={this.state['article-9']} />
            </div>
      </div>
    )
  }
}

export default News;
