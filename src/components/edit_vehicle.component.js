import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class edit_vehicle extends Component {
  constructor(props) {
      super(props);
      this.state = {
        redirect: false
      };
      this.onChangeVehicleBody = this.onChangeVehicleBody.bind(this);
      this.onChangeVehicleMake = this.onChangeVehicleMake.bind(this);
      this.onChangeVehicleModel = this.onChangeVehicleModel.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        vehicle_body: '',
        vehicle_make: '',
        vehicle_model:''
      }
  }
componentDidMount() {
      axios.get('/vehicletype/edit_vehicle/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                vehicle_body: response.data.vehicle_body, 
                vehicle_make : response.data.vehicle_make,
                vehicle_model: response.data.vehicle_model
               });             
          })
          .catch(function (error) {
              console.log(error);
          })
          
    }
  
  onChangeVehicleBody(e) {
    this.setState({
      vehicle_body: e.target.value
    });
  }
  onChangeVehicleMake(e) {
    this.setState({
      vehicle_make: e.target.value
    })  
  }
    
  onChangeVehicleModel(e) {
    this.setState({
      vehicle_model: e.target.value
    })  
  }
  onSubmit(e) {
    e.preventDefault();
        const obj = {
        vehicle_body: this.state.vehicle_body,
        vehicle_make: this.state.vehicle_make,
        vehicle_model:this.state.vehicle_model
        };
         axios.post('/vehicletype/update_vehicle/'+this.props.match.params.id, obj).then(res=>console.log(res.data)).then(() => this.setState({ redirect: true }));
   // this.props.history.push('/index');
  }
 
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/index_vehicle" />;
    }
      return (
          <div style={{ marginTop: 10 }} >
               <h3 align="center">Update Vehicle Type</h3>
               <form onSubmit={this.onSubmit}>               
                    <div className="form-group">
                        <label>Vehicle Body:  </label>
                        <input type="text" className="form-control" 
                        value={this.state.vehicle_body}
                        onChange={this.onChangeVehicleBody}/>
                    </div>
                    <div className="form-group">
                        <label>Vehicle Make: </label>
                        <input type="text" className="form-control"
                        value={this.state.vehicle_make}
                        onChange={this.onChangeVehicleMake}/>
                    </div>
                    <div className="form-group">
                        <label>Vehicle Model: </label>
                        <input type="text" className="form-control"
                        value={this.state.vehicle_model}
                        onChange={this.onChangeVehicleModel}/>
                    </div>

                  <div className="form-group">
                      <input type="submit" value="Update" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}