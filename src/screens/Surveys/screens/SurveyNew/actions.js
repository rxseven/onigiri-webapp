// Action types
export const SURVEY_CREATE = 'SurveyNew/SURVEY_CREATE';
export const SURVEY_CREATE_FAILURE = 'SurveyNew/SURVEY_CREATE_FAILURE';
export const SURVEY_CREATE_SUCCESS = 'SurveyNew/SURVEY_CREATE_SUCCESS';

export const SURVEY_RESET_UI = 'SurveyNew/SURVEY_RESET_UI';

// Create survey : Start
export const createSurvey = (values, callback) => ({
  callback,
  payload: { values },
  type: SURVEY_CREATE
});

// Create survey : Failure
export const createSurveyFailure = error => ({
  payload: error.response.data.error,
  type: SURVEY_CREATE_FAILURE
});

// Create survey : Success
export const createSurveySuccess = data => ({
  payload: data,
  type: SURVEY_CREATE_SUCCESS
});

// Reset UI state
export const resetUI = () => ({
  type: SURVEY_RESET_UI
});
