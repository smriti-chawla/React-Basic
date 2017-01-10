/**
 * Created by TTND on 1/6/2017.
 */
import {
  API_FAILED,
  GET_EMPLOYEE_SUCCESS,
  API_STARTED,
  DELETE_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_SUCCESS,
  ENDPOINT
} from '../constants';
let initialState ={
  loading: false,
  list:[]
};
const employeeListReducer = function (state = initialState, action) {
  console.log('Employee List Found');
  console.log(action.type);
  switch (action.type) {
    case API_STARTED: {
      return {...state, loading: true}
    }
    case GET_EMPLOYEE_SUCCESS: {
      let newEmp = action.list;
      return {...state, loading: false, list: newEmp}
    }
    case API_FAILED: {
      return {...state, loading: false}
    }
    case DELETE_EMPLOYEE_SUCCESS: {
      console.log(action ,'deleted action');
      debugger
      let deletedEmp = action.employee;
      let newList = [].concat(state.list);
      for(let i=0; i<newList.length; i++) {
        if(deletedEmp===newList[i].id) {
          newList.splice(i,1);
          console.log(newList, 'updated list');
          break;
        }
      }
      return {...state, loading: false, list: newList};

    }
    case ADD_EMPLOYEE_SUCCESS: {
      let newEmp=[].concat(state.list);
      newEmp.push(action.employee);
      return {...state, loading: false, list: newEmp};
    }
  }
  return state;

};
export default employeeListReducer;
