import React from 'react';
import { connect } from 'react-redux';
import {Signup} from '../actions/authActions';

class signup extends React.Component {
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
    this.props.Signup(this.state.email, this.state.password);
  }

  render (){
    return (
      <form>
        <h2>Sign Up</h2>
        <fieldset>
          <label>Email</label><br></br>
          <input type="text" value={this.state.email} name="email" onChange={this.handleOnChange}></input>
        </fieldset>

        <fieldset>
          <label>Password</label><br></br>
          <input type="password" value={this.state.password} name="password" onChange={this.handleOnChange}></input>
        </fieldset>

        <div>
        <br /><button type="button" onClick={this.handleSubmit}>Sign Up</button><br />
        </div>
      </form>
    )
  }

}

const mapDispatchToProps = { Signup };
export default connect(null, mapDispatchToProps)(signup);