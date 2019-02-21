import React from 'react';
import ReactDOM from 'react-dom';
import  {BrowserRouter}  from 'react-router-dom';
//import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
//import {Dropdown} from 'react-dropdown'
import Axios from 'axios';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
   
<BrowserRouter>
   <App />
</BrowserRouter>, 
document.getElementById('root'));
Axios.defaults.baseURL='http://localhost:4001';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
