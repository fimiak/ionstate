import React, {Component} from 'react';
import data from '../../data/data';


class DataSheets extends Component {
  render() {
    return (
      <div>
        <table className="inner-datasheets">
          <tbody>
            <tr>
              <th colSpan="3" className="data-country"></th>
            </tr>
            <tr className="data-info">
              <td rowSpan="6" className="data-pic"><img className="data-image" src={data.data[0]['image']} alt={data.data[0].leader} /></td>
              <td>Leader</td>
              <td>{data.data[0]['leader-title']} {data.data[0].leader}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr className="data-info">
              <td>Party</td>
              <td>{data.data[0]['party']}</td>
            </tr>
            <tr className="data-info">
              <td>Popular Vote</td>
              <td>{data.data[0]['win-percentage']}</td>
            </tr>
            <tr className="data-info">
              <td>Term Start</td>
              <td>{data.data[0]['term-start']}</td>
            </tr>
            <tr className="data-info">
              <td>Birth date</td>
              <td>{data.data[1]['birth-date']}</td>
            </tr>
            <tr>
              <td rowSpan="3"></td>
              <td>Upcoming Elections</td>
              <td>{data.data[0]['elections']['2018']['date']}<hr />
                  {data.data[0]['elections']['2020']['date']}</td>
            </tr>
            <tr className="data-info">
              <td>Previous Leader</td>
              <td>{data.data[0]['previous-leader']}</td>
            </tr>
            <tr className="data-info">
              <td>Previous Leader Party</td>
              <td>{data.data[0]['previous-leader-party']}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default DataSheets;
