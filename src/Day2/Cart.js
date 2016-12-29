/**
 * Created by TTND on 12/27/2016.
 * Create components Cart, Item and CartTotal. Cart component displays list of Items and CartTotal. (set items in the state of Cart)  sample items = [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}, ]
 */
import React from 'react';
import CartItem from './CartItem'

export default class Cart  extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            items : [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}]
        }
    }

    render() {

        return (
            <CartItem cartValue = {this.state.items} />

        );
    }

}
