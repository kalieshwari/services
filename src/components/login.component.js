import React, { Component } from 'react';
//import ReactSignupLoginComponent from 'react-signup-login-component';
//import { LoginForm } from 'react-form-login';
//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class Home extends Component {
    constructor(){
        super()
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state={
            email:'',
            password:''
        }
        
    }
    onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
      onSubmit(e) {
        e.preventDefault();
        console.log(`The values are ${this.state.email}, and ${this.state.password}`)
        this.setState({
            email: '',
            password: ''
          })
        //const obj = {
          //email: this.state.email,
          //password: this.state.password         
        //};       
    }
    render() {
        return (
            
            <div>
                <p>Welcome to TIDI!!</p>
                <div className="form-group">
                        <label>Emailid: </label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="text" placeholder="emailid/phone number"
                        value={this.state.email}
                        onChange={this.onChangeEmail}/>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>&nbsp;
                        <input type="password" placeholder="enter password"
                        value={this.state.password}
                        onChange={this.onChangePassword}/>
                    </div>
                    <div><button>Sign In</button> &nbsp;&nbsp;
                     <a href="www.w3schools.com" >forgot password?</a>
                     <br></br><br></br>
                     <label>
                         <input type="checkbox"name="remember"/> Remember me </label>                        
                     
                     </div>                    
                     <a href="https://www.w3schools.com/html/">new to tidi?</a> &nbsp;
                     <a href="https://www.w3schools.com/html/">signup now</a>
                     <br>
                     </br><br></br>
                     <a href="https://www.w3schools.com/html/">needhelp?</a>
                    
                    
            </div>
            
        )
    }
}
