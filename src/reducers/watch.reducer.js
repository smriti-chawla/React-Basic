import {
  SECOND_UPDATE,
  MINUTE_UPDATE,
  HOUR_UPDATE
} from '../constants';


let initialTime = {
  minute: 0,
  hour: 0,
  second: 0,
  period: 'am'
};

const watchReducer = function (state = initialTime, action) {

  console.log(action);
  console.log('action', action.time);
  switch (action.type) {
    case SECOND_UPDATE: {
      return { ...state, second: action.second };
    }
    case MINUTE_UPDATE: {
      return { ...state, minute: action.minute };
    }
    case HOUR_UPDATE: {
      return { ...state, hour: action.hour };
    }
    default: return state;
  }

};

export default watchReducer;
