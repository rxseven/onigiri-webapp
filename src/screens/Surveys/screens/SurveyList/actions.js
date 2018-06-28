// Action types
export const SURVEYS_RESET_VIEW = 'Surveys/SURVEYS_RESET_VIEW';
export const SURVEYS_SAVE_PAGINATION = 'Surveys/SURVEYS_SAVE_PAGINATION';

// Reset view
export const resetView = () => ({
  type: SURVEYS_RESET_VIEW
});

// Save pagination query
export const savePagination = values => ({
  payload: values,
  type: SURVEYS_SAVE_PAGINATION
});
