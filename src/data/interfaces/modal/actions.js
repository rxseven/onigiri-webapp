// Actions
export const MODAL_CLOSE = 'data/interface/modal/MODAL_CLOSE';
export const MODAL_OPEN = 'data/interface/modal/MODAL_OPEN';

// Open modal
export const openModal = () => ({
  type: MODAL_OPEN
});

// Close modal
export const closeModal = () => ({
  type: MODAL_CLOSE
});
