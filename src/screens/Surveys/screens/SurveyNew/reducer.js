// Module dependencies
import { combineReducers } from 'redux';

// Actions
import { SURVEY_CREATE, SURVEY_CREATE_FAILURE, SURVEY_CREATE_SUCCESS } from './actions';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case SURVEY_CREATE:
      return {
        ...state,
        post: {
          ...initialState.post,
          loading: true
        }
      };
    case SURVEY_CREATE_FAILURE:
      return {
        ...state,
        post: {
          ...initialState.post,
          error: action.payload
        }
      };
    case SURVEY_CREATE_SUCCESS:
      return {
        ...initialState
      };
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
  ui: uiReducer
});
