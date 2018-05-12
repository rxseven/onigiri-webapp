// Module dependencies
import { combineReducers } from 'redux';

import modalReducer from './modal/reducers';
import sessionReducer from './session/reducers';

// Reducer
export default combineReducers({
  modal: modalReducer,
  session: sessionReducer
});
