import React, { Component } from 'react';
import axios from 'axios';
//import request from '../api/NewsApi'; Not using this currently

let loaded = false;


class NewsStory extends Component {

    constructor() {
        super();
        this.state = {
            news: [],
            loading: true
        };
        this.performSearch();
    }

    performSearch = () => {
        axios.get('https://newsapi.org/v1/articles?source=bloomberg&apiKey=3990f9aab5b046b5aeb3e089ca3e37dc')
            .then(response => {
                this.setState({
                    news: response.data,
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }


    componentDidMount() {
        //this.performSearch();
    }

    render() {
        if (this.state.loading === false) {
            loaded = true;
        }
        return (
            <div>
                <div className="news-story">
                    <div className="news-img-container">
                        <a className="article-link" href={loaded && this.state.news.articles[0].url}>
                            <img className="article-image" alt="Article" src={loaded && this.state.news.articles[0].urlToImage}></img>
                        </a>
                    </div>
                    <div className="news-info-container">
                        <a className="article-link-headline" href={loaded && this.state.news.articles[0].url}>
                            <span className="headline">{loaded && this.state.news.articles[0].title}</span>
                        </a>

                        <div className="article-author-date">
                            <span className="author">By {loaded && this.state.news.articles[0].author}</span>
                            <span className="time">{loaded && this.state.news.articles[0].publishedAt}</span>
                        </div>
                        <div className="article-text">
                            <span className="article">{loaded && this.state.news.articles[0].description}</span>
                            <a className="article-link-go" href="#">Go</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsStory;
