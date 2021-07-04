import UserForm from '../Components/UserForm';
import UserList from '../Components/UserList';
import UserItem from '../Components/UserItem';
import { useState} from 'react';
import Editform from '../Components/Editform';
import React from 'react';

class Dashboard extends React.Component{

  render(){
    return (
      <div className="row">
        <div className = "col-md-6 userinput">

          <UserForm addUser = {this.addUser} /> 
        </div>
        
        <div className = "col-md-6 userlist">
          <UserList />   
        </div>
        
      </div>
  
    );
  }

}
export default Dashboard;