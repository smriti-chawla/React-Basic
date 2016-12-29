/**
 * Created by TTND on 12/27/2016.
 */
import React, {Component} from 'react'
import Home from './home';
import About from './aboutUs';
import Contact from './ContactUs';
import App from './App';

import {Router, Route, hashHistory } from 'react-router';
export default (
            <Route path="/" component={App}>
                <Route path="home" component={Home}/>
                <Route path="about" component={About}/>
                <Route path="contact" component={Contact} />
            </Route>




)