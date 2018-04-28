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
      <div className="featuredBox">
        <div className="featuredEvents">
          <div className="featuredDetails">
            <div className="featuredDetailsBox">
              <div className="featuredTitle">
                <div>
                  <span>{this.props.selected['leader-title']}</span>
                  <span>{this.props.selected.leader}</span>
                </div>
                <img src={require(`../../.././images/bio/${this.props.selected.image}`)} alt={this.props.selected.leader} />
              </div>
              <div className="featuredStats">
                <img className="featured-flag" src={require(`../../.././images/flags/${this.props.selected.flag}`)} alt="" />
                <span>{this.props.selected.name}</span>
                <ul className="featured-stats-list">
                  <li>{this.props.selected.party}</li>
                  <li>Inauguration</li>
                  <li>{this.props.selected['term-start']}</li>
                  <li>Birthdate<span></span></li>
                  <li>{this.props.selected['birth-date']}</li>
                  <li><a href={this.props.selected.webpage}>Homepage</a></li>
                </ul>
                <NavLink
                  to={this.props.selected.country}
                  onClick={() => this.props.setNation(this.props.selected.country)}
                >
                  <button> Explore Profile</button>
                </NavLink>
              </div>
            </div>
            <div className="featured-news">
              <ul>
                <p>...{this.props.selected['biography-extended']}</p>
                <span>{this.props.selected.leader} in The New York Times</span>
                <li><a href={this.state['article-0'].web_url}>{this.state['article-0'].headline.main}</a></li>
                <li><a href={this.state['article-1'].web_url}>{this.state['article-1'].headline.main}</a></li>
                <li><a href={this.state['article-2'].web_url}>{this.state['article-2'].headline.main}</a></li>
                <li><a href={this.state['article-3'].web_url}>{this.state['article-3'].headline.main}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Featured;
