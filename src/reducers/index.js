// Module dependencies
import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { reducer as burgerMenu } from 'redux-burger-menu/immutable';

// Reducers
import data from 'data/reducers';
import screens from 'screens/reducers';

// Combine reducers
const reducer = combineReducers({
  burgerMenu,
  data,
  form,
  screens
});

// Module exports
export default reducer;
