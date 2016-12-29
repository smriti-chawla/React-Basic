/**
 * Created by TTND on 12/27/2016.
 * Create components Cart, Item and CartTotal. Cart component displays list of Items and CartTotal. (set items in the state of Cart)  sample items = [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}, ]
 */
import React from 'react';
import CartList from './cartList';

export default class Cart  extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            itemList : [{name:'a', price:20, qty:1},
                {name:'b', price:10, qty:1},
                {name:'c', price:30, qty:1}
            ],
            inputCart:'',
            errMsg: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.incQty= this.incQty.bind(this),
        this.decQty = this.decQty.bind(this),
        this.removeItem = this.removeItem.bind(this)
    }
    handleChange(event) {
        this.setState({inputCart: event.target.value});
    }

    handleSubmit(e) {
        let re = /(?:\S)+-(?:\d)+$/;
        if(re.test(this.state.inputCart.value)) {
            console.log(this.state.errorMsg);
            this.setState({
                errorMsg: 'Not a valid Input'
            })
        }

        else {
            let val = this.state.inputCart;
            let newItem = this.state.inputCart.split("-");
            let itemlist = this.state.itemList;
            let elevalue ={qty: 1};
            elevalue.name=newItem[0];
            elevalue.price=newItem[1];
            if(val){
                itemlist.push(elevalue);
                this.setState({items: itemlist,input:''});
            }
        }

        e.preventDefault()
    }
    incQty(index) {
//        console.log(2,index);
        let newColl = this.state.itemList;
        newColl[index].qty++;
        this.setState({
            itemList: newColl
        });
    }
    decQty(index) {
        console.log(2, index);
        if(this.state.itemList[index].qty >= '1') {
            let newColl = this.state.itemList;
            newColl[index].qty--;
            this.setState({
                itemList:newColl});
        }

    }
    removeItem(index) {
        console.log(3);
        let newColl = this.state.itemList;
        newColl.splice(index, 1);
        this.setState({
            itemList:newColl});
    }
    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.inputCart} name="inputCart" onChange={this.handleChange}/>
                <CartList itemList={this.state.itemList} incQty={this.incQty} decQty={this.decQty} removeItem={this.removeItem}/>
            </form>

            );
    }

}