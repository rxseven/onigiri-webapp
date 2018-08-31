// @flow
// Action types
export const MODAL_CLOSE = 'data/interface/modal/MODAL_CLOSE';
export const MODAL_OPEN = 'data/interface/modal/MODAL_OPEN';
export const UNKNOWN = 'UNKNOWN';

// Static types
export type Modal = { isOpen: boolean };
export type Action =
  | { type: typeof MODAL_CLOSE }
  | { type: typeof MODAL_OPEN }
  | { type: typeof UNKNOWN };
