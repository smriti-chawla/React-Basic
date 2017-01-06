/**
 * Created by TTND on 12/29/2016.
 */
import React from 'react';
import {Router, Route, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {

  logginIn

} from '../actions';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', password:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let initialValue = this.state;
        this.setState(initialValue);
        initialValue[event.target.name] = event.target.value;
    }

    componentWillReceiveProps(newProps) {
      if(newProps.login.isUserLoggedIn) {
        browserHistory.push('/home');
      }
    }

    handleSubmit(event) {
      event.preventDefault();
      if(!this.state.userName || !this.state.password){
          console.log('enter both the fields');
      }
      this.props.logginIn(this.state.userName, this.state.password);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <tr>
                    <td>User Name:</td>
                    <td><input name="userName" type="text" value={this.state.userName} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input name="password" type="password" value={this.state.password} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <td><input type="submit" value="Submit" /></td>
                </tr>
            </form>
            );
    }
}
let loginComponent = connect((state) => {
  console.log('login state', state);
  return state;
}, (dispatch) => {
  return {
    logginIn(userName,password) {
      dispatch(logginIn(userName,password));
    }
  };
})(Login);

export default loginComponent;
