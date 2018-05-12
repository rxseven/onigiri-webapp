// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import landingReducer from './landing/reducers';

// Combine reducers
export default combineReducers({
  landing: landingReducer
});
