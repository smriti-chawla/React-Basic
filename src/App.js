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
  addItem

} from './actions';

import { TweetsList } from './components/TweetsList';
import { AddTweet } from './components/AddTweet'
import  {Watch} from './components/watch';
import {Cart} from './components/cart'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
          hour: 0,
          minute: 0,
          second:0
    };
    console.log('constru of parent', props);
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


  // componentDidMount() {
  //
  //   this.timerId = setInterval(
  //     () => this.updateSeconds(),
  //     1000
  //   );
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timerId);
  // }

  updateSeconds() {
    if(this.state.second >= 60 ) {
      this.setState({
        second: 0
      });
      this.updateMinutes();
    }
    else {
      this.setState({
        second: this.state.second + 1
      });
    }
    this.props.changeSeconds(this.state.second)
  }

  updateMinutes() {
    if(this.state.minute >= 60 ) {
      this.setState({
        minute: 0
      });
      this.updateHours();
    }
    else {
      this.setState({
        minute: this.state.minute + 1
      });
    }
    this.props.changeMinutes(this.state.minute);
  }
  updateHours() {
    if(this.state.second >= 24 ) {
      this.setState({
        hour: 0
      });
    }
    else {
      this.setState({
        hour: this.state.hour + 1
      });
    }

    this.props.changeHours(this.state.hour);
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
    <Watch/>
        <div>
          Time:
          {this.state.hour}: {this.state.minute}: {this.state.second}
        </div>
        <Cart {...this.props}/>
  </div>
  )
  }
}

var AppComponent = connect((state) => {
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
       dispatch(changeSeconds(second))

    },
    changeMinutes(minute) {
      dispatch(changeMinutes(minute))

    },
    changeHours(hour) {
     dispatch(changeHours(hour))
    },
    incQty(index) {
      dispatch(incQty(index))
    },
    decQty(index) {
      dispatch(decQty(index))
    },
    removeQty(index) {
      dispatch(removeQty(index))
    },
    addItem(item) {
      dispatch(addItem(item))
    }
  }
})(App);

export default AppComponent;

