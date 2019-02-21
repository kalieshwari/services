import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class EditStation extends Component {
  constructor(props) {
    super();
    this.state = {
      redirect: false
    };

    super(props);
    this.onChangeUnitName = this.onChangeUnitName.bind(this);
    this.onChangeAddress1 = this.onChangeAddress1.bind(this);
    this.onChangeAddress2 = this.onChangeAddress2.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    this.onChangeContactNumber = this.onChangeContactNumber.bind(this);
    this.onChangeEmailid = this.onChangeEmailid.bind(this);
    this.onChangeRemarks = this.onChangeRemarks.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      unit_name: '',
      address1: '',
      address2: '',
      state: '',
      zip: '',
      contact_number: '',
      email_id: '',
      remarks: ''
    }
  }
  componentDidMount() {
    axios.get('/station/edit_station/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          unit_name: response.data.unit_name,
          address1: response.data.address1,
          address2: response.data.address2,
          state: response.data.state,
          zip: response.data.zip,
          contact_number: response.data.contact_number,
          email_id: response.data.email_id,
          remarks: response.data.remarks
        });

      })
      .catch(function (error) {
        console.log(error);
      })
  }
  onChangeUnitName(e) {
    this.setState({
      unit_name: e.target.value
    });
  }
  onChangeAddress1(e) {
    this.setState({
      address1: e.target.value
    })
  }
  onChangeAddress2(e) {
    this.setState({
      address2: e.target.value
    })
  }
  onChangeState(e) {
    this.setState({
      state: e.target.value
    });
  }
  onChangeZip(e) {
    this.setState({
      zip: e.target.value
    })
  }
  onChangeContactNumber(e) {
    this.setState({
      contact_number: e.target.value
    })
  }
  onChangeEmailid(e) {
    this.setState({
      email_id: e.target.value
    });
  }
  onChangeRemarks(e) {
    this.setState({
      remarks: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();
    const obj = {
      unit_name: this.state.unit_name,
      address1: this.state.address1,
      address2: this.state.address2,
      state: this.state.state,
      zip: this.state.zip,
      contact_number: this.state.contact_number,
      email_id: this.state.email_id,
      remarks: this.state.remarks
    };
    axios.post('/station/update_station/' + this.props.match.params.id, obj)
      .then(res => console.log(res.data))
      .then(() => this.setState({ redirect: true }));
   // this.props.history.push('/index_station');
  }
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/index_station" />;
    }
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Service Station</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Unit Name:  </label>
            <input type="text" className="form-control" value={this.state.unit_name}
              onChange={this.onChangeUnitName}
            />
          </div>
          <div className="form-group">
            <label>Address 1: </label>
            <input type="text" className="form-control" value={this.state.address1}
              onChange={this.onChangeAddress1}
            />
          </div>
          <div className="form-group">
            <label>Address 2: </label>
            <input type="text" className="form-control" value={this.state.address2}
              onChange={this.onChangeAddress2}
            />
          </div>
          <div className="form-group">
            <label>State:  </label>
            <input type="text" className="form-control" value={this.state.state}
              onChange={this.onChangeState} />
          </div>
          <div className="form-group">
            <label>zip: </label>
            <input type="number" className="form-control" value={this.state.zip}
              onChange={this.onChangeZip} />
          </div>
          <div className="form-group">
            <label>Contact Number: </label>
            <input type="number" className="form-control" value={this.state.contact_number}
              onChange={this.onChangeContactNumber}
            />
          </div>
          <div className="form-group">
            <label>Email Id:  </label>
            <input type="text" className="form-control" value={this.state.email_id}
              onChange={this.onChangeEmailid} />
          </div>
          <div className="form-group">
            <label>Remarks: </label>
            <input type="text" className="form-control" value={this.state.remarks}
              onChange={this.onChangeRemarks} />
          </div>
          <div className="form-group">
            <input type="submit"
              value="Update Station"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}