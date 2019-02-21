import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow_Vehicle';

export default class index_vehicle extends Component {

  constructor(props) {
      super(props);
      this.state = {vehicletype: []}
  }  
    componentDidMount(){
      axios.get('/vehicletype')
        .then(response => {
          this.setState({ vehicletype: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.vehicletype.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center">Vehicle Type  List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Vehicle Body</th>
                <th>vehicle Make</th>
                <th>Vehicle Model</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }