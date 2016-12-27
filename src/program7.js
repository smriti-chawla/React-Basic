/**
 * Created by TTND on 12/27/2016.
 * Create a page called UserPage. Use the "Header", "Users" and "Footer" components created above to create a complete page for the user details including header, footer and the content.
 */
import React from 'react'
import Header from './header.js'
import Footer from './footer.js'
import User from './program6'
export default class UserPage extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
                    <div>
                        <Header></Header>
                        <User></User>
                        <Footer></Footer>

                    </div>
            );
    }
}