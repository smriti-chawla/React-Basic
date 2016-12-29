/**
 * Created by TTND on 12/27/2016.
 * Create a stop watch component. called StopWatch This component should have a button and a timer inside it. On click of the button, the timer should start and should display the time passed (since the click of the button) every second. On click of the button again, the timer should stop and the displayed time should freeze.

 TIP: componentWillUnmount should be used
 */
import React from 'react';


export default class InputField  extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

            return(
                <input type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.props.updateUser} />
                );
    }

}
