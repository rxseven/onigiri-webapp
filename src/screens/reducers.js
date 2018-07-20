// Module dependencies
import { combineReducers } from 'redux-immutable';

// Reducers
import surveys from './Surveys/reducers';
import users from './Users/reducers';

// Combine reducers
export default combineReducers({
  surveys,
  users
});
