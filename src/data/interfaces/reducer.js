// Module dependencies
import { combineReducers } from 'redux';

import modalReducer from './modal/reducer';
import sessionReducer from './session/reducer';

// Reducer
export default combineReducers({
  modal: modalReducer,
  session: sessionReducer
});
