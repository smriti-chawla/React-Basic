import { combineReducers } from 'redux';
import employeeListReducer from './EmployeeList.Reducer';

const rootReducer = combineReducers({
  empList: employeeListReducer
});

export default rootReducer;
