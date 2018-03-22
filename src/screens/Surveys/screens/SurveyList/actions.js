// Actions
export const SURVEYS_SAVE_PAGINATION = 'Surveys/SURVEYS_SAVE_PAGINATION';

// Save pagination query
export const savePagination = values => ({
  type: SURVEYS_SAVE_PAGINATION,
  payload: values
});
