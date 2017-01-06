/**
 * Created by TTND on 12/27/2016.
 * Create a component called BasicPage. This component should internally use 3 components namely "Header", "Content" and "Footer". The "Header" component should render the header of the page The "Footer" component should render the footer of the page The "Content" should render some dummy text Use the above mentioned 3 components to create a basic page
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
                        <Header/>
                        <Footer/>
                        <Content/>
                    </div>
            );
    }
}
