import React, { Component } from 'react';
import moment from 'moment';

interface ISummitProps {
  date?: any;
  img?: any;
  location?: string;
  name?: string;
  url?: string;
  summits?: string[];
}

interface ISummitState {}

class Summit extends Component<ISummitProps, ISummitState> {
  listItems() {
    const listItems: any[] = this.props.summits ? this.props.summits : [];
    const list: any[] = listItems.map((summit, index) => {
      let time = moment(summit.date);
      let summit_img = summit.img ? summit.img : 'summit.jpg';
      return (
        <li key={index}>
          <a href={summit.url}>
            <img src={require(`../../../../images/${summit_img}`)} alt={summit.name} />
            <span>
              {summit.name} | {summit.location} <br />
              {time.format('MMM DD, YYYY')}
            </span>
          </a>
        </li>
      );
    });
    return list.slice(1);
  }

  render() {
    const { img, date, name, location } = this.props;
    return (
      <div>
        <h2 className="item-header">Summits</h2>
        <ul className="summits-list">{this.listItems()}</ul>
      </div>
    );
  }
}

export default Summit;
