// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import landingReducer from './landing/reducer';

// Combine reducers
export default combineReducers({
  landing: landingReducer
});
