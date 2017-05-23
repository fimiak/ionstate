import React, {Component} from 'react';

class Schedule extends Component {
  render() {
    return (
      <div>
        <div className="inner-schedule">
          <table className="inner-datasheets">
            <tbody>
              <tr>
                <th colSpan="2" className="data-country">Upcoming Schedule</th>
              </tr>
              <tr>
                <td>June</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>August</td>
                <td>Data</td>
              </tr>
              <tr>
                <td>September</td>
                <td>Data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Schedule;
