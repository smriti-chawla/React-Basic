import {
  ADD_TWEET,
  FETCH_TWEET_STARTED,
  FETCH_TWEET_SUCCESS,
  FETCH_TWEET_FAILED
} from '../constants';

const initialState = {
  tweets: [1, 2, 3, 4],
  loading: false
};

const tweetsReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TWEET: {
      var newTweets = [].concat(state.tweets);
      newTweets.push(action.tweet);
      return { ...state, tweets: newTweets };
    }
    case FETCH_TWEET_STARTED: {
      return {...state, loading: true}
    }
    case FETCH_TWEET_FAILED: {
      return {...state, loading: false}
    }
    case FETCH_TWEET_SUCCESS: {
      var newTweets = [].concat(state.tweets).concat(action.tweets.map((tweet) => tweet.title));
      return {...state, loading: false, tweets: newTweets}
    }
  }
  return state;
}

export default tweetsReducer;
