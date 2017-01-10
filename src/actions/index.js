import
{
  API_STARTED,
  GET_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_SUCCESS,
  API_FAILED,
  ENDPOINT
}
from '../constants';
import fetch from 'isomorphic-fetch';

export function apiCallStarted() {
  return {
    type: API_STARTED
  };
}

export function getEmpSuccess(list) {
  return {
    type: GET_EMPLOYEE_SUCCESS,
    list
  };
}

export function apiCallFailed() {
  return {
    type: API_FAILED
  };
}

export function getEmployeeList() {
  return (dispatch) => {
    dispatch(apiCallStarted());
    fetch(ENDPOINT)
      .then((response) => {
        return response.json();
      })
      .then(json => {
        console.log(json, "Employee List found");
        dispatch(getEmpSuccess(json));
      })
      .catch((e) => {
        console.log("Error fetching response", e);
        dispatch(apiCallFailed());
      });
  };
}

export function deleteEmployeeSuccess(employee) {
  console.log('delete employee action', employee);
  return {
    type: DELETE_EMPLOYEE_SUCCESS,
    employee: employee
  }
}


export function deleteEmployee(param) {
  return (dispatch) => {
    dispatch(apiCallStarted());
    console.log(param, 'parameter');
    console.log(ENDPOINT + param, 'endpoint');
    fetch(ENDPOINT + param,{
      method: "DELETE"
    }).then((response) => {
        dispatch(deleteEmployeeSuccess(param));
    }).catch((e) => {
        console.log("Error fetching response", e);
        dispatch(apiCallFailed());
      });
  };
}


export function updateEmployee(param) {
  return (dispatch) => {
    dispatch(apiCallStarted());
    fetch('http://rest.learncode.academy/api/learncode/employee/'+param.id, {
      method: "PUT",
      body: JSON.stringify(param),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then((response) => {
        return response.json();
      })
      .then(json => {
        dispatch(updateEmployeeSuccess(json));
      })
      .catch(e => {
        console.log("Error fetching response", e);
        dispatch(apiCallFailed(e));
      })
  };
}


export function updateEmployeeSuccess(employee) {
    return {
      type: UPDATE_EMPLOYEE_SUCCESS,
      employee: employee
    }
}


export function addEmployeeSuccess(employee) {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    employee: employee
  }
}

export function addEmployee(param) {
  return (dispatch) => {
    dispatch(apiCallStarted());
    fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then((response) => {
        return response.json();
      })
      .then(json => {
        dispatch(addEmployeeSuccess(json));
      })
      .catch(e => {
        console.log("Error fetching response", e);
        dispatch(apiCallFailed(e));
      })
  };
}
