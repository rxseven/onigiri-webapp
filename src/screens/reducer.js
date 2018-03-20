// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import usersReducer from './Users/reducer';

// Combine reducers
export default combineReducers({
  users: usersReducer
});
