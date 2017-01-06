/**
 * Created by TTND on 1/6/2017.
 */

import React, {Component} from 'react';
import Home from '../components/home';
import Login from '../components/Login';
import App from '../App';
import Watch from '../components/watch';
import CartList from '../components/cartList';
import {Router, Route,IndexRoute } from 'react-router';
let isLoggedIn = false;

// function checkAuth(nextState,replace) {
//   console.log(this.props);
//   if(!isLoggedIn) {
//     replace({
//       path: './'
//     });
//   }
// }
export default (
  <Route path="/"  component={App}>
    <IndexRoute component={Login}/>
    <Route path="/home" component={Home}>
        <Route path="/watch" component={Watch}/>
        <Route path="/cart" component={CartList}/>
    </Route>
  </Route>
);
