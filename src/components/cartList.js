import React, { Component } from 'react';
import  {incQty,
  decQty,
  removeQty,
  addItem} from '../actions';
import CartTotal from './cartTotal';

export default class CartList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      inputCart:''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({inputCart: event.target.value});
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
    if(item) {
      this.props.addItem(item);
    }
  }
  render() {

    const itemList = [...this.props.cart.itemList];
    return (
      <div>
        <form onSubmit={(event) => {event.preventDefault(); this.onItemAdd(this.state.inputCart);}}>
          <input type="text" value={this.state.inputCart} name="inputCart" onChange={this.handleChange}/>
        </form>
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
          <CartTotal itemList={itemList}/>
          </tbody>
        </table>

      </div>
    )
  }
}
