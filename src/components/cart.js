import React, { Component } from 'react';
import  {incQty,
  decQty,
  removeQty,
  addItem} from '../actions';

export class Cart extends Component {
  constructor(props) {
    super(props);
    console.log(props,'props');
  }
  onIncQty(index) {
    this.props.incQty(index);
  }
  onDecQty(index) {
    this.props.decQty(index);
  }
  onRemoveQty(index) {
    this.props.removeQty(index);
  }
  onItemAdd(item) {
    this.props.addItem(item);
  }
  render() {
    console.log(this.props,'jdjkjjjjjjjjjjjjjjjj');
    const itemList = [...this.props.cart.itemList];

    // console.log(itemList,this.props.cart.itemList, 'itemlist', [...this.props.cart.itemList]);
    return (
      <table>
        <tbody>
        {
          itemList.map((item, index) => {
            return <tr key={index}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => this.onIncQty(index)}>Increase</button>
              </td>
              <td>
                <button onClick={() => this.onDecQty(index)}>Decrease</button>
              </td>
              <td>
                <button onClick={() => this.onRemoveQty(index)}>Remove</button>
              </td>
            </tr>
          })
        }
        </tbody>
      </table>
    )
  }
}
