// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import surveysReducer from './surveys/reducers';

// Combine reducers
export default combineReducers({
  surveys: surveysReducer
});
