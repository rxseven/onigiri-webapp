// Module dependencies
import { combineReducers } from 'redux';

import modalReducer from './modal/reducer';

// Reducer
export default combineReducers({
  modal: modalReducer
});
