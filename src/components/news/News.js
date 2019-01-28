import React, { Component } from 'react';
import NewsFlow from './NewsFlow';
import NewsStory from './NewsStory';
import testdata from '../../data/testdata.json';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testdata.response.docs,
      news: [
        {
          response: {
            docs: [
              {
                id: 0,
                byline: {
                  original: 'test'
                },
                headline: {
                  main: 'Not Available'
                },
                leader: '5b7f07a3fb6fc0183b3fc1a1',
                multimedia: [
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  }
                ],
                pub_date: '2017-08-12T12:21:27+0000',
                snippet: 'November 2018',
                source: 'Reuters',
                country: 'Ireland',
                web_url: 'https://www.nytimes.com'
              }
            ]
          }
        },
        {
          response: {
            docs: [
              {
                id: 1,
                byline: {
                  original: 'test'
                },
                headline: {
                  main: 'Not Available'
                },
                leader: '5b7f07a3fb6fc0183b3fc1a1',
                multimedia: [
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  }
                ],
                pub_date: '2017-08-12T12:21:27+0000',
                snippet: 'November 2018',
                source: 'Reuters',
                country: 'Ireland',
                web_url: 'https://www.nytimes.com'
              }
            ]
          }
        },
        {
          response: {
            docs: [
              {
                id: 0,
                headline: {
                  main: 'Not Available'
                },
                leader: '5b7f07a3fb6fc0183b3fc1a1',
                multimedia: [
                  {
                    url: 'testdata/test2.jpg'
                  },
                  {
                    url: 'testdata/test2.jpg'
                  }
                ],
                pub_date: '2017-08-12T12:21:27+0000',
                snippet: 'November 2018',
                source: 'Reuters',
                country: 'Ireland',
                web_url: 'https://www.nytimes.com'
              }
            ]
          }
        }
      ]
    };
  }

  componentDidMount() {
    /* FETCH DATA
    fetch('https://fast-journey-76120.herokuapp.com/api/news')
      .then(res => res.json())
      .then(news => this.setState({ news }));
      */
  }

  render() {
    const listItems = this.state.news[0].response.docs.map((news, index) => <NewsStory key={index} news={news} />);
    const listFlow = this.state.news[0].response.docs.map((news, index) => <NewsFlow key={index} news={news} />);
    return (
      <div>
        <ul className="inner-news">{listItems.slice(0, 2)}</ul>
        <ul>{listFlow.slice(2)}</ul>
      </div>
    );
  }
}

export default News;
