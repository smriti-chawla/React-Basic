import React, { Component } from 'react';


export class AddTweet extends Component {
  addTweet() {
    var val = this.refs.tweetInput.value;
    this.props.onAdd(val);
    this.refs.tweetInput.value = '';
  }

  render() {
    return (
      <div>
        <input defaultValue={''} ref={'tweetInput'} />
        <button onClick={this.addTweet.bind(this)}> Add Tweet </button>
      </div>
    )
  }
}