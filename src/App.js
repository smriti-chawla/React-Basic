import React from 'react';
// import { connect } from 'react-redux';

// import {
//   changeName,
//   changeAge,
//   addTweet,
//   fetchTweets,
//   changeSeconds,
//   changeMinutes,
//   changeHours,
//   incQty,
//   decQty,
//   removeQty,
//   addItem,
//   logginIn
//
// } from './actions';

// import { TweetsList } from './components/TweetsList';
// import { AddTweet } from './components/AddTweet'
// import Watch from './components/watch';
// import CartList from './components/cartList';
// import Login from './components/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor of parent', props);
    // this.onChangeNameClick = this.onChangeNameClick.bind(this);
    // this.onAddTweet = this.onAddTweet.bind(this);
    // this.fetchMoreTweets = this.fetchMoreTweets.bind(this);
  }

  // onChangeNameClick() {
  //   this.props.dispatch(changeName('Manoj'));
  // }
  //
  // onAddTweet(tweet) {
  //   this.props.dispatch(addTweet(tweet));
  // }
  //
  //
  // fetchMoreTweets() {
  //   this.props.getTweets();
  // }


  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// let AppComponent = connect((state) => {
//   return state;
// }, (dispatch) => {
//   return {
//     addTweet (tweet) {
//       dispatch(addTweet(tweet));
//     },
//     getTweets() {
//       dispatch(fetchTweets());
//     },
//     changeSeconds(second) {
//       dispatch(changeSeconds(second));
//
//     },
//     changeMinutes(minute) {
//       dispatch(changeMinutes(minute));
//
//     },
//     changeHours(hour) {
//       dispatch(changeHours(hour));
//     },
//     incQty(index) {
//       dispatch(incQty(index));
//     },
//     decQty(index) {
//       dispatch(decQty(index));
//     },
//     removeQty(index) {
//       dispatch(removeQty(index));
//     },
//     addItem(item) {
//       dispatch(addItem(item));
//     },
//     logginIn(userName,password) {
//       dispatch(logginIn(userName,password));
//     }
//   };
// })(App);
//
// export default AppComponent;

