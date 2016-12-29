/**
 * Created by TTND on 12/27/2016.
 * Create a application with three routes : /home, /about, /contact-us. Create components for each route. Make /home index route. Refer screenshot at https://drive.google.com/file/d/0B5RL4MwvJrLmd1NCM2lCS0VTOTA/view
 */
import React from 'react';
import { Link } from 'react-router';
import About from './aboutUs';
import Contact from './ContactUs';
import Home from './home';
import './style.css';

export default class App extends React.Component {

    render() {
        return (

            <div>
                <ul role="nav" className="navigation">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
        {this.props.children}
            </div>
        );
    }
}