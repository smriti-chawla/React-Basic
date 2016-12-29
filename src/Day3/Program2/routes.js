/**
 * Created by TTND on 12/27/2016.
 */
import React, {Component} from 'react'
import Home from './home';
import LoginFailed from './loginFailed';
import Login from './Login';

import App from './App'
import {Router, Route, browserHistory,IndexRoute } from 'react-router';
let isUserLoggedIn = false;

function checkAuth(nextState,replace) {

    if(!isUserLoggedIn) {
        replace({
            path: './'
        })
    }
}
export default (

             <Route path="/"  component={App}>
                 <IndexRoute component={Login}/>
                 <Route path="/home" component={Home}/>
                <Route path="/failed" component={LoginFailed} />
            </Route>


)