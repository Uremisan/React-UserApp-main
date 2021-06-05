import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';

class UserList extends React.Component{ 
  render(){
  return (
    <div className="wrap">
      <h1>User List</h1>
      <br /><br />
      {this.props.usersData.map((user) => (
        
        <UserItem user={user} delete={this.props.deleteUser} updateUser={this.props.updateUser} />
  ))}
    </div>
  )
  }
}
const mapStateToProps = (state) =>{
  return{
  usersData: state.users
}
}

export default connect (mapStateToProps)(UserList);