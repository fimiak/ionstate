import React, { Component } from 'react/react.js';
import testdata from '../../data/testdata';

class NewsStory extends Component {

    render() {
        let testImage = testdata.response.docs[this.props.test].multimedia.url;
        let dataDate = this.props.news['pub_date'];
        let regx = /^(.*?)(?=T)/;
        let regDate = dataDate.match(regx)[0]; // Regex article date out of raw data.
        return (
            <div className="news-box">
                <div className="news-story">
                    <div className="news-img-container">
                        <a className="article-link" href={this.props.news['web_url']}>
                            <img className="article-image" alt="Article" src={(this.props.news.multimedia.length === 0) ? '' : require('../../images/' + testImage)}></img>
                        </a>
                        <a className="article-link-headline" href={this.props.news['web_url']}>
                            <span className="headline">{ this.props.news.length >= 0 ? '' : this.props.news['headline'].main}</span>
                        </a>
                    </div>
                    <div className="news-info-container">
                        <div className="article-author-date">
                            <span className="author">{ this.props.news.length >= 0 ? '' : this.props.news.byline.original}</span>
                            <span className="time">{ this.props.news.length >= 0 ? '' : regDate}</span>
                        </div>
                        <div className="article-text">
                            <span className="article">{this.props.news['snippet']}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsStory;
