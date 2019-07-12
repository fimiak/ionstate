import React from 'react';
import moment from 'moment';

class Summit extends React.Component {
  listItems() {
    const list = this.props.summits.map((summit, index) => {
      let time = moment(summit.date);
      let summit_img = summit.img ? summit.img : 'summit.jpg';
      return (
        <li key={index}>
          <a href={summit.url}>
            <img src={require(`../../images/${summit_img}`)} alt={summit.name} />
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
    return (
      <div>
        <h2 className="item-header">Summits</h2>
        <ul className="summits-list">{this.listItems()}</ul>
      </div>
    );
  }
}

export default Summit;
