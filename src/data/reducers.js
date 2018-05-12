// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import creditsReducer from './credits/reducers';
import featuresReducer from './features/reducers';
import interfacesReducer from './interfaces/reducers';
import sessionReducer from './session/reducers';

// Combine reducers
export default combineReducers({
  credits: creditsReducer,
  features: featuresReducer,
  interfaces: interfacesReducer,
  session: sessionReducer
});
