/**
 * Created by TTND on 12/27/2016.
 * Apply prop validation on userDetail component. prop user in UserDetail should be an object with key name (string), age (number), avatar (string).
 */
import React from 'react';
import CartTotal from './CartTotal';

export default class CartItem  extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {cartValue} = this.props;

        let dataValue = cartValue.map((item, index) =>(
            <CartDisplay item={item} key={index}/>
        ));

        return (
            <table>
               <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {dataValue}
                <CartTotal items={cartValue}/>
            </table>
            );
    }

}



class CartDisplay extends React.Component {
    render() {
        const {item} = this.props;
        const data = ( <tr>
                         <td>{item.name}</td>
                         <td>{item.qty}</td>
                         <td>{item.price}</td>
                       </tr>);
        return (
            data
        );
    }
}

