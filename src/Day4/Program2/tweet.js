/**
 * Created by TTND on 12/27/2016.
 * Create components Cart, Item and CartTotal. Cart component displays list of Items and CartTotal. (set items in the state of Cart)  sample items = [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}, ]
 */
import React from 'react';
require('./tweet.scss');
export default class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            limit:'150',
            charleft:'150',
            event: 'none',
            background: 'grey'

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

        if(event.target.value.length <1 || event.target.value.length >= 150) {
            this.setState({
                event: 'none',
                background:'grey',
                value: event.target.value,
                charleft: this.state.limit - event.target.value.length
            });
        }
        else {
            this.setState({
                event: 'inherit',
                background:'rgba(255, 87, 34, 0.91)',
                value: event.target.value,
                charleft: this.state.limit - event.target.value.length
            });
        }

    }
    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const textareaStyling ={
            width: '50%',
            padding: '10px',
            margin: '0 10px 0 0'
        };
        const subButton = {
            verticalAlign: 'top',
            width: '150px',
            height: '30px',
            marginTop: '10px',
            pointerEvents: this.state.event,
            background: this.state.background,
            border:'none'
        };
        return (
            <div>
                <textarea className="textarea-cont" placeholder="Write your tweet in this box." value={this.state.value} onChange={this.handleChange} style= {textareaStyling}/>
                <input onClick={this.handleSubmit} type="submit" value="Submit"  style= {subButton}/>
                <div>{this.state.charleft}</div>
            </div>
            );
    }


}