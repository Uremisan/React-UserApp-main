import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { getAllUsersAction } from '../actions/userActions';

class UserList extends React.Component{ 
  constructor(props){
    super(props)
}

componentDidMount(){//display all users when the component mounts
    this.props.getAllUsersAction()
}
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

const mapDispatchToProps = {
  getAllUsersAction,
}

export default connect (mapStateToProps, mapDispatchToProps)(UserList);