import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Redirect } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom'
// var apiBaseUrl = "http://localhost:4000/api/";
import axios from 'axios';
import StoreDetails from './StoreDetails';
//import UploadPage from './UploadPage';
class Login extends Component {
  constructor(props) {
    super(props);
    var localloginComponent = [];
    localloginComponent.push(
      <MuiThemeProvider key={"theme"}>
        <div>
          <TextField
            hintText="Enter your Login Id"
            floatingLabelText="Login Id"
            onChange={(event, newValue) => this.setState({ username: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) => this.setState({ password: newValue })}
          />
          <br />
          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
        </div>
      </MuiThemeProvider>
    )
    this.state = {
      username: '',
      password: '',
      menuValue: 1,
      loginComponent: localloginComponent
    }
  }



  componentWillMount() {
    // console.log("willmount prop values",this.props);
    if (this.props.role != undefined) {
        var localloginComponent = [];
        localloginComponent.push(
          <MuiThemeProvider>
            <div>
              <TextField
                hintText="Enter your Login Id"
                floatingLabelText="Login Id"
                onChange={(event, newValue) => this.setState({ username: newValue })}
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) => this.setState({ password: newValue })}
              />
              <br />
              <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </div>
          </MuiThemeProvider>
        )
        //this.setState({ menuValue: 1, loginComponent: localloginComponent, loginRole: 'role' })
  
    }
  }
  handleClick(event) {
    var self = this;
    var payload = {
      "personUserName": this.state.personUserName,
      "personId": this.state.personId,
      "personPassword": this.state.personPassword,
      "personName": this.state.personName
    }

 var apiBaseUrl = "http://localhost:8080/";
      axios.post(apiBaseUrl+'storePersonLogin/login', payload)
     .then(function (response) {
       console.log(response.status);
       console.log("@@@@"+response.status==200);
       if(response.status == 200){

         console.log("Login successfull");
         alert("Login successfull");
         var uploadScreen=[];
         //<Redirect to="/login" />
         //<Route path='' component={StoreDetails} />
       
        //uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
    //      self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
       }
       else{
         console.log("Username does not exists");
         alert("Username does not exist");
       }
     })
     .catch(function (error) {
       console.log(error);
     });
  }
  handleMenuChange(value) {
    console.log("menuvalue", value);
    var loginRole;
    // if (value == 1) {
      var localloginComponent = [];
      loginRole = 'role';
      localloginComponent.push(
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Enter your Login Id"
              floatingLabelText="Login Id"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
          </div>
        </MuiThemeProvider>
      )
    this.setState({
      menuValue: value,
      loginComponent: localloginComponent,
      loginRole: loginRole
    })
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="Login"
          />
        </MuiThemeProvider>
        {this.state.loginComponent}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default Login;
