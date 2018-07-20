// Module dependencies
import { combineReducers } from 'redux-immutable';

// Reducers
import surveyReducer from './survey/reducers';

// Combine reducers
export default combineReducers({
  survey: surveyReducer
});
