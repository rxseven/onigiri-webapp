// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import creditsReducer from './credits/reducer';
import interfacesReducer from './interfaces/reducer';
import sessionReducer from './session/reducer';

// Combine reducers
export default combineReducers({
  credits: creditsReducer,
  interfaces: interfacesReducer,
  session: sessionReducer
});
