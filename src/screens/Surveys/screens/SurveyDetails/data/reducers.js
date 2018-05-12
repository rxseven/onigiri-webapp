// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import surveyReducer from './survey/reducers';

// Combine reducers
export default combineReducers({
  survey: surveyReducer
});
