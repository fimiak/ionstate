import React, { Component } from 'react';
// NOT WORKING COMPONENT
class Featured extends Component {
  listItems(startSlice = 0) {
    const response = this.props.news[this.props.startSlice].response.docs;
    console.log(response);
    let i = 0;
    let reducedList;
    while (i < 5) {
      reducedList.push(response[startSlice + i]);
      i++;
    }

    const list = reducedList.map((article, index) => {
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

      ////  NOT WORKING COMPONENT -- FEATURED ////
      return (
        <li className="news-item" key={index}>
          <a href={article.web_url}>
            <div>
              <img src={`http://www.nytimes.com/${article_img}`} alt="" />
            </div>
            <div>
              <div className="news-item-header">
                <span>{glocations} Loading</span>
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
        <ul>{this.listItems(this.props.startSlice)}</ul>
      </div>
    );
  }
}

export default Featured;
