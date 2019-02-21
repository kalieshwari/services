import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class Edit extends Component {
  constructor(props) {
    super();
    this.state = {
      redirect: false
    };

    super(props);
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
  componentDidMount() {
    axios.get('/service/edit/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          body_type: response.data.body_type,
          service_name: response.data.service_name,
          service_amount: response.data.service_amount
        });
      })
      .catch(function (error) {
        console.log(error);
      })
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
    axios.post('/service/update/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data))
      .then(() => this.setState({ redirect: true }));
    //this.props.history.push('/index');
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/index" />;
    }
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Service</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Body Type:  </label>
            <input
              type="text"
              className="form-control"
              value={this.state.body_type}
              onChange={this.onChangeBodyType}
            />
          </div>
          <div className="form-group">
            <label>Service Name: </label>
            <input type="text"
              className="form-control"
              value={this.state.service_name}
              onChange={this.onChangeServiceName}
            />
          </div>
          <div className="form-group">
            <label>Price: </label>
            <input type="number" className="form-control" value={this.state.service_amount}
              onChange={this.onChangeServiceAmount}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Update Service" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}