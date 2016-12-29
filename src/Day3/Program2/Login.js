/**
 * Created by TTND on 12/29/2016.
 */
import React from 'react';
import {Router, Route, browserHistory } from 'react-router';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userName: '', password:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let initialValue = this.state;
        this.setState(initialValue)
        initialValue[event.target.name] = event.target.value;

    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.userName);
        if(this.state.userName !== 'smriti' && this.password !== '123') {
           browserHistory.push('/failed');
        }
        else {
            browserHistory.push('/home');
        }
        event.preventDefault();

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