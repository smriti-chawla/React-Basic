/**
 * Created by TTND on 12/27/2016.
 * Create a component Water having a state variable as temperature. Render Water is in solid state if temperature <= 0, Water is in a liquid state if temperature > 0 and < 100, Water in Gas state if temperature >= 100. Change the state of the component from react extension in the browser.
 */
import React from 'react';
export default class Water  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: 0};
        this.tempValue = this.tempValue.bind(this)
    }
    tempValue(e) {
        this.setState ({
            temperature: e.target.value
        });
    }

    render() {
        const displayDetails =
            (this.state.temperature <= 0) ? <div> Water is in a solid state</div> : (this.state.temperature > 0 && this.state.temperature < 100) ? <div>Water in Liquid state</div>: <div>Water in Gas state</div>

        return (
            <div>
                Temperature: {this.state.temperature}
                <p>Note: change in state can be seen on the blur event on an input.</p>
                {displayDetails}

                <input type="text" onBlur={this.tempValue}/>
            </div>
);
}

}

