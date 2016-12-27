/**
 * Created by TTND on 12/27/2016.
 */
import React from 'react';
let isUserLoggedIn = false;
export default class Header extends React.Component {
    constructor() {
        super();
    }
    handleEvent() {
        console.log('hello')
        isUserLoggedIn =true;
    }
    render() {
        const user ="smriti";
        const displayDetails = isUserLoggedIn ? <div> hi {user}</div> : <button onClick={this.handleEvent}>Login </button>;

        return (
            <div>
                {displayDetails}
            </div>
            );
    }

}