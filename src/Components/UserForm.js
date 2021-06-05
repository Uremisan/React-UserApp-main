import React, {useState} from 'react';
import { connect } from 'react-redux';
import './UserForm.css'
import {addUser, addUserAction} from '../actions/userActions'

class UserForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        username: "",
        email: "",
        country: "",
        password: ""
    };
}

  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = () => {
    let userId = 10000 + Math.random() * 10000000;
    let user = {...this.state, id:userId};
    this.props.addNewUser(user);
    this.setState({
      username : "",
      email : "",
      country : "",
      password : ""
  })
  }
  
  render(){
  return (
    <div className="wrapper">
      <form>
        <h1>User Form</h1>
        <fieldset>
          <br /><label className="check">Username</label><br />
          <input type="text" id="textboxid" name="username" value={this.state.username} onChange={this.handleOnChange}></input>
        </fieldset> 
        
        <div>
          <fieldset>
          <br /><label className="check">Email</label><br />
          <input type="email" id="textboxid" name="email" value={this.state.email} onChange={this.handleOnChange}></input>
          </fieldset>
        </div> 

        <div>
          <fieldset>
          <br /><label className="check">Password</label><br />
          <input type="password" id="textboxid" name="password" value={this.state.password} onChange={this.handleOnChange}></input>
          </fieldset>
        </div> 

        <div>
          <fieldset>
          <br /><label className="check">Country</label><br />
          <input type="text" id="textboxid" name="country" value={this.state.country} onChange={this.handleOnChange}></input>
          </fieldset>
        </div> 

        <div>
          <br /><button type="button" onClick={this.handleSubmit}> Create User</button><br />
        </div>
      </form>
    </div>
  );
  }
}

const mapDispatchToProps = {
  addNewUser : addUserAction
}

export default  connect(null,mapDispatchToProps)(UserForm);