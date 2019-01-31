import React, { Component } from 'react';
import Biography from './Biography';
import CountryData from './vitals/CountryData';
import data from '../../.././data/data.json';
import DataSheets from './vitals/DataSheets';
import Title from '.././home/title/Title';
//import News from './news/News';

const list = [];
for (let i = 0; i < data.data.length; i++) {
  // Assign data.data[i] to 'country' key.
  list[data.data[i].country] = data.data[i];
}

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nation: list[props.location.pathname.replace(/[/]/, '')],
      nat: props.location.pathname.replace(/[/]/, '')
    };
    this.topnavColor = this.topnavColor.bind(this);
  }

  componentDidMount() {
    this.topnavColor();
  }

  topnavColor() {
    document
      .getElementsByClassName('title')[0]
      .setAttribute(
        'style',
        `border-image: linear-gradient(to right, ${this.state.nation['flag-colors']});border-image-slice: 1;`
      );
  }

  render() {
    return (
      <div className="contentBox">
        <Title title={this.state.nation.leader} />
        <div className="content">
          <div className="detail">
            <div id="top-content" className="top-content">
              <div className="top-nav">
                <div className="content-box-links">
                  <a href="/">News</a>
                  <a href="#bio">Biography</a>
                  <a href="#country-data">Country Details</a>
                </div>
              </div>
            </div>

            <div className="top-split datasheets" id="datasheets">
              <DataSheets props={this.state.params} nation={this.state.nation} />
            </div>

            <div id="bio" className="biography">
              <Biography biography={this.state.nation.biography} extended={this.state.nation['biography-election']} />
            </div>

            <div id="country-data">
              <CountryData nation={this.state.nation} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;

/*
<div className="top-nav-leader">
                  <div className="detail__banner ">
                    <div className="top-icon">
                      <img
                        className="detail__image-top"
                        alt={this.state.nation.leader}
                        src={require(`../../.././images/thumbs/${this.state.nation.thumb}`)}
                      />
                    </div>
                  </div>
                  <div className="detail__image-flag">
                    <img
                      alt={this.state.nation.name}
                      src={require(`../../.././images/flags/${this.state.nation.flag}`)}
                    />
                  </div>
                </div>
*/
