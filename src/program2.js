/**
 * Created by TTND on 12/27/2016.
 * Create a simple component called HelloWorld. This component only renders "Hello World" on the screen
 */

import React from 'react'

export default class HelloWorld extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (<h1>Hello World</h1>);
    }
}

