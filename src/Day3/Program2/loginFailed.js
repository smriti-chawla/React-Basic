/**
 * Created by TTND on 12/27/2016.
 */
import React from 'react';
import {Router, Route, browserHistory } from 'react-router';

export default class LoginFailed extends React.Component {

    handleSubmit(event)
    {

        browserHistory.push('/');
        event.preventDefault();

    }

    render() {

        return (
            <div>
                Login failed
                <button onClick={this.handleSubmit}>Back to Login</button>
            </div>
            );
    }
}