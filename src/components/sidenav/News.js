import React, {Component} from 'react';
import NewsStory from './NewsStory';
import axios from 'axios';
import testdata from '../../data/testdata';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: testdata,
            test: testdata,            
            loading: true,
            selected: this.props.selected,
            search: this.props.selected.search,
            'article-0': testdata.response.docs[0],
            'article-1': testdata.response.docs[0],
            'article-2': testdata.response.docs[0],
            'article-3': testdata.response.docs[0],
            'article-4': testdata.response.docs[0],
            'article-5': testdata.response.docs[0]
        };
    }

    componentWillMount() {
      //this.performSearch();
      this.testSearch();
    }

    testSearch = () => {
        this.setState({
            'article-0': testdata.response.docs[0],
            'article-1': testdata.response.docs[1],
            'article-2': testdata.response.docs[2],
            'article-3': testdata.response.docs[3],
            'article-4': testdata.response.docs[4],
            'article-5': testdata.response.docs[5],
            loading: false
        });
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
