import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get('/service/delete/' + this.props.obj._id)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
      .then(() => this.setState({ redirect: true }));
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/index" />;
    }
    return (
      <tr>
        <td>
          {this.props.obj.body_type}
        </td>
        <td>
          {this.props.obj.service_name}
        </td>
        <td>
          {this.props.obj.service_amount}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button onClick={(e) => { if (window.confirm('Are you sure to delete this item?')) this.delete(e) }} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
export default TableRow;