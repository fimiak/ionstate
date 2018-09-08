import React from 'react';
import moment from 'moment';
function NewsStory(props) {
  return (
    <li className={'news-box ' + props.micro}>
      <div className="news-story">
        <div className="news-img-container">
          <a className="article-link" href={props.news.web_url}>
            <img
              className="article-image"
              alt="Article"
              src={
                props.news.multimedia[5].url
                  ? `http://www.nytimes.com/${props.news.multimedia[5].url}`
                  : `http://www.nytimes.com/${props.news.multimedia[5].url}`
              }
            />
          </a>
        </div>
        <div className="news-info-container">
          <a className="article-link-headline" href={props.news.web_url}>
            {props.news.length >= 0 ? '' : props.news.headline.main}
          </a>
          <div className="news-text-container">
            <div className="article-text">
              <span className="article">{props.news.snippet}</span>
            </div>
            <div className="article-author-date">
              <span className="author">{props.news.length >= 0 ? '' : props.news.byline.original}</span>
              <span className="time">
                {props.news.length >= 0 ? '' : moment(props.news.pub_date).format('MMMM DD, LT')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default NewsStory;
