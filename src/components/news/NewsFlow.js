import React from 'react';
import moment from 'moment';

function NewsFlow(props) {
  return (
    <li className="news-flow">
      <a className="article-link" href={props.news.web_url}>
        <img
          className=""
          alt="Article"
          src={
            props.news.multimedia[9].url
              ? `http://www.nytimes.com/${props.news.multimedia[9].url}`
              : `http://www.nytimes.com/${props.news.multimedia[9].url}`
          }
        />
      </a>
      <div>
        <span className="flow-title">
          <a className="flow-link" href={props.news.web_url}>
            {props.news.headline.main}
          </a>
        </span>
        <span className="details">
          {props.news.byline.original} {moment(props.news.pub_date).format('MMMM DD, YYYY')}
        </span>
      </div>
    </li>
  );
}

export default NewsFlow;
