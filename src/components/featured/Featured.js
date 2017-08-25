import React, { Component } from 'react';
import NavLink from '.././NavLink'
import testdata from '../../data/testdata';

const test = testdata.response.docs;

class Featured extends Component {

    scrollTop() {
        document.getElementsByClassName('App-intro')[0].scrollTop = 0;
    }

    render() {
        return (
            <div className="featuredBox">
                <div className="featured-nation">
                    <h3>Featured Nation</h3>
                    <h3>{this.props.selected.name}</h3>
                </div>
                <div className="featuredEvents">
                    <div className="featuredDetails">
                        <div className="featuredTitle">
                            <img src={require('../.././images/bio/' + this.props.selected['image'])} alt={this.props.selected['leader']} />
                            <h3>{this.props.selected['leader-title']} {this.props.selected['leader']}</h3>
                        </div>
                        <div className="featuredStats">
                            <ul>
                                <li>Party</li>
                                <li>{this.props.selected['party']}</li>
                                <li>Age</li>
                                <li>{this.props.selected['age']}</li>
                                <li>Entered Office</li>
                                <li>{this.props.selected['term-start']}</li>
                                <li>End of Term</li>
                                <li>{this.props.selected['term-end']}</li>
                            </ul>
                            <NavLink to={this.props.selected.country} onClick={this.scrollTop}><button>View more of {this.props.selected.leader}</button></NavLink>
                        </div>
                        <ul>
                            <h4>News</h4>
                            <li><a href={test[0].web_url}>{test[0].headline.main}</a></li>
                            <li><a href={test[1].web_url}>{test[1].headline.main}</a></li>
                            <li><a href={test[2].web_url}>{test[2].headline.main}</a></li>
                            <li><a href={test[3].web_url}>{test[3].headline.main}</a></li>
                            <li><a href={test[4].web_url}>{test[4].headline.main}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Featured;