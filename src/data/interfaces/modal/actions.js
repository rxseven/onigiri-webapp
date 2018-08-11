// @flow
// Action and static types
import { MODAL_CLOSE, MODAL_OPEN, type Action } from './types';

// Open modal
export const openModal = (): Action => ({
  type: MODAL_OPEN
});

// Close modal
export const closeModal = (): Action => ({
  type: MODAL_CLOSE
});
