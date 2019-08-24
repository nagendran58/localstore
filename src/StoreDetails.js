import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
//var apiBaseUrl = "http://localhost:8080/";
import axios from 'axios';
//import UploadPage from './UploadPage';
class StoreDetails extends Component {
  constructor(props) {
    super(props);
    var localloginComponent = [];
    localloginComponent.push(
      <MuiThemeProvider key={"theme"}>
        <div>
          <TextField
            hintText="Enter your Store name"
            floatingLabelText="Store Name"
            onChange={(event, newValue) => this.setState({ storeName: newValue })}
          />
          <br />
          <TextField
            hintText="Enter your store address"
            floatingLabelText="Store Address"
            onChange={(event, newValue) => this.setState({ storeAddress: newValue })}
          />
          <br />
          <TextField
            hintText="Enter your pin code"
            floatingLabelText="Pincode"
            onChange={(event, newValue) => this.setState({ storePin: newValue })}
          />
          <br />
          <TextField
            hintText="Enter your search tags"
            floatingLabelText="Search Tags"
            onChange={(event, newValue) => this.setState({ storeTag: newValue })}
          />
          <br />
          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
        </div>
      </MuiThemeProvider>
    )
    this.state = {
      storeName: '',
      storeAddress: '',
      storePin:'',
      storeTag:'',
      approvalStatus:'',
      remarks:'',
      loginComponent: localloginComponent
    }
  }
  componentWillMount() {
    
  }
  handleClick(event) {
    var self = this;
    var payload = {
      "storeName": this.state.storeName,
      "storeAddress": this.state.storeAddress,
      "storePin": this.state.storePin,
      "storeTag": this.state.storeTag,
      "approvalStatus": this.state.approvalStatus,
      "remarks":this.state.remarks
    }
    var apiBaseUrl = "http://localhost:8080/";
    //post body
      axios.post(apiBaseUrl+'store/addStore', payload)
     .then(function (response) {
       console.log(response);
       if(response.status == 200){
         console.log("Saved successful");
        //  var uploadScreen=[];
        //  uploadScreen.push(<UploadPage appContext={self.props.appContext} role={self.state.loginRole}/>)
        //  self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
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

  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="Store Details"
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

export default StoreDetails;
