import React, {Component} from 'react';
import NewsStory from './NewsStory';

class News extends Component {
  render() {
    let a = 'abc';
    return (
      <div className="inner-news">
        <NewsStory listname={a} />
      </div>
    )
  }
}

export default News;
