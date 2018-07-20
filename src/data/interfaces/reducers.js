// Module dependencies
import { combineReducers } from 'redux-immutable';

// Reducers
import modal from './modal/reducers';
import session from './session/reducers';

// Combine reducers
export default combineReducers({
  modal,
  session
});
