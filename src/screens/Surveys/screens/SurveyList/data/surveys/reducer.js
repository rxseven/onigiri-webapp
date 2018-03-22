// Module dependencies
import { mapKeys } from 'lodash';

// Actions
import { SURVEYS_GET, SURVEYS_GET_FAILURE, SURVEYS_GET_SUCCESS } from './actions';

// Initial state
const initialState = {
  data: {},
  meta: {}
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    // Get surveys
    case SURVEYS_GET:
    case SURVEYS_GET_FAILURE:
      return state;
    case SURVEYS_GET_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...mapKeys(action.payload.data, '_id')
        },
        meta: {
          ...action.payload.meta
        }
      };

    // Default
    default:
      return state;
  }
};
