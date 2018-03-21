// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import paymentsReducer from './payments/reducer';

// Combine reducers
export default combineReducers({
  payments: paymentsReducer
});
