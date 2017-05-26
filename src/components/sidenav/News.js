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
            'article-4': ''
        };
    }

    componentWillMount() {
      this.performSearch();
    }

    performSearch = () => {
        axios.get('https://newsapi.org/v1/articles?source=bloomberg&apiKey=3990f9aab5b046b5aeb3e089ca3e37dc')
            .then(response => {
                this.setState({
                    news: response.data,
                    'article-0': response.data.articles[0],
                    'article-1': response.data.articles[1],
                    'article-2': response.data.articles[2],
                    'article-3': response.data.articles[3],
                    'article-4': response.data.articles[4],

                    loading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

  render() {
    return (
      <div className="inner-news">
        <NewsStory news={this.state['article-0']} />
        <NewsStory news={this.state['article-1']} />
        <NewsStory news={this.state['article-2']} />
        <NewsStory news={this.state['article-3']} />
        <NewsStory news={this.state['article-4']} />
      </div>
    )
  }
}

export default News;
