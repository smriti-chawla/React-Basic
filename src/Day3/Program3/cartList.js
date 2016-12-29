/**
 * Created by TTND on 12/27/2016.
 * Create components Cart, Item and CartTotal. Cart component displays list of Items and CartTotal. (set items in the state of Cart)  sample items = [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}, ]
 */
import React from 'react';
import CartTotal from './CartTotal'


export default class CartList  extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {itemList} = this.props;

        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {
                    itemList.map((item, index) => {
                    return <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                        <td>
                            <button onClick={() => this.props.incQty(index)}>+</button>
                        </td>
                        <td>
                            <button onClick={() => this.props.decQty(index)}>-</button>
                        </td>
                        <td>
                            <button onClick={() => this.props.removeItem(index)}>X</button>
                        </td>
                    </tr>
                })
                    }

                <CartTotal itemList={itemList}/>
            </table>
            );
    }

}