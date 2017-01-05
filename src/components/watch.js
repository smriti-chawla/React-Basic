import React, { Component } from 'react';
import configureStore from '../store';


export class Watch extends Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
  }
  start() {

    configureStore.dispatch({
      type: 'SECOND_UPDATE',
      second: this.props.second  + 1
    });
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
