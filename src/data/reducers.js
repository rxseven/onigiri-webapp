// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import credits from './credits/reducers';
import features from './features/reducers';
import interfaces from './interfaces/reducers';
import session from './session/reducers';

// Combine reducers
export default combineReducers({
  credits,
  features,
  interfaces,
  session
});
