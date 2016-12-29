/**
 * Created by TTND on 12/27/2016.
 * Create a component called "Header" which either displays the current logged in username (if a user is logged in) or a "Login" button (if no user is logged in) in the navbar. Use a hardcoded global variable "isUserLoggedIn" to check if user is logged in or not.
 NOTE: use ternary operator to achieve this
 */
import React from 'react';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isUserLoggedIn: false};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isUserLoggedIn: !prevState.isUserLoggedIn
        }));
    }

    render() {
        const user ="smriti";
        const displayDetails = this.state.isUserLoggedIn ? <div> hi {user}</div> : <button onClick={this.handleClick}>Login </button>;

        return (
            <div>
                {this.props.comp}
                {displayDetails}

                {this.props.name}
</div>
        );
    }

}
// Specifies the default values for props:
Header.defaultProps = {
    name: 'abc'
};
Header.propTypes  = {
    name: React.PropTypes.string.isRequired
}

class head extends  React.Component {
   componentWillMount() {
       console.log('componentWillMount')
   }
    componentDidMount() {
     console.log('componentDidMount')
    }
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

}
