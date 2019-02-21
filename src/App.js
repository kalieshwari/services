import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'; 
//import { LoginForm } from 'react-form-login';
//import { NavDropdown } from 'react-bootstrap';
//import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import Create from './components/create.service.component';
import Edit from './components/edit.service.component';
import Index from './components/index.service.component';
import CreateStation from './components/create_station.component';
import EditStation from './components/edit_station.component';
import IndexStation from './components/index_station.component';
import Home from './components/login.component';
import CreateVehicle from './components/create_vehicle.component';
import EditVehicle from './components/edit_vehicle.component';
import IndexVehicle from './components/index_vehicle.component';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">CAR WASH</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              
              <li className="nav-item">
                  <Link to={'/login'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit/id'} className="nav-link">Edit</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create_station'} className="nav-link">Create Station</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit_station/id'} className="nav-link">Edit Station</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index_station'} className="nav-link">Index Station</Link>
                </li>   
                <li className="nav-item">
                <Link to={'/create_vehicle'} className="nav-link">Create Type</Link>
              </li>
              <li className="nav-item">
                <Link to={'/edit_vehicle/id'} className="nav-link">Edit Type</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index_vehicle'} className="nav-link">Index Type</Link>
              </li>
              </ul>              
            </div>
          </nav> <br/>
          <h2>CAR WASH</h2> <br/>         
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
              <Route path='/index' component={ Index } />
              <Route exact path='/create_station' component={ CreateStation } />
              <Route path='/edit_station/:id' component={ EditStation } />
              <Route path='/index_station' component={ IndexStation } />
              <Route path='/login' component={ Home } />
              <Route exact path='/create_vehicle' component={ CreateVehicle } />
            <Route path='/edit_vehicle/:id' component={ EditVehicle } />
            <Route path='/index_vehicle' component={ IndexVehicle } />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;