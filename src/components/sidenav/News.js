import React, {Component} from 'react';
import NewsStory from './NewsStory';

class News extends Component {
  render() {
    return (
      <div className="inner-news">
        <NewsStory />
      </div>
    )
  }
}

export default News;
