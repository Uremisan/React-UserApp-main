import React from 'react';
import { connect } from 'react-redux';
import {Login} from '../actions/authActions';


class login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        email: "",
        password: ""
    };
}

  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (props) => {
    this.props.Login(this.state.email, this.state.password);
  }

  render (){
    return (
      <form>
        <h2>Log in</h2>
        <fieldset>
          <label>Email</label><br></br>
          <input type="text" value={this.state.email} name="email" onChange={this.handleOnChange}></input>
        </fieldset>

        <fieldset>
          <label>Password</label><br></br>
          <input type="password" value={this.state.password} name="password" onChange={this.handleOnChange}></input>
        </fieldset>

        <div>
        <br /><button type="button" onClick={this.handleSubmit}>Log in</button><br />
        </div>
      </form>
    )
  }

}

const mapDispatchToProps = { Login };
export default connect(null, mapDispatchToProps)(login);