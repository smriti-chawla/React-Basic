import {
  CHANGE_AGE,
  CHANGE_NAME,
  ADD_TWEET,
  FETCH_TWEET_FAILED,
  FETCH_TWEET_SUCCESS,
  FETCH_TWEET_STARTED,
  SECOND_UPDATE,
  MINUTE_UPDATE,
  HOUR_UPDATE,
  PERIOD,
  INC_QTY,
  DEC_QTY,
  REMOVE_QTY,
  ADD_ITEM,
  LOGGING_IN
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
export function changeSeconds(second) {
  return {
    type: SECOND_UPDATE,
    second
  }
}

export function changeMinutes(minute) {
  return {
    type: MINUTE_UPDATE,
    minute
  }
}
export function changeHours(hour) {
  return {
    type: HOUR_UPDATE,
    hour
  }
}

export function changeTime(period) {
  return {
    type: PERIOD,
    period
  }
}


export function incQty(index) {
  return {
    type: INC_QTY,
    index
  }
}

export function decQty(index) {
  return {
    type: DEC_QTY,
    index
  }
}

export function removeQty(index) {
  return {
    type: REMOVE_QTY,
    index
  }
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item
  }
}

export function fetchTweetsStarted() {
  return {
    type: FETCH_TWEET_STARTED
  }
}

export function logginIn(isUserLoggedIn) {
  return {
    type:LOGGING_IN,
    isUserLoggedIn

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
