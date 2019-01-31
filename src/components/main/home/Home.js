import React, { Component } from 'react';
//import ElectionCalWrap from '.././home/elections/ElectionCalWrap';
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
    /**** CHECK */
    if (!this.state.news) {
      return <Title title="IONSTATE:" subtitle="The biggest daily news and topics concerning today's world leaders" />;
    }
    /*** */
    let selection = Math.floor(Math.random() * 30);
    switch (selection) {
      case 0:
        selection = 1;
        break;
      case 27:
        selection = 11;
        break;
      default:
        break;
    }
    return (
      <div className="home">
        <div className="home__content">
          <div className="home-featured">
            <Title title="IONSTATE:" subtitle="The biggest daily news and topics concerning today's world leaders" />
            <Featured startSlice={0} selection={selection} {...this.props} {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
