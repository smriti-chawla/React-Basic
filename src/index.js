/* eslint-disable no-console */
import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './program2';
import Header from './program3';
import Users from './program4';
import BasicPage from './program5';
import User from './program6';
import UserPage from './program7';
import Water from './Day2/program1';
import Temperature from './Day2/program2';
import UserDetail from './Day2/program3';
import UserValidation from './Day2/program4'
import Cart from './Day2/Cart';
import StopWatch from './Day2/StopWatch';
import Registration from './Day2/Registration'


let app = document.getElementById('main');

const user = [
    {name: 'John', age: 25, avatar: 'https://randomuser.me/api/portraits/men/15.jpg'},
    {name: 'Joe', age: 35, avatar: 'https://randomuser.me/api/portraits/men/13.jpg'},
    {name: 'Andrei', age: 45, avatar: 'https://randomuser.me/api/portraits/men/10.jpg'},
    {name: 'Ted', age: 29, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    {name: 'Ben', age: 30, avatar:'https://randomuser.me/api/portraits/men/2.jpg' }
];

//render(<HelloWorld />, app)
//render(<Header comp ={HelloWorld}/>, app)
//render(<Users />, app)
//render(<BasicPage />, app)
//render(<User />, app)
//render(<UserPage />, app)
//render(<Water />, app)
//render(<Temperature />, app)
//render(<UserDetail user={user}/>, app)
//render(<UserValidation user={user}/>, app)
//render(<Cart/>, app)
//render(<StopWatch/>, app)
render(<Registration/>,app)