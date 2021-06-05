import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import Editform from './Editform';
import { connect } from "react-redux";
import { deleteUserAction } from "../actions/userActions";


class UserItem extends React.Component{
  constructor(props){  
    super(props)
    this.state = {
        show : false
    };
}
handleDelete = () => {
  this.props.deleteUser(this.props.user.id); 
}

closeModal = () =>{
  this.setState(
     {show : false}
  )
}
showModal = () =>{
  this.setState(
      {show : true}
  )
}

  render (){
  return (
    <div className="row">
      <div className="col-md-3"><h4>Username</h4>{this.props.user.username}</div>
      <div className="col-md-3"><h4>Email</h4>{this.props.user.email}</div>
      <div className="col-md-2"><h4>Country</h4>{this.props.user.country}</div>
      
      <div className="col-md-4"><h4>Action</h4>
        <button id="b1" onClick={this.showModal}>Update</button>
        <Modal show={this.state.show} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Editform
              user={this.props.user}
              updateUser={this.props.updateUser} 
              hideModal={this.closeModal}
            />
          </Modal.Body>
        </Modal>

        <button id="b2"
        onClick = {this.handleDelete}
        >Delete</button>
      </div>
    </div>
    
  )
  }
}


var mapDispatchToProps = {
  deleteUser : deleteUserAction
}

export default connect(null, mapDispatchToProps)(UserItem);