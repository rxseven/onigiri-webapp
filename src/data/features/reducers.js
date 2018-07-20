// Module dependencies
import { combineReducers } from 'redux-immutable';

// Reducers
import payments from './payments/reducers';

// Combine reducers
export default combineReducers({ payments });
