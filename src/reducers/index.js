import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import tweetsReducer from './tweets.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

export default rootReducer;
