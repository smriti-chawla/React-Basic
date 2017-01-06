import {
  LOGGING_IN
} from '../constants';
import {browserHistory} from 'react-router';

let initialState ={
  isUserLoggedIn:false
};
const loginReducer = function (state = initialState, action) {
  console.log(state, 'loggin in', action);
  switch (action.type) {
    case LOGGING_IN: {
      alert('A name was submitted: ' + this.props.userName);
      if(this.props.userName === 'smriti' && this.props.password === '123') {
        browserHistory.push('/home');
        return {...state, isUserLoggedIn: true};
      }
    }
  }
  return state;

};

export default loginReducer;
