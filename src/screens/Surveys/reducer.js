// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import detailsReducer from './screens/SurveyDetails/reducer';
import doorwayReducer from './screens/SurveyDoorway/reducer';
import listReducer from './screens/SurveyList/reducer';
import newReducer from './screens/SurveyNew/reducer';

// Combine reducers
export default combineReducers({
  details: detailsReducer,
  doorway: doorwayReducer,
  list: listReducer,
  new: newReducer
});
