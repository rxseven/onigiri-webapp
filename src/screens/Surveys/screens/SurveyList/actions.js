// Action types
import { SURVEYS_RESET_VIEW, SURVEYS_SAVE_PAGINATION } from './types';

// Reset view
export const resetView = () => ({
  type: SURVEYS_RESET_VIEW
});

// Save pagination query
export const savePagination = values => ({
  payload: values,
  type: SURVEYS_SAVE_PAGINATION
});
