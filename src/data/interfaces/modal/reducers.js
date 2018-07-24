// Module dependencies
import { Map } from 'immutable';
import { createSelector } from 'reselect';

// Action types
import { MODAL_CLOSE, MODAL_OPEN } from './actions';

// Initial state
const initialState = Map({
  isOpen: false
});

// Immutable map
const map = {
  isOpen: 'isOpen'
};

// Reducer
export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    // Visibility
    case MODAL_CLOSE:
      return state.set(map.isOpen, false);
    case MODAL_OPEN:
      return state.set(map.isOpen, true);

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.getIn(['data', 'interfaces']);

// Get modal state
export const getModal = createSelector(getNode, node => node.get('modal'));
