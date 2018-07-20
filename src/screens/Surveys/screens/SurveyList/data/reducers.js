// Module dependencies
import { combineReducers } from 'redux-immutable';

// Reducers
import surveys from './surveys/reducers';

// Combine reducers
export default combineReducers({
  surveys
});
