// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import profileReducer from './profile/reducer';

// Combine reducers
export default combineReducers({
  profile: profileReducer
});
