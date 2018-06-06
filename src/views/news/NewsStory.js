import React from 'react';
import testdata from '../../data/testdata.json';

function NewsStory(props) {
  const testImage = testdata.response.docs[props.test].multimedia.url;
  const dataDate = props.news.pub_date;
  const regx = /^(.*?)(?=T)/;
  const regDate = dataDate.match(regx)[0]; // Regex article date out of raw data.
  return (
    <li className={"news-box " + props.micro}>
      <div className="news-story">
        <div className="news-img-container">

          <a className="article-link" href={props.news.web_url}>
            <img
              className="article-image"
              alt="Article"
              src={(props.news.multimedia === true) ? '' : require(`../../images/${testImage}`)}
            />
          </a>
          <div className="news-text-container">
            <div className="article-text">
              <span className="article">{props.news.snippet}</span>
            </div>
            <div className="article-author-date">
              <span className="author">{ props.news.length >= 0 ? '' : props.news.byline.original}</span>
              <span className="time">{ props.news.length >= 0 ? '' : regDate}</span>
            </div>
          </div>
        </div>
        <div className="news-info-container">
          <a className="article-link-headline" href={props.news.web_url}>
            <span className="headline">{ props.news.length >= 0 ? '' : props.news.headline.main}</span>
          </a>
        </div>
      </div>
    </li>
  );
}

export default NewsStory;
