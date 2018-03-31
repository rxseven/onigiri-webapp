// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import surveyReducer from './survey/reducer';

// Combine reducers
export default combineReducers({
  survey: surveyReducer
});
