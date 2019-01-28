import React, { Component } from 'react';
import moment from 'moment';

class Featured extends Component {
  listItems(startSlice = 0) {
    const list = this.props.news[this.props.startSlice].response.docs.map((article, index) => {
      let time = moment(article.pub_date);
      let article_img = article.multimedia[1].url ? article.multimedia[1].url : '';
      return (
        <li className="news-item" key={index}>
          <div>
            <a href={article.web_url}>
              <img src={`http://www.nytimes.com/${article_img}`} alt={article.name} />
            </a>
          </div>
          <div>
            <div className="news-item-header">
              <span>Country - {article.name}</span>
              <span>Topic</span>
            </div>
            <div className="news-item-detail">
              <span>{article.source}</span>
              <span>{time.fromNow()}</span>
            </div>
            <span className="news-item-content">{article.headline.main}</span>
          </div>
        </li>
      );
    });
    return list;
  }

  render() {
    let selection = this.props.selection;
    return (
      <div className="featured">
        <ul>{this.listItems(this.props.startSlice)}</ul>
      </div>
    );
  }
}

export default Featured;
