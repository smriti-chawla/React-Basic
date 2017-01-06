import {
  LOGGING_IN
} from '../constants';
import {browserHistory} from 'react-router';

let initialState ={
  isUserLoggedIn: false
};
const loginReducer = function (state = initialState, action) {
  console.log(state, 'loggin in', action);
  switch (action.type) {
    case LOGGING_IN: {
      if(action.userName === 'smriti' && action.password === '123') {
        return {...state, isUserLoggedIn: true};
      }
    }
  }
  return state;

};

export default loginReducer;
