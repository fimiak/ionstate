import React, { Component } from 'react';

class Featured extends Component {
  listItems(startSlice = 0) {
    let response = this.props.news[this.props.startSlice].response.docs;
    let i = 0;
    while (i < 9) {
      response.push(response[0]);
      i++;
    }
    const list = response.map((article, index) => {
      let article_img = article.multimedia[1].url ? article.multimedia[1].url : '';

      //let person = article.keywords[0].name.find('glocation');
      let person;
      let glocations;
      if (article.keywords) {
        article.keywords.forEach(keyword => {
          if (keyword.name === 'persons') {
            person = keyword.value;
          } else if (keyword.name === 'glocations') {
            glocations = keyword.value;
          }
        });
      }

      return (
        <li className="news-item" key={index}>
          <a href={article.web_url}>
            <div>
              <img src={`http://www.nytimes.com/${article_img}`} alt="" />
            </div>
            <div>
              <div className="news-item-header">
                <span>{glocations} Test</span>
                <span>{person}</span>
              </div>
              <div className="news-item-detail">
                <span>{article.byline.original}</span>
              </div>
              <span className="news-item-content">{article.headline.main}</span>
            </div>
          </a>
        </li>
      );
    });
    return list;
  }

  render() {
    return (
      <div className="featured">
        <ul>{this.listItems(this.props.startSlice).slice(0, -1)}</ul>
      </div>
    );
  }
}

export default Featured;
