// Module dependencies
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as menuReducer } from 'redux-burger-menu';

// Reducers
import dataReducer from '../data/reducers';
import screensReducer from '../screens/reducers';

// Combine reducers
const reducer = combineReducers({
  burgerMenu: menuReducer,
  data: dataReducer,
  form: formReducer,
  screens: screensReducer
});

// Module exports
export default reducer;
