// @flow
// Module dependencies
import { Map } from 'immutable';
import { createSelector } from 'reselect';

// Action and static types
import { MODAL_CLOSE, MODAL_OPEN, type Action, type Modal } from './types';

// Static types
type Key = Object;
type Model = Modal;
type State = any;

// State shape
const stateShape: Model = {
  isOpen: false
};

// Immutable key path
const statePath: Key = {
  isOpen: 'isOpen'
};

// Initial state
const initialState: State = Map(stateShape);

// Reducer
export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // Visibility
    case MODAL_CLOSE:
      return state.set(statePath.isOpen, false);
    case MODAL_OPEN:
      return state.set(statePath.isOpen, true);

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.getIn(['data', 'interfaces']);

// Get modal state
export const getModal = createSelector(getNode, node => node.get('modal'));
