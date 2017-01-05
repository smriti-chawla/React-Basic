import React, { Component } from 'react';

export default class CartTotal extends Component {

  render() {
    const itemList = [...this.props.itemList];
    let total = 0;
    itemList.map((item,index)=>{
      total += (item.price * item.qty);
    });

    return (
        <tr><td>Total: {total}</td></tr>
    );
  }
}
