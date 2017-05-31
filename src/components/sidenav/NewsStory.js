import React, { Component } from 'react';

class NewsStory extends Component {

    render() {
        return (
            <div>
                <div className="news-story">
                    <div className="news-img-container">
                        <a className="article-link" href={this.props.news.url}>
                            <img className="article-image" alt="Article" src={this.props.news.urlToImage}></img>
                        </a>
                    </div>
                    <div className="news-info-container">
                        <a className="article-link-headline" href={this.props.news.url}>
                            <span className="headline">{this.props.news.title}</span>
                        </a>
                        <div className="article-author-date">
                            <span className="author">By {this.props.news.author}</span>
                            <span className="time">{this.props.news.publishedAt}</span>
                        </div>
                        <div className="article-text">
                            <span className="article">{this.props.news.description}</span>
                            <a className="article-link-go" href={this.props.news.url}>Go</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsStory;
