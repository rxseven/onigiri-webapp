// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import newReducer from './screens/SurveyNew/reducer';

// Combine reducers
export default combineReducers({
  new: newReducer
});
