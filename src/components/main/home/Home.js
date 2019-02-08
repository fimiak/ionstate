import React, { Component } from 'react';
import ElectionCalWrap from '.././home/elections/ElectionCalWrap';
import Featured from '.././home/featured/Featured';
import Title from '.././home/title/Title';

class Home extends Component {
  state = {};

  componentDidMount() {
    fetch('https://fast-journey-76120.herokuapp.com/api/news')
      .then(res => res.json())
      .then(news => this.setState({ news }));
  }

  render() {
    if (!this.state.news) {
      return (
        <div className="home">
          <div className="home__content">
            <div className="home-featured">
              <Title title="IONSTATE:" subtitle="The biggest daily news and topics concerning today's world leaders" />
              <ElectionCalWrap {...this.props} {...this.state} />
              <p className="item-header">Loading featured news...</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="home">
        <div className="home__content">
          <div className="home-featured">
            <Title title="IONSTATE:" subtitle="The biggest daily news and topics concerning today's world leaders" />
            <ElectionCalWrap {...this.props} {...this.state} />
            <Featured startSlice={0} {...this.props} {...this.state} />
            <h1 className="item-header">More Featured News</h1>
            <Featured startSlice={3} {...this.props} {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
