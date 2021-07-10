import UserForm from '../Components/UserForm';
import UserList from '../Components/UserList';
import UserItem from '../Components/UserItem';
import { useState} from 'react';
import Editform from '../Components/Editform';
import React from 'react';
import { logout } from '../actions/authActions';
import { connect } from 'react-redux';



class Dashboard extends React.Component{

    handleLogout = () => {
    this.props.logout();
  }

  render()
  {
    return (
      <div className="row">
        <div className = "col-md-6 userinput">

          <UserForm addUser = {this.addUser} /> <br></br>
          <button onClick={this.handleLogout}>Log out</button> 
        </div>
        
        <div className = "col-md-6 userlist">
          <UserList />  
        </div>
        
      </div>
  
    );
  }

}

const mapDispatchToProps = { logout}
export default connect (null, mapDispatchToProps) (Dashboard);