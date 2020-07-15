import { combineReducers } from 'redux';
import errors from './errors';
import auth from './auth';
import langReducer from './lang'
export default combineReducers({
    errors,
  auth,
  language : langReducer,
});
