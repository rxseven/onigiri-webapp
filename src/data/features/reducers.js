// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import paymentsReducer from './payments/reducers';

// Combine reducers
export default combineReducers({
  payments: paymentsReducer
});
