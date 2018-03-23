// Actions
import { SURVEY_GET, SURVEY_GET_FAILURE, SURVEY_GET_SUCCESS } from './actions';

// Initial state
const initialState = {};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    // Get survey
    case SURVEY_GET:
    case SURVEY_GET_FAILURE:
      return state;
    case SURVEY_GET_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    // Default
    default:
      return state;
  }
};
