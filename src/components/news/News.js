import React, { Component } from 'react';
import axios from 'axios';
import NewsStory from './NewsStory';
import testdata from '../../data/testdata.json';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testdata.response.docs
    };
  }

  componentDidMount() {
    // this.performSearch();
    this.testSearch();
  }

  testSearch() {
    this.setState({
      data: testdata.response.docs
    });
  }

  performSearch() {
    const nytimes = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
      this.props.nation.search
    }&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48`;
    axios
      .get(nytimes)
      .then(response => {
        this.setState({
          data: response.data.response.docs
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    const listItems = this.state.data.map((data, index) => <NewsStory key={index} news={data} test={index} micro="" />);
    const listMicro = this.state.data.map((data, index) => (
      <NewsStory key={index} news={data} test={index} micro="news-box-micro" />
    ));
    return (
      <div>
        <ul className="inner-news">{listItems.slice(0, 2)}</ul>
      </div>
    );
  }
}

export default News;
