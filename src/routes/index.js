/**
 * Created by TTND on 1/6/2017.
 */

import React, {Component} from 'react'
import Home from '../components/home';
import Login from '../components/Login';
import App from '../App';
import {Router, Route,IndexRoute } from 'react-router';
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

  </Route>


)
