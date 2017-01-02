/**
 * Created by TTND on 12/27/2016.
 * Create components Cart, Item and CartTotal. Cart component displays list of Items and CartTotal. (set items in the state of Cart)  sample items = [ {name: 'item1', qty:2, price: 30}, {name: 'item2', qty:5, price: 10}, {name: 'item3', qty:7, price: 120}, ]
 */
import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class ScrollTop extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            display:'none'
        };
        this.handClick = this.handClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handClick(event) {

        let toTopInterval = setInterval(()=>{
            let supportedScrollTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

            if (supportedScrollTop.scrollTop > 0) {
            supportedScrollTop.scrollTop = supportedScrollTop.scrollTop - 100;
        }

        if (supportedScrollTop.scrollTop < 1) {
            clearInterval(toTopInterval);
        }
        },10);
    }
    handleScroll() {

            if(window.pageYOffset > 100) {
                this.setState({
                    display: "block"
                });
            }
            else {
                    this.setState({
                        display: "none"
                    });
            }

    }


    render() {
        const fontStyle= {
            position: 'fixed',
            top: this.props.top,
            bottom: this.props.bottom,
            left: this.props.left,
            right: this.props.right,
            color: this.props.background,
            fontSize:"40px",
            fontWeight:"bold",
            cursor:'pointer',
            display: this.state.display
        };
        return (
                <FontAwesome name="arrow-circle-up" style={fontStyle} onClick={this.handClick}/>
            );
    }


}
ScrollTop.propTypes = {
    top: React.PropTypes.number,
    bottom: React.PropTypes.number,
    left: React.PropTypes.number,
    right: React.PropTypes.number,
    background: React.PropTypes.string
};