import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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

    if (this.props.auth.isLoaded === false)
    {
      return <h1>Page is Loading...</h1>
    }
  
    if (this.props.auth.isEmpty === false) {
      return <Redirect path = "/" />;
    }

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
const mapStateToProps = (state) => {
  return {
    auth: state.firebaseState.auth,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(signup);