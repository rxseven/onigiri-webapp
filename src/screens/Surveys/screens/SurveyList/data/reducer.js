// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import surveysReducer from './surveys/reducer';

// Combine reducers
export default combineReducers({
  surveys: surveysReducer
});
