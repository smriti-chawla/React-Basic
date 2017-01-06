/**
 * Created by TTND on 12/27/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import Watch from '../components/watch';
import CartList from '../components/cartList'

export default class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
                    <div>This is home page
                      <ul role="nav" className="navigation">
                        <li><Link to="/watch">Watch</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                      </ul>
                      {this.props.children}
                    </div>
                );
    }
}
