/**
 * Created by TTND on 12/27/2016.
 * Apply prop validation on userDetail component. prop user in UserDetail should be an object with key name (string), age (number), avatar (string).
 */
import React from 'react';


export default class CartTotal  extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {items} = this.props;
        let total = 0;
        items.map((item,index)=>{
            total += (item.price * item.qty);
        });

        return(
                <tr><td>Total: {total}</td></tr>
            );
    }

}
