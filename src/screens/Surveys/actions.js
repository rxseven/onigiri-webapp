// Action types
export const SURVEY_DELETE = 'Survey/SURVEY_DELETE';
export const SURVEY_DELETE_FAILURE = 'Survey/SURVEY_DELETE_FAILURE';
export const SURVEY_DELETE_SUCCESS = 'Survey/SURVEY_DELETE_SUCCESS';

export const SURVEY_REMOVE = 'Survey/SURVEY_REMOVE';

export const SURVEY_SELECTED_ADD = 'Survey/SURVEY_SELECTED_ADD';
export const SURVEY_SELECTED_REMOVE = 'Survey/SURVEY_SELECTED_REMOVE';

// Add selected survey
export const addSelectedSurvey = id => ({
  payload: id,
  type: SURVEY_SELECTED_ADD
});

// Remove selected survey
export const removeSelectedSurvey = () => ({
  type: SURVEY_SELECTED_REMOVE
});

// Delete survey : Start
export const deleteSurvey = (id, callback) => ({
  callback,
  payload: { id },
  type: SURVEY_DELETE
});

// Delete survey : Failure
export const deleteSurveyFailure = error => ({
  payload: error,
  type: SURVEY_DELETE_FAILURE
});

// Delete survey : Success
export const deleteSurveySuccess = data => ({
  payload: data,
  type: SURVEY_DELETE_SUCCESS
});

// Remove survey from its list
export const removeSurvey = id => ({
  payload: id,
  type: SURVEY_REMOVE
});
