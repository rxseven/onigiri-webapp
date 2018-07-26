// Action types
import { MODAL_CLOSE, MODAL_OPEN } from './types';

// Open modal
export const openModal = () => ({
  type: MODAL_OPEN
});

// Close modal
export const closeModal = () => ({
  type: MODAL_CLOSE
});
