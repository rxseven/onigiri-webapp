// Module dependencies
import { createSelector } from 'reselect';

// Actions
import { MODAL_CLOSE, MODAL_OPEN } from './actions';

// Initial state
const initialState = {
  isOpen: false
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false
      };
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: true
      };
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.data.interfaces;

// Get modal state
export const getModal = createSelector(getNode, node => node.modal);
