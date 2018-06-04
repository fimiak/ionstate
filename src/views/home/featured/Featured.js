import React, { Component } from 'react';
import axios from 'axios';
import NavLink from '../.././NavLink';
import testdata from '../../../data/testdata.json';

class Featured extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      search: this.props.selected.search,
      'article-0': testdata.response.docs[0],
      'article-1': testdata.response.docs[1],
      'article-2': testdata.response.docs[2],
      'article-3': testdata.response.docs[3],
    };

    this.scrollTop = this.scrollTop.bind(this);
  }

  componentWillMount() {
    // this.performSearch();
  }

  performSearch() {
    const nytimes = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.search}&page=0&fq=source:("The New York Times")&sort=newest&api-key=177f9a3c753d409887be6d5291df7d48`;
    axios.get(nytimes)
      .then((response) => {
        this.setState({

          'article-0': response.data.response.docs[0],
          'article-1': response.data.response.docs[1],
          'article-2': response.data.response.docs[2],
          'article-3': response.data.response.docs[3],

        });
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }

  scrollTop() {
    document.getElementsByClassName('App-intro')[0].scrollTop = 0;
  }

  render() {
    return (
      <div className="featured">
        <div className="featured-layout">
          <div className="featured-details">
            <div className="featured-details-items">
              <img className="featured-leader" src={require(`../../.././images/bio/${this.props.selected.image}`)} alt={this.props.selected.leader} />
              <span>{this.props.selected['leader-title']} <br/>{this.props.selected.leader}</span>
            </div>
            <div className="featured-icons">
              <img className="featured-flag" src={require(`../../.././images/flags/${this.props.selected.flag}`)} alt={this.props.selected.name} />
              <span><b>{this.props.selected.name}</b></span>
            </div>
          </div>
          <div className="featured-news">
            <ul>
              <span><b>Articles featuring {this.props.selected.leader}</b></span>
              <li><a href={this.state['article-0'].web_url}>{this.state['article-0'].headline.main}</a></li>
              <li><a href={this.state['article-1'].web_url}>{this.state['article-1'].headline.main}</a></li>
              <li><a href={this.state['article-2'].web_url}>{this.state['article-2'].headline.main}</a></li>
              <li><a href={this.state['article-3'].web_url}>{this.state['article-3'].headline.main}</a></li>
            </ul>
            <div className="featured-link">
              <NavLink to={this.props.selected.country} onClick={() => this.props.setNation(this.props.selected.country)}>View More
              </NavLink>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Featured;