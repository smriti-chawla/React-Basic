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
  console.log('action', action);
  switch (action.type) {
    case SECOND_UPDATE: {
      let updateSecond=action.second;
      if(updateSecond < 60) {
        updateSecond++;
      }
      else {
        updateSecond=0;
      }
      return { ...state, second: updateSecond };
    }
    case MINUTE_UPDATE: {
      let updatedMinute=action.minute;
      if(updatedMinute < 60) {
        updatedMinute++;
      }
      else {
        updatedMinute=0;
      }
      return { ...state, minute: updatedMinute };
    }
    case HOUR_UPDATE: {
      let updatedHour=action.hour;
      if(updatedHour < 24) {
        updatedHour++;
      }
      else {
        updatedHour=0;
      }
      return { ...state, hour: updatedHour };
    }
    default: return state;
  }

};

export default watchReducer;
