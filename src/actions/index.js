import {
  CHANGE_AGE,
  CHANGE_NAME,
  ADD_TWEET,
  FETCH_TWEET_FAILED,
  FETCH_TWEET_SUCCESS,
  FETCH_TWEET_STARTED
} from '../constants';

import fetch from 'isomorphic-fetch';

export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name
  }
}

export function changeAge(age) {
  return {
    type: CHANGE_AGE,
    age
  }
}

export function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  }
}

export function fetchTweetsStarted() {
  return {
    type: FETCH_TWEET_STARTED
  }
}

export function fetchTweetsSuccess(tweets) {
  return {
    type: FETCH_TWEET_SUCCESS,
    tweets
  }
}

export function fetchTweetsFailed() {
  return {
    type: FETCH_TWEET_FAILED
  }
}

export function fetchTweets() {
  return (dispatch) => {
    dispatch(fetchTweetsStarted());
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();        
      })
      .then(json => {
        console.log(json, "Tweets found");
        dispatch(fetchTweetsSuccess(json))
      })
      .catch((e) => {
        console.log("Error fetching tweets", e);
        dispatch(fetchTweetsFailed())
      })
  }
}
