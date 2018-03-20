// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import interfacesReducer from './interfaces/reducer';
import sessionReducer from './session/reducer';

// Combine reducers
export default combineReducers({
  interfaces: interfacesReducer,
  session: sessionReducer
});
