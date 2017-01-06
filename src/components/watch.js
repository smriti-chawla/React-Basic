import React, { Component } from 'react';
import configureStore from '../store';
import {
  changeSeconds,
  changeMinutes,
  changeHours
} from '../actions'
import { connect } from 'react-redux';
class Watch extends Component {
  constructor(props) {
    super(props);
  }
  updateSeconds(second) {
    if(this.props.time.second === 60) {
      this.updateMinutes();
    }
    this.props.changeSeconds(this.props.time.second);
  }

  updateMinutes(minute) {
    if(this.props.time.minute ===60) {
      this.updateHours();
    }
    this.props.changeMinutes(this.props.time.minute);
  }
  updateHours(hour) {
    this.props.changeHours(this.props.time.hour);
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.updateSeconds(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    console.log('watch component', this.props);
    return (
      <div>
          Watch Value: {this.props.time.hour}: {this.props.time.minute}: {this.props.time.second}
      </div>
    );
  }
}

let WatchComponent = connect((state) => {
  return state;
}, (dispatch) => {
  return {

    changeSeconds(second) {
      dispatch(changeSeconds(second));

    },
    changeMinutes(minute) {
      dispatch(changeMinutes(minute));

    },
    changeHours(hour) {
      dispatch(changeHours(hour));
    }
  };
})(Watch);

export default WatchComponent;
