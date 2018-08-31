// @flow
// Module dependencies
import { Map } from 'immutable';
import { createSelector } from 'reselect';

// Action and static types
import { MODAL_CLOSE, MODAL_OPEN, UNKNOWN, type Action, type Modal } from './types';

// Selectors
import { getNode } from '../../selectors';

// Static types
type Key = Object;
type Model = Modal;
type State = any;

// State shape
export const stateShape: Model = {
  isOpen: false
};

// Immutable key path
const statePath: Key = {
  isOpen: 'isOpen'
};

// Initial state
export const initialState: State = Map(stateShape);

// Reducer
export default (state: State = initialState, action: Action = { type: UNKNOWN }): State => {
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

// Get modal state
export const getModal = createSelector(getNode, node => node.getIn(['interfaces', 'modal']));
