import React from 'react';
import { connect } from 'react-redux';

import {
  changeName,
  changeAge,
  addTweet,
  fetchTweets,
  changeSeconds,
  changeMinutes,
  changeHours,
  incQty,
  decQty,
  removeQty,
  addItem,
  logginIn

} from './actions';

import { TweetsList } from './components/TweetsList';
import { AddTweet } from './components/AddTweet'
import Watch from './components/watch';
import CartList from './components/cartList';
import Login from './components/Login';

class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor of parent', props);
    this.onChangeNameClick = this.onChangeNameClick.bind(this);
    this.onAddTweet = this.onAddTweet.bind(this);
    this.fetchMoreTweets = this.fetchMoreTweets.bind(this);
  }

  onChangeNameClick() {
    this.props.dispatch(changeName('Manoj'));
  }

  onAddTweet(tweet) {
    this.props.dispatch(addTweet(tweet));
  }


  fetchMoreTweets() {
    this.props.getTweets();
  }


  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        {
          this.props.tweets.loading ? <p>Loading tweets</p> : null
        }
        <button onClick={this.onChangeNameClick}>Change Name to Manoj</button>
        <button onClick={this.fetchMoreTweets}>fetch more tweets</button>
        <AddTweet onAdd={this.props.addTweet} />
        <TweetsList tweets={this.props.tweets.tweets} />
        <Watch {...this.props}/>

        <CartList {...this.props}/>
        <Login {...this.props}/>
        {this.props.children}
      </div>
    );
  }
}

let MainComponent = connect((state) => {
  return state;
}, (dispatch) => {
  return {
    addTweet (tweet) {
      dispatch(addTweet(tweet));
    },
    getTweets() {
      dispatch(fetchTweets());
    },
    changeSeconds(second) {
      dispatch(changeSeconds(second));

    },
    changeMinutes(minute) {
      dispatch(changeMinutes(minute));

    },
    changeHours(hour) {
      dispatch(changeHours(hour));
    },
    incQty(index) {
      dispatch(incQty(index));
    },
    decQty(index) {
      dispatch(decQty(index));
    },
    removeQty(index) {
      dispatch(removeQty(index));
    },
    addItem(item) {
      dispatch(addItem(item));
    },
    logginIn(userName,password) {
      dispatch(logginIn(userName,password));
    }
  };
})(Main);

export default MainComponent;

