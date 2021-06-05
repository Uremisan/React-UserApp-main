import React, { useState } from 'react';
import { connect } from "react-redux";
import {  editUserAction } from '../actions/userActions';


class EditUserForm extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    username: props.user.username,
    email: props.user.email,
    password: props.user.password,
    country: props.user.country,
  };
    
  }

  handleOnChange = (event) => {
    
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

 
  handleSubmit = () => {
    let user = { ...this.state, id: this.props.user.id }
    this.props.editUser(this.props.user.id, user);
    this.props.hideModal();
  }

  render(){
  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username} 
            onChange={this.handleOnChange} 
          />
        </div> 

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange} 
          />
        </div>

        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleOnChange} 
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange} 
          />
        </div>

        <div>
          
          <button type="button" onClick={this.handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  )
  }
}

var mapDispatchToProps = {
  editUser : editUserAction
}

export default connect(null, mapDispatchToProps)(EditUserForm);