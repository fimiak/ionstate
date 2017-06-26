import React, { Component } from 'react';

class NewsStory extends Component {
    render() {
        return (
            <div className="news-box">
                <div className="news-story">
                    <div className="news-img-container">
                        <a className="article-link" href={this.props.news['web_url']}>
                            <img className="article-image" alt="Article" src={ this.props.news.length >= 0 ? '' : 'https://www.nytimes.com/' + this.props.news['multimedia'][2].url}></img>
                        </a>
                    </div>
                    <div className="news-info-container">
                        <a className="article-link-headline" href={this.props.news['web_url']}>
                            <span className="headline">{ this.props.news.length >= 0 ? '' : this.props.news['headline'].main}</span>
                        </a>
                        <div className="article-author-date">
                            <span className="author">{ this.props.news.length >= 0 ? '' : this.props.news.byline.original}</span>
                            <span className="time">{ this.props.news.length >= 0 ? '' : this.props.news['pub_date']}</span>
                        </div>
                        <div className="article-text">
                            <span className="article">{this.props.news['lead_paragraph']}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsStory;
