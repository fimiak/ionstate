import React, {Component} from 'react';
//import request from '../api/NewsApi';
//import ReactDOM from 'react-dom';

class NewsStory extends Component {

    render() {
        return (
            <div>
                <div className="news-story">
                    <div className="news-img-container">
                        <a className="article-link" href="#">
                            <img className="article-image" alt="Article"></img>
                        </a>
                    </div>
                    <div className="news-info-container">
                        <a className="article-link-headline" href="#">
                            <span className="headline"></span>
                        </a>
                        
                        <div className="article-author-date">
                            <span className="time">{this.props.listname}</span>
                            <span className="author"></span> 
                        </div>
                        <div className="article-text">
                            <span className="article"></span>
                            <a className="article-link-go" href="#">Go to story</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsStory;