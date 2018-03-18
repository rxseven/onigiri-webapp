// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import interfacesReducer from './interfaces/reducer';

// Combine reducers
export default combineReducers({
  interfaces: interfacesReducer
});
