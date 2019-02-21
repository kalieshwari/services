import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export default class create_vehicle extends Component {
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
    //console.log(`The values are ${this.state.vehicle_body}, ${this.state.vehicle_make} and ${this.state.vehicle_model}`)
     const obj = {
         vehicle_body: this.state.vehicle_body,
         vehicle_make: this.state.vehicle_make,
         vehicle_model: this.state.vehicle_model
         };
          axios.post('/vehicletype/add_vehicle',obj).then(res => console.log(res.data)).then(() => this.setState({ redirect: true }));

  }
 
  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/index_vehicle" />;
    }
      return (
          <div style={{ marginTop: 10 }}>
               <h3>Vehicle Types</h3>
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
                      <input type="submit" value="Add" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}