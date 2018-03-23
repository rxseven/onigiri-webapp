// Module dependencies
import { combineReducers } from 'redux';

// Actions
import { SURVEY_GET, SURVEY_GET_FAILURE, SURVEY_GET_SUCCESS } from './data/survey/actions';

// Reducers
import dataReducer from './data/reducer';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  get: { survey: { ...STATE_MODELS.model.asynchronous } }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get survey
    case SURVEY_GET:
      return {
        ...state,
        get: {
          ...state.get,
          survey: {
            ...initialState.get.survey,
            loading: true
          }
        }
      };
    case SURVEY_GET_FAILURE:
      return {
        ...state,
        get: {
          ...state.get,
          survey: {
            ...initialState.get.survey,
            error: action.payload
          }
        }
      };
    case SURVEY_GET_SUCCESS:
      return {
        ...state,
        get: {
          ...state.get,
          survey: initialState.get.survey
        }
      };

    // Default
    default:
      return state;
  }
};

// UI reducer
const uiReducer = combineReducers({
  asynchronous: asyncReducer
});

// Combine reducers
export default combineReducers({
  data: dataReducer,
  ui: uiReducer
});
