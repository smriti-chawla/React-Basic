import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import middlewares from '../utils/middlewares';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
const middleware = [ thunk ];
middleware.push(createLogger());

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(...middleware) 
  );
};
export default configureStore;
