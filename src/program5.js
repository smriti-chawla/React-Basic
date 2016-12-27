/**
 * Created by TTND on 12/27/2016.
 */
import React from 'react'
import Header from './header.js'
import Footer from './footer.js'
import Content from './Content.js'
export default class BasicPage extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
                    <div>
                        <Header></Header>
                        <Footer></Footer>
                        <Content></Content>
                    </div>
            );
    }
}