import React, { Component } from 'react';
import moment from 'moment';

class Featured extends Component {
  listItems(startSlice = 0) {
    const list = this.props.news[this.props.startSlice].response.docs.map((article, index) => {
      let time = moment(article.pub_date);
      let article_img = article.multimedia[1].url ? article.multimedia[1].url : '';
      return (
        <li key={index}>
          <a href={article.web_url}>
            <img src={`http://www.nytimes.com/${article_img}`} alt={article.name} />
            <span className="featured-article-title">{article.headline.main}</span>
          </a>
        </li>
      );
    });
    return list.slice(0, 3);
  }

  render() {
    let selection = this.props.selection;
    console.log(this.props.news);
    return (
      <div className="featured">
        <div className="featured-layout">
          <div className="featured-details">
            <div className="featured-icons">
              <span className="featured-page-link">
                {this.props.leaders[selection]
                  ? this.props.leaders[selection].first_name + ' ' + this.props.leaders[selection].last_name
                  : 'Not Available'}
              </span>
            </div>
            <div className="featured-details-items">
              <img
                className="featured-leader"
                src={
                  this.props.leaders[selection]
                    ? require(`../../.././images/bio/${this.props.leaders[selection].image}`)
                    : 'test.jpg'
                }
                alt={this.props.news[0] ? this.props.leaders[0].leader : 'Leader'}
              />
              <span>
                <b>
                  {this.props.leaders[selection]
                    ? this.props.leaders[selection].first_name + ' ' + this.props.leaders[selection].last_name
                    : 'Not Available'}
                </b>
                <a href={this.props.leaders[selection] ? this.props.leaders[selection].nation : 'Not Available'}>
                  See more
                </a>
              </span>
            </div>
          </div>
          <div className="featured-news">
            <ul>{this.listItems(this.props.startSlice)}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;

/*
  <img
    className="featured-leader"
    src={require(`../../.././images/bio/${this.props.news[0].image}`)}
    alt={this.props.news[0].leader}
  />
*/
