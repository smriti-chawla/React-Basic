import {
  CHANGE_AGE,
  CHANGE_NAME
} from '../constants';

const initialState = {
  name: 'Kapil',
  age: 25
};

const userReducer = function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CHANGE_NAME: {
      return { ...state, name: action.name };
    }
    case CHANGE_AGE: {
      return { ...state, age: action.age };
    }
  }
  return state;
}

export default userReducer;