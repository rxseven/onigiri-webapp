// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

// Actions
import { SIGNOUT, SIGNOUT_FAILURE, SIGNOUT_SUCCESS } from '../../session/actions';

// Constants
import STATE_MODELS from '../../../constants/models/state';

// Initial state
const initialState = {
  signout: {
    ...STATE_MODELS.model.asynchronous
  }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNOUT:
      return {
        ...state,
        signout: {
          ...initialState.signout,
          loading: true
        }
      };
    case SIGNOUT_FAILURE:
      return {
        ...state,
        signout: {
          ...initialState.signout,
          error: action.payload
        }
      };
    case SIGNOUT_SUCCESS:
      return {
        ...initialState
      };

    // Default
    default:
      return state;
  }
};

// Combine reducers
export default combineReducers({
  asynchronous: asyncReducer
});

// Non-memoized utility selectors
const getNode = state => state.data.interfaces;

// Get session state
export const getSession = createSelector(getNode, node => node.session);
