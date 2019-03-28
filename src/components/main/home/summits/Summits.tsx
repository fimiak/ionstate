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
      let summit_img = summit.img ? summit.img : 'loading.jpg';
      return (
        <li key={index}>
          <a href={summit.url}>
            <img src="./images/summit.jpg" alt={summit.name} />
            <p>
              <span>{summit.name}</span>
              <span>{summit.location}</span>
              <span>{time.format('MMM DD, YYYY')}</span>
            </p>
          </a>
        </li>
      );
    });
    return list.slice(0);
  }
  // {summit.img === true ? require(`../../../../images/${summit_img}`) : ''}
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
