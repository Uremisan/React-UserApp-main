import './App.css';
import React from 'react';
import Dashboard from './pages/dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends React.Component{

  render(){
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={Dashboard}></Route>
        <Route path ="/login" component={Login}></Route>
        <Route path = "/signup" component={Signup}></Route>
      </Switch>
      </BrowserRouter>
    );
  }

}
export default App;