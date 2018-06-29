// Action types
export const SURVEYS_CANCEL = 'Surveys/data/SURVEYS_CANCEL';
export const SURVEYS_CANCEL_FAILURE = 'Surveys/data/SURVEYS_CANCEL_FAILURE';
export const SURVEYS_CANCEL_SUCCESS = 'Surveys/data/SURVEYS_CANCEL_SUCCESS';

export const SURVEYS_GET = 'Surveys/data/SURVEYS_GET';
export const SURVEYS_GET_FAILURE = 'Surveys/data/SURVEYS_GET_FAILURE';
export const SURVEYS_GET_SUCCESS = 'Surveys/data/SURVEYS_GET_SUCCESS';

export const SURVEYS_RESET_DATA = 'Surveys/data/SURVEYS_RESET_DATA';
export const SURVEYS_SELECT_MODE = 'Surveys/data/SURVEYS_SELECT_MODE';

// Cancel getting surveys : Start
export const cancelSurveys = () => ({
  type: SURVEYS_CANCEL
});

// Cancel getting surveys : Failure
export const cancelSurveysFailure = () => ({
  type: SURVEYS_CANCEL_FAILURE
});

// Cancel getting surveys : Success
export const cancelSurveysSuccess = () => ({
  type: SURVEYS_CANCEL_SUCCESS
});

// Get a list of surveys : Start
export const getSurveys = (query, callback) => ({
  callback,
  payload: { query },
  type: SURVEYS_GET
});

// Get a list of surveys : Failure
export const getSurveysFailure = error => ({
  payload: error.response.data.error,
  type: SURVEYS_GET_FAILURE
});

// Get a list of surveys : Success
export const getSurveysSuccess = data => ({
  payload: data,
  type: SURVEYS_GET_SUCCESS
});

// Reset surveys data
export const resetData = () => ({
  type: SURVEYS_RESET_DATA
});

// Select list view mode
export const selectMode = query => ({
  payload: query,
  type: SURVEYS_SELECT_MODE
});
