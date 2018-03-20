// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import signinReducer from './screens/SignIn/reducer';
import signupReducer from './screens/SignUp/reducer';

// Combine reducers
export default combineReducers({
  signin: signinReducer,
  signup: signupReducer
});
