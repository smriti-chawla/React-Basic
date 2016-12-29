/**
 * Created by TTND on 12/27/2016.
 * Create a component Water having a state variable as temperature. Render Water is in solid state if temperature <= 0, Water is in a liquid state if temperature > 0 and < 100, Water in Gas state if temperature >= 100. Change the state of the component from react extension in the browser.
 */
import React from 'react';
export default class Temperature  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: 0};


    }
    componentDidMount(){
        {setInterval(() => {this.getRandomArbitrary.bind(this);},5000);}
    }
    componentWillUnmount() {

    }
    getRandomNumber(min, max) {
        return  Math.random() * (max - min) - min;
    }
    getRandomArbitrary() {
//        let min=-10, max=110;
//        const randomTemperature = Math.random() * ((max - min) -min);
        let randomTemperature = this.getRandomNumber(-10,110);
        this.setState ({
            temperature: randomTemperature
        });
    }


    render() {
        return (
            <div>
            {this.state.temperature}
</div>
);
}

}

