/**
 * Created by TTND on 12/27/2016.
 * Create components Cart, Item and CartTotal. Cart component displays list of Items and CartTotal. (set items in the state of Cart)  sample items = [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}, ]
 */
import React from 'react';
import ScrollTop from './ScrollTop';

export default class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            background: 'black',
            top: '',
            left:'',
            right:'0',
            bottom:'0'
        };


    }

    render() {
        return (

            <div>
                <h1>React Basic</h1>
                <h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1><h1>React Basic</h1>
                <ScrollTop display={this.state.display} top={this.state.top} left={this.state.left} right={this.state.right} bottom={this.state.bottom} background={this.state.background}/>
            </div>

            );
    }

}