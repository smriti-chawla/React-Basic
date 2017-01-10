/**
 * Created by TTND on 1/6/2017.
 */
import App from '../App';
import React, {Component} from 'react';
import EmpList from '../component/empList';
import {Route,IndexRoute} from 'react-router';
import UpdateEmp from '../component/updateEmp';

export default (
  <Route path="/"  component={App}>
    <IndexRoute component={EmpList}/>
    <Route path="/create" component={UpdateEmp}/>
    <Route path="/" component={UpdateEmp}/>
  </Route>
);
