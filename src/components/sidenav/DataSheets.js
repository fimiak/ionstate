import React, {Component} from 'react';
import data from '../../data/data';

let sel = [];

class DataSheets extends Component {
  render() {
    switch (this.props.selection) {
      case 'usa':
        sel = data.data[0];
        break;
      case 'uk':
        sel = data.data[1];
        break;
      case 'mexico':
        sel = data.data[2];
        break;
      case 'france':
        sel = data.data[3];
        break;
      case 'germany':
        sel = data.data[4];
        break;
      case 'canada':
        sel = data.data[5];
        break;
      case 'russia':
        sel = data.data[6];
        break;
      default:
        sel = data.data[0];
        break;
    }
    return (
      <div>
        <table className="inner-datasheets">
          <tbody>
            <tr>
              <th colSpan="3" className="data-country">{sel.name}</th>
            </tr>
            <tr className="data-info">
              <td rowSpan="6" className="data-pic"><img className="data-image" src={sel['image']} alt={sel.leader} /></td>
              <td>{sel['leader-title']}</td>
              <td>{sel.leader}</td>
            </tr>
            <tr>
              <td>{sel['deputy-title']}</td>
              <td>{sel['deputy-leader']}</td>
            </tr>
            <tr className="data-info">
              <td>Party</td>
              <td>{sel['party']}</td>
            </tr>
            <tr className="data-info">
              <td>Popular Vote</td>
              <td>{sel['win-percentage']}</td>
            </tr>
            <tr className="data-info">
              <td>Term Start</td>
              <td>{sel['term-start']}</td>
            </tr>
            <tr className="data-info">
              <td>Term End</td>
              <td>{sel['term-end']}</td>
            </tr>
            <tr className="data-info">
              <td rowSpan="4"></td>
              <td>Birth Date</td>
              <td>{sel['birth-date']}</td>
            </tr>
            <tr>
              <td>Upcoming Elections</td>
              <td>{sel['elections']['2018']['date']}<hr />
                  {sel['elections']['2020']['date']}</td>
            </tr>
            <tr className="data-info">
              <td>Previous Leader</td>
              <td>{sel['previous-leader']}</td>
            </tr>
            <tr className="data-info">
              <td>Previous Leader Party</td>
              <td>{sel['previous-leader-party']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default DataSheets;
