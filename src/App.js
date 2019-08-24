import React, { Component } from 'react';
import './App.css';
import Loginscreen from './Loginscreen';
import StoreDetails from './StoreDetails';
import Register from './Register';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen appContext={this} key={"login-screen"}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
        <StoreDetails/>
        <Register/>
      </div>
    );
  }
}

export default App;
