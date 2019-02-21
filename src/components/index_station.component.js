import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow_Station';

export default class IndexStation extends Component {
  constructor(props) {
    super(props);
    this.state = { station_master: [] };
  }
  componentDidMount() {
    axios.get('/station')
      .then(response => {
        this.setState({ station_master: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  tabRow() {
    return this.state.station_master.map(function (object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div>
        <h3 align="center">Service Station List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Unit Name</th>
              <th>Address 1</th>
              <th>Address 2</th>
              <th>State</th>
              <th>Zip</th>
              <th>Contact Number</th>
              <th>Email Id</th>
              <th>Remarks</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    )
  }
}