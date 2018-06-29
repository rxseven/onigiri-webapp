// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import modal from './modal/reducers';
import session from './session/reducers';

// Combine reducers
export default combineReducers({
  modal,
  session
});
