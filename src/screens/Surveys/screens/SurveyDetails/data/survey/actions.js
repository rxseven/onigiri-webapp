// Action types
export const RECIPIENTS_GET = 'Survey/data/RECIPIENTS_GET';
export const RECIPIENTS_GET_FAILURE = 'Survey/data/RECIPIENTS_GET_FAILURE';
export const RECIPIENTS_GET_SUCCESS = 'Survey/data/RECIPIENTS_GET_SUCCESS';

export const SURVEY_GET = 'Survey/data/SURVEY_GET';
export const SURVEY_GET_FAILURE = 'Survey/data/SURVEY_GET_FAILURE';
export const SURVEY_GET_SUCCESS = 'Survey/data/SURVEY_GET_SUCCESS';

export const SURVEY_RESET_DATA = 'Survey/data/SURVEY_RESET_DATA';

export const SURVEY_UPDATE = 'Survey/SURVEY_UPDATE';
export const SURVEY_UPDATE_FAILURE = 'Survey/SURVEY_UPDATE_FAILURE';
export const SURVEY_UPDATE_SUCCESS = 'Survey/SURVEY_UPDATE_SUCCESS';

// Get survey : Start
export const getSurvey = (id, callback) => ({
  callback,
  payload: { id },
  type: SURVEY_GET
});

// Get survey : Failure
export const getSurveyFailure = error => ({
  payload: error.response.data.error,
  type: SURVEY_GET_FAILURE
});

// Get survey : Success
export const getSurveySuccess = data => ({
  payload: data,
  type: SURVEY_GET_SUCCESS
});

// Get recipients : Start
export const getRecipients = id => ({
  payload: { id },
  type: RECIPIENTS_GET
});

// Get recipients : Failure
export const getRecipientsFailure = error => ({
  payload: error.response.data.error,
  type: RECIPIENTS_GET_FAILURE
});

// Get recipients : Success
export const getRecipientsSuccess = data => ({
  payload: data,
  type: RECIPIENTS_GET_SUCCESS
});

// Reset data
export const resetData = () => ({
  type: SURVEY_RESET_DATA
});

// Update survey : Failure
export const updateSurveyFailure = error => ({
  payload: error.response.data.error,
  type: SURVEY_UPDATE_FAILURE
});

// Update survey : Success
export const updateSurveySuccess = data => ({
  payload: data,
  type: SURVEY_UPDATE_SUCCESS
});

// Update survey : Start
export const updateSurvey = (id, values) => ({
  payload: {
    id,
    values
  },
  type: SURVEY_UPDATE
});
