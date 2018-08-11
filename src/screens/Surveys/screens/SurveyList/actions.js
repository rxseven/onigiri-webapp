// @flow
// Action and static types
import { SURVEYS_RESET_VIEW, SURVEYS_SAVE_PAGINATION, type Action, type Pagination } from './types';

// Reset view
export const resetView = (): Action => ({
  type: SURVEYS_RESET_VIEW
});

// Save pagination query
export const savePagination = (values: Pagination): Action => ({
  payload: values,
  type: SURVEYS_SAVE_PAGINATION
});
