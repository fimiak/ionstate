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
            'article-5': ''
        };
    }

    componentWillMount() {
      this.performSearch();
    }

    performSearch = () => {
        let bloomberg = 'https://newsapi.org/v1/articles?source=bloomberg&apiKey=3990f9aab5b046b5aeb3e089ca3e37dc';
        let bbc = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=3990f9aab5b046b5aeb3e089ca3e37dc';
        let spiegel = 'https://newsapi.org/v1/articles?source=spiegel-online&apiKey=3990f9aab5b046b5aeb3e089ca3e37dc';
        
        let pick = '';
        console.log(this.props.params.country);
        switch (this.props.params.country) {
            case 'usa':
                console.log(bloomberg);
                pick = bloomberg;
                break;
            case 'germany':
                pick = spiegel;
                break;
            case 'uk':
                pick = bbc;
                break;
            default:
                console.log('default');
                pick = bloomberg;
                break;
        }
        axios.get(pick)
            .then(response => {
                this.setState({
                    news: response.data,
                    'article-0': response.data.articles[0],
                    'article-1': response.data.articles[1],
                    'article-2': response.data.articles[2],
                    'article-3': response.data.articles[3],
                    'article-4': response.data.articles[4],
                    'article-5': response.data.articles[5],
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
        <NewsStory news={this.state['article-5']} />
      </div>
    )
  }
}

export default News;
