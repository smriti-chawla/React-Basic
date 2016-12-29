/**
 * Created by TTND on 12/27/2016.
 * Create a stop watch component. called StopWatch This component should have a button and a timer inside it. On click of the button, the timer should start and should display the time passed (since the click of the button) every second. On click of the button again, the timer should stop and the displayed time should freeze.

 TIP: componentWillUnmount should be used
 */
import React from 'react';


export default class StopWatch  extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            buttonVal: 'Start',
            time: 0
        };
        this.handleClick =this.handleClick.bind(this);

    }

    componentDidMount() {

        if(this.state.buttonVal =="Start") {
            this.timerID = setInterval(
                () => this.changeTime(),
                0.001
            );
        }
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    changeTime(){
        if(this.state.buttonVal =="Stop") {
            return this.setState({
                time: this.state.time + 1
            });
        }
    }

    handleClick() {
        this.setState({
            buttonVal: this.state.buttonVal == 'Start' ? 'Stop' : 'Start'
        });

    }
    msToTime(duration) {
        let milliseconds = parseInt((duration%99))
            , seconds = parseInt((duration/99))
            , minutes = parseInt((duration/(99*60)))
            , hours = parseInt((duration/(99*60*60)));

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }
    render() {
        let time = this.msToTime.call(this,this.state.time);
        return (
            <div>
                <div>Time Passed: {time}</div>
                <button onClick={this.handleClick}>{this.state.buttonVal}</button>
            </div>

        );
    }

}
