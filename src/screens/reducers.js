// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import surveysReducer from './Surveys/reducers';
import usersReducer from './Users/reducers';

// Combine reducers
export default combineReducers({
  surveys: surveysReducer,
  users: usersReducer
});
