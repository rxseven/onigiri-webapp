// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import profileReducer from './screens/Profile/reducers';
import signinReducer from './screens/SignIn/reducers';
import signupReducer from './screens/SignUp/reducers';

// Combine reducers
export default combineReducers({
  profile: profileReducer,
  signin: signinReducer,
  signup: signupReducer
});
