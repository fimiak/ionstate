import React, { Component } from 'react';
import Featured from '.././home/featured/Featured';
import Ad from '.././ads/Ad';
import ElectionCalWrap from '.././elections/ElectionCalWrap';
import Summits from '.././summits/Summits';
import moment from 'moment';

// <button onClick={this.props.addLike.bind(null, i)}>&hearts; {data.likes}</button>

class Home extends Component {
  state = {
    leaders: [
      {
        id: 0,
        first_name: 'Donald',
        last_name: 'Trump',
        name: 'Donald Trump',
        image: 'trump.jpg',
        thumb: 'trump.jpg',
        banner: 'trump-int.jpg'
      }
    ],
    nations: [
      { id: 0, date_of_election: 'November 2018', name: 'United States of America', leader: '5b7f07a3fb6fc0183b3fc1a1' }
    ],
    news: [
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
    ],
    summits: [{ name: 'G7', date: 'November 2018' }, { name: 'NATO', date: '7/11/18' }]
  };

  componentDidMount() {
    /*fetch('https://fast-journey-76120.herokuapp.com/elections')
      .then(res => res.json())
      .then(dates => this.setState({ dates }));
    */

    fetch('https://fast-journey-76120.herokuapp.com/api/leaders')
      .then(res => res.json())
      .then(leaders => this.setState({ leaders }));

    fetch('https://fast-journey-76120.herokuapp.com/api/nations')
      .then(res => res.json())
      .then(nations => this.setState({ nations }));

    fetch('https://fast-journey-76120.herokuapp.com/api/summits')
      .then(res => res.json())
      .then(summits => this.setState({ summits }));

    fetch('http://127.0.0.1:3001/api/news')
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
    let time = moment(this.state.summits[0].date);
    const hero_img = this.state.summits[2] ? this.state.summits[0].img : 'summit.jpg';
    return (
      <div className="home">
        <div className="inner-content">
          <div className="inner-featured">
            <div className="item-header">Latest News</div>
            <Featured startSlice={0} selection={selection - 1} {...this.props} {...this.state} />
            <Featured startSlice={1} selection={selection} {...this.props} {...this.state} />
            <Featured startSlice={2} selection={selection + 1} {...this.props} {...this.state} />
          </div>

          <div className="home-hero">
            <a className="home-hero-link" href="https://g7.gc.ca/en/" alt="G7">
              <img
                className="home-hero-img"
                src={require(`../../images/${hero_img}`)}
                alt={this.state.summits[0].name}
              />
            </a>
            <div className="home-overlay">
              {this.state.summits[0].name} | {this.state.summits[0].location} <br /> {time.format('MMM DD, YYYY')}
            </div>
          </div>
          <div className="summits">
            <Summits {...this.state} />
          </div>

          <div className="inner-election">
            <div className="item-header">Elections</div>
            <ElectionCalWrap {...this.props} {...this.state} />
          </div>

          <div className="inner-ad">
            <Ad />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
