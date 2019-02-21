import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
//import NumberFormat from 'react-number-format';
//import NumericInput from 'react-numeric-input'; 
export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.onChangeBodyType = this.onChangeBodyType.bind(this);
    this.onChangeServiceName = this.onChangeServiceName.bind(this);
    this.onChangeServiceAmount = this.onChangeServiceAmount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      body_type: '',
      service_name: '',
      service_amount: ''
    }
  }
  onChangeBodyType(e) {
    this.setState({
      body_type: e.target.value
    });
  }
  onChangeServiceName(e) {
    this.setState({
      service_name: e.target.value
    })
  }
  onChangeServiceAmount(e) {
    this.setState({
      service_amount: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      body_type: this.state.body_type,
      service_name: this.state.service_name,
      service_amount: this.state.service_amount
    };


    axios.post('/service/add', obj)
      .then(res => console.log(res.data))
      .then(() => this.setState({ redirect: true }));

    this.setState({
      body_type: '',
      service_name: '',
      service_amount: ''
    })
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/index" />
    }
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Add New Service</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Body Type:  </label>
            <input type="text" className="form-control" value={this.state.body_type} onChange={this.onChangeBodyType} />
          </div>
          <div className="form-group">
            <label>Add  Service Name: </label>
            <input type="text" className="form-control" value={this.state.service_name}
              onChange={this.onChangeServiceName} />
          </div>
          <div className="form-group">
            <label>Enter Price: </label>
            <input type="number" className="form-control" value={this.state.service_amount}
              onChange={this.onChangeServiceAmount} pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" data-type="currency" placeholder="$0.00" />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}