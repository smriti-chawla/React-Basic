import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import tweetsReducer from './tweets.reducer';
import watchReducer from './watch.reducer';
import cartReducer from './cart.reducer';
import loginReducer from './login.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
  time: watchReducer,
  cart: cartReducer,
  login: loginReducer
});

export default rootReducer;
