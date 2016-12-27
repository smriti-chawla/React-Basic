/**
 * Created by TTND on 12/27/2016.
 * Create a component called "Header" which either displays the current logged in username (if a user is logged in) or a "Login" button (if no user is logged in) in the navbar. Use a hardcoded global variable "isUserLoggedIn" to check if user is logged in or not.
 NOTE: use ternary operator to achieve this
 */
import React from 'react';
let isUserLoggedIn = false;
export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        const user ="smriti";
        const displayDetails = isUserLoggedIn ? <div> hi {user}</div> : <button>Login </button>;

        return (
            <div>
                {displayDetails}
            </div>
            );
    }

}