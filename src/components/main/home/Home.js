import React, { Component } from 'react';
//import ElectionCalWrap from '.././home/elections/ElectionCalWrap';
import Featured from '.././home/featured/Featured';
import Title from '.././home/title/Title';

class Home extends Component {
  state = {
    news: [
      {
        response: {
          docs: [
            {
              id: 0,
              headline: {
                main: 'Loading'
              },
              keywords: [
                {
                  isMajor: 'N',
                  rank: 1,
                  name: 'glocations',
                  value: 'Belarus'
                },
                {
                  isMajor: 'N',
                  rank: 1,
                  name: 'persons',
                  value: 'Lukashenko'
                }
              ],
              leader: '5b7f07a3fb6fc0183b3fc1a1',
              byline: {
                original: 'By REUTERS'
              },
              multimedia: [
                {
                  url: 'testdata/test2.jpg'
                },
                {
                  url: 'testdata/test2.jpg'
                }
              ],
              pub_date: '2017-08-12T12:21:27+0000',
              snippet: '',
              source: '',
              country: '',
              web_url: ''
            }
          ]
        }
      }
    ],
    nations: [
      {
        2018: [
          {
            election: 'Zimbabwe',
            date: '7/29/2018'
          }
        ]
      }
    ]
  };

  componentDidMount() {
    fetch('https://fast-journey-76120.herokuapp.com/api/news')
      .then(res => res.json())
      .then(news => this.setState({ news }));
  }

  render() {
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
